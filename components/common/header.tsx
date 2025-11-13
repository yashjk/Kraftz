"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/services/hospitality", label: "Hospitality" },
		{ href: "/services/digital-marketing", label: "Digital Marketing" },
		{ href: "/services/travel", label: "Travel" },
		{ href: "/about", label: "About" },
		{ href: "/contacts", label: "Contact" },
	];

	// Filter out Home link when on home page
	const filteredNavLinks = navLinks.filter((link) => {
		if (pathname === "/" && link.href === "/") {
			return false;
		}
		return true;
	});

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
				className={`px-8 md:px-16 lg:px-28 py-5 flex justify-between items-center border-b border-border sticky top-0 z-50 transition-all duration-300 ${
					scrolled
						? "bg-white backdrop-blur-lg shadow-sm"
						: "bg-white backdrop-blur-md"
				}`}
			>
				<Logo className="cursor-pointer" />

				<nav className="hidden md:flex gap-10 text-foreground">
					{filteredNavLinks.map((link) => {
						const isActive = pathname === link.href;
						return (
							<Link
								key={link.href}
								href={link.href}
								onClick={(e) => handleSmoothScroll(e, link.href)}
							>
								<motion.p
									whileHover={{ y: -2 }}
									className="relative font-medium transition-colors duration-300 hover:text-brand py-2"
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
							{filteredNavLinks.map((link, index) => {
								const isActive = pathname === link.href;
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
