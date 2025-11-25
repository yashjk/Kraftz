"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink =
	| {
			href: string;
			label: string;
	  }
	| {
			href: string;
			label: string;
			items: Array<{ href: string; label: string }>;
	  };

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const serviceNavs = [
		{
			href: "/services/hospitality",
			label: "Hospitality Solutions",
			items: [
				{
					href: "/services/hospitality#revenue-management",
					label: "Revenue Management",
				},
				{
					href: "/services/hospitality#distribution-channel-management",
					label: "Distribution Channel Management",
				},
				{
					href: "/services/hospitality#revenue-management-system-rms",
					label: "Revenue Management System (RMS)",
				},
				{
					href: "/services/hospitality#business-intelligence",
					label: "Business Intelligence",
				},
				{
					href: "/services/hospitality#reputation-management-orm",
					label: "Reputation Management / ORM",
				},
				{
					href: "/services/hospitality#content-management",
					label: "Content Management",
				},
			],
		},
		{
			href: "/services/digital-marketing",
			label: "Digital Marketing",
			items: [
				{
					href: "/services/digital-marketing#digital-strategy-consulting",
					label: "Digital Strategy & Consulting",
				},
				{ href: "/services/digital-marketing#seo-search", label: "SEO" },
				{
					href: "/services/digital-marketing#performance-marketing",
					label: "Performance Marketing",
				},
				{
					href: "/services/digital-marketing#social-media",
					label: "Social Media",
				},
				{
					href: "/services/digital-marketing#content-strategy",
					label: "Content Strategy",
				},
				{
					href: "/services/digital-marketing#ai-marketing",
					label: "AI Marketing & Automation",
				},
				{
					href: "/services/digital-marketing#analytics-insights",
					label: "Analytics & Insights",
				},
			],
		},
		{
			href: "/services/travel",
			label: "Travel",
			items: [
				{
					href: "/services/travel#personal-family-travel",
					label: "Personal & Family Travel",
				},
				{
					href: "/services/travel#corporate-business-travel",
					label: "Corporate & Business Travel",
				},
				{
					href: "/services/travel#ultra-luxury-lifestyle",
					label: "Ultra-Luxury & Lifestyle",
				},
				{
					href: "/services/travel#cultural-experiential-journeys",
					label: "Cultural & Experiential Journeys",
				},
				{ href: "/services/travel#travel-experiences", label: "Philosophy" },
			],
		},
	];

	const navLinks: NavLink[] = [
		{ href: "/", label: "Home" },
		...serviceNavs,
		{ href: "/about", label: "About" },
		{ href: "/contacts", label: "Contact" },
	];

	const isServiceLink = (link: NavLink): link is (typeof serviceNavs)[number] =>
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
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`px-8 md:px-16 lg:px-28 flex justify-between items-center border-b border-border sticky top-0 z-50 transition-all duration-300 ${
					scrolled
						? "bg-white backdrop-blur-lg shadow-sm"
						: "bg-white backdrop-blur-md"
				}`}
			>
				<Logo className="cursor-pointer" />

				<nav className="hidden md:flex gap-10 text-foreground items-center">
					{navLinks.map((link) => {
						const isActive =
							matchesPath(link.href) ||
							(isServiceLink(link) && pathname?.startsWith(link.href));

						if (isServiceLink(link)) {
							return (
								<DropdownMenu key={link.href}>
									<DropdownMenuTrigger asChild>
										<motion.button
											whileHover={{ y: -2 }}
											className="relative font-medium transition-colors duration-300 hover:text-brand flex items-center gap-1"
										>
											{link.label}
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
										</motion.button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start" className="min-w-[220px]">
										<DropdownMenuItem asChild>
											<Link
												href={link.href}
												className={`w-full ${
													matchesPath(link.href)
														? "text-brand font-semibold"
														: ""
												}`}
											>
												View All
											</Link>
										</DropdownMenuItem>
										{link.items.map((item) => (
											<DropdownMenuItem key={item.href} asChild>
												<Link
													href={item.href}
													className={`w-full ${
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
									className="relative font-medium transition-colors duration-300 hover:text-brand"
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
						<motion.svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="text-brand"
							animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
							transition={{ duration: 0.3 }}
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
						</motion.svg>
					</motion.button>
				</div>
			</motion.header>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-lg border-b border-border z-40"
					>
						<nav className="flex flex-col gap-1 p-4">
							{navLinks.map((link, index) => {
								const isActive =
									matchesPath(link.href) ||
									(isServiceLink(link) && pathname?.startsWith(link.href));

								if (isServiceLink(link)) {
									return (
										<motion.div
											key={link.href}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											className="rounded-lg bg-accent/5"
										>
											<Link
												href={link.href}
												onClick={() => setMobileMenuOpen(false)}
												className={`block px-4 py-3 rounded-lg transition-colors text-foreground font-semibold ${
													isActive ? "text-brand" : ""
												}`}
											>
												{link.label}
											</Link>
											<div className="px-4 pb-3 flex flex-col gap-1">
												{link.items.map((item, subIndex) => (
													<motion.div
														key={item.href}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{
															delay: index * 0.1 + (subIndex + 1) * 0.05,
														}}
													>
														<Link
															href={item.href}
															onClick={() => setMobileMenuOpen(false)}
															className={`block px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent/20 ${
																matchesPath(item.href) ? "text-brand" : ""
															}`}
														>
															{item.label}
														</Link>
													</motion.div>
												))}
											</div>
										</motion.div>
									);
								}

								return (
									<motion.div
										key={link.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={link.href}
											onClick={() => setMobileMenuOpen(false)}
											className={`block px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors text-foreground font-medium ${
												isActive ? "bg-accent/10 text-brand" : ""
											}`}
										>
											{link.label}
										</Link>
									</motion.div>
								);
							})}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Header;
