"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	navLinks,
	serviceNavs,
	type NavLink,
	type ServiceNavLink,
} from "@/lib/config/navigation";

const MotionLink = motion(Link);

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [openServiceDropdown, setOpenServiceDropdown] = useState<string | null>(
		null
	);
	const pathname = usePathname();

	const isServiceLink = (link: NavLink): link is ServiceNavLink =>
		"items" in link;

	const matchesPath = (href: string) => {
		const [base] = href.split("#");
		return pathname === href || pathname === base;
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	};

	return (
		<>
			<header
				className={`px-6 md:px-12 lg:px-20 flex justify-between items-center border-b border-border sticky top-0 z-50 transition-all duration-300 ${
					scrolled
						? "bg-[#faf7f3] backdrop-blur-lg shadow-sm"
						: "bg-[#faf7f3] backdrop-blur-md"
				}`}
			>
				<Logo className="cursor-pointer" />

				<nav className="hidden md:flex gap-10 text-foreground items-center">
					{navLinks.map((link) => {
						const isActive =
							matchesPath(link.href) ||
							(isServiceLink(link) && pathname?.startsWith(link.href));

						if (isServiceLink(link)) {
							const isDropdownOpen = openServiceDropdown === link.href;

							return (
								<div
									key={link.href}
									onMouseLeave={() => {
										setOpenServiceDropdown((current) =>
											current === link.href ? null : current
										);
									}}
								>
									<DropdownMenu
										modal={false}
										open={isDropdownOpen}
										onOpenChange={(isOpen) =>
											setOpenServiceDropdown(isOpen ? link.href : null)
										}
									>
										<DropdownMenuTrigger asChild>
											<MotionLink
												href={link.href}
												onClick={(e) => handleSmoothScroll(e, link.href)}
												onMouseEnter={() => setOpenServiceDropdown(link.href)}
												onFocus={() => setOpenServiceDropdown(link.href)}
												className="relative text-base font-bold transition-colors duration-300 hover:text-brand flex items-center gap-1"
												whileHover={{ y: -2 }}
											>
												<span>{link.label}</span>
												<ChevronDown className="w-4 h-4" />
												{isActive && (
													<motion.span
														layoutId="activeIndicator"
														className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full"
														initial={false}
														transition={{
															type: "spring",
															stiffness: 380,
															damping: 30,
														}}
													/>
												)}
											</MotionLink>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											align="start"
											className="min-w-[220px]"
											onMouseEnter={() => setOpenServiceDropdown(link.href)}
											onMouseLeave={() => setOpenServiceDropdown(null)}
										>
											{link.items.map((item) => (
												<DropdownMenuItem key={item.href} asChild>
													<Link
														href={item.href}
														className={`w-full typ-body ${
															matchesPath(item.href)
																? "text-brand font-semibold"
																: ""
														}`}
													>
														{item.label}
													</Link>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							);
						}

						return (
							<Link
								key={link.href}
								href={link.href}
								onClick={(e) => handleSmoothScroll(e, link.href)}
							>
								<motion.p
									whileHover={{ y: -2 }}
									className="relative text-base font-bold transition-colors duration-300 hover:text-brand"
								>
									{link.label}
									{isActive && (
										<motion.span
											layoutId="activeIndicator"
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full"
											initial={false}
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										/>
									)}
								</motion.p>
							</Link>
						);
					})}
				</nav>

				<div className="block md:hidden">
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
						aria-label="Toggle menu"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className={`text-brand transition-transform duration-300 ${
								mobileMenuOpen ? "rotate-90" : ""
							}`}
						>
							{mobileMenuOpen ? (
								<path d="M18 6L6 18M6 6l12 12" />
							) : (
								<>
									<line x1="4" y1="6" x2="20" y2="6"></line>
									<line x1="4" y1="12" x2="20" y2="12"></line>
									<line x1="4" y1="18" x2="20" y2="18"></line>
								</>
							)}
						</svg>
					</motion.button>
				</div>
			</header>

			{mobileMenuOpen && (
				<div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-lg border-b border-border z-40 overflow-y-auto overscroll-contain">
					<nav className="flex flex-col gap-1 p-4">
						{navLinks.map((link, index) => {
							const isActive =
								matchesPath(link.href) ||
								(isServiceLink(link) && pathname?.startsWith(link.href));

							if (isServiceLink(link)) {
								return (
									<div key={link.href} className="rounded-lg bg-accent/5">
										<Link
											href={link.href}
											onClick={() => setMobileMenuOpen(false)}
											className={`block px-4 py-3 rounded-lg transition-colors typ-body text-foreground font-bold ${
												isActive ? "text-brand" : ""
											}`}
										>
											{link.label}
										</Link>
										<div className="px-4 pb-3 flex flex-col gap-1">
											{link.items.map((item, subIndex) => (
												<div key={item.href}>
													<Link
														href={item.href}
														onClick={() => setMobileMenuOpen(false)}
														className={`block px-3 py-2 rounded-md typ-body font-medium text-foreground/80 hover:bg-accent/20 ${
															matchesPath(item.href) ? "text-brand" : ""
														}`}
													>
														{item.label}
													</Link>
												</div>
											))}
										</div>
									</div>
								);
							}

							return (
								<div key={link.href}>
									<Link
										href={link.href}
										onClick={() => setMobileMenuOpen(false)}
										className={`block px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors typ-body text-foreground font-bold ${
											isActive ? "bg-accent/10 text-brand" : ""
										}`}
									>
										{link.label}
									</Link>
								</div>
							);
						})}
					</nav>
				</div>
			)}
		</>
	);
}

export default Header;
