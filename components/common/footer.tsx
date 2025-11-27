"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { contactInfo } from "@/lib/data";
import Logo from "./logo";

function Footer() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const services = [
		{ href: "/services/hospitality", label: "Hospitality Solutions" },
		{ href: "/services/digital-marketing", label: "Digital Marketing" },
		{ href: "/services/travel", label: "Travel" },
	];

	return (
		<>
			<footer className="bg-background">
				<div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 py-7 text-center sm:px-6">
					<Logo />
					<p className="text-[0.78rem] text-muted-foreground max-w-md">
						Krafting growth intelligently across hospitality, digital marketing,
						and travel.
					</p>
					<div className="flex flex-wrap justify-center gap-8 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
						{services.map((service) => (
							<Link
								key={service.href}
								href={service.href}
								className="hover:text-[#0249A7] transition-colors"
							>
								{service.label}
							</Link>
						))}
					</div>
					<div className="space-y-1 text-[0.78rem] text-muted-foreground">
						<a
							href={`mailto:${contactInfo.email}`}
							className="block hover:text-[#0249A7] transition-colors"
						>
							{contactInfo.email}
						</a>
						{[
							contactInfo.phone_uae,
							contactInfo.phone_ind_2,
							contactInfo.phone_ind_1,
						].map((phone) => (
							<a
								key={phone}
								href={`tel:${phone}`}
								className="block hover:text-[#0249A7] transition-colors"
							>
								{phone}
							</a>
						))}
					</div>
				</div>

				<div className="border-t border-border px-4 py-3 text-center text-[0.72rem] text-muted-foreground sm:px-6">
					<div className="mx-auto flex max-w-5xl flex-col items-center gap-2 sm:flex-row sm:justify-between">
						<p>
							© {new Date().getFullYear()} KRAFTz Hospitality and Travel
							Solutions F.Z.C . All rights reserved.
						</p>
						<div className="flex items-center gap-4">
							<Link href="#" className="hover:text-[#0249A7] transition-colors">
								Privacy Policy
							</Link>
							<Link href="#" className="hover:text-[#0249A7] transition-colors">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>

			<AnimatePresence>
				{showScrollTop && (
					<motion.button
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={scrollToTop}
						className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#0249A7]/20 bg-[#0249A7] text-white shadow-lg"
						aria-label="Scroll to top"
					>
						<motion.svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							animate={{ y: [0, -3, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						>
							<path d="M18 15l-6-6-6 6" />
						</motion.svg>
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
}

export default Footer;
