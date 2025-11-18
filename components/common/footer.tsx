"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { contactInfo } from "@/lib/data";
import Logo from "./logo";
import { Mail, Phone, ArrowRight } from "lucide-react";

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
		{ href: "/services/hospitality", label: "Hospitality" },
		{ href: "/services/digital-marketing", label: "Digital Marketing" },
		{ href: "/services/travel", label: "Travel" },
	];

	return (
		<>
			<footer className="relative bg-gradient-to-b from-background via-accent/5 to-background border-t border-border overflow-hidden">
				{/* Background animation */}
				<div className="absolute inset-0 pointer-events-none">
					<motion.div
						className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
						animate={{
							x: [0, 50, 0],
							y: [0, -50, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 15,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
						animate={{
							x: [0, -50, 0],
							y: [0, 50, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 18,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.15, 1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 12,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</div>
				<div className="relative px-6 md:px-10 lg:px-16 py-6 md:py-8 z-10">
					<div className="max-w-7xl mx-auto">
						{/* Main Footer Content */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
							{/* Logo */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="flex justify-center md:justify-start"
							>
								<Logo />
							</motion.div>

							{/* Services */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="flex flex-col items-center text-center justify-center"
							>
								<h4 className="font-heading text-lg font-semibold text-[#0249A7] mb-4">
									Services
								</h4>
								<ul className="space-y-2.5 flex flex-col items-center">
									{services.map((service, index) => (
										<li key={index}>
											<Link
												href={service.href}
												className="group inline-flex items-center text-[18px] md:text-lg text-muted-foreground hover:text-[#0249A7] transition-colors duration-300"
											>
												<span className="group-hover:translate-x-1 transition-transform duration-300">
													{service.label}
												</span>
												<ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
											</Link>
										</li>
									))}
								</ul>
							</motion.div>

							{/* Contact */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-right"
							>
								<h4 className="font-heading text-lg font-semibold text-[#0249A7] mb-4">
									Get In Touch
								</h4>
								<div className="space-y-3">
									<motion.a
										href={`mailto:${contactInfo.email}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-end gap-3 group"
									>
										<Mail className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="text-[18px] md:text-lg text-muted-foreground group-hover:text-[#0249A7] transition-colors break-all">
											{contactInfo.email}
										</span>
									</motion.a>
									<motion.a
										href={`tel:${contactInfo.phone_uae}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-end gap-3 group"
									>
										<Phone className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="text-[18px] md:text-lg text-muted-foreground group-hover:text-[#0249A7] transition-colors">
											{contactInfo.phone_uae}
										</span>
									</motion.a>
									<motion.a
										href={`tel:${contactInfo.phone_ind_1}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-end gap-3 group"
									>
										<Phone className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="text-[18px] md:text-lg text-muted-foreground group-hover:text-[#0249A7] transition-colors">
											{contactInfo.phone_ind_1}
										</span>
									</motion.a>
									<motion.a
										href={`tel:${contactInfo.phone_ind_2}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-end gap-3 group"
									>
										<Phone className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="text-[18px] md:text-lg text-muted-foreground group-hover:text-[#0249A7] transition-colors">
											{contactInfo.phone_ind_2}
										</span>
									</motion.a>
								</div>
							</motion.div>
						</div>

						{/* Bottom Bar */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 mt-4 border-t border-border"
						>
							<p className="text-[18px] md:text-lg text-muted-foreground">
								© {new Date().getFullYear()} KRAFTz. All rights reserved.
							</p>
							<div className="flex flex-wrap justify-center gap-6 text-[18px] md:text-lg">
								<Link
									href="#"
									className="text-muted-foreground hover:text-[#0249A7] transition-colors"
								>
									Privacy Policy
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-[#0249A7] transition-colors"
								>
									Terms of Service
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</footer>

			{/* Scroll to Top Button */}
			<AnimatePresence>
				{showScrollTop && (
					<motion.button
						initial={{ opacity: 0, scale: 0, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0, y: 20 }}
						whileHover={{ scale: 1.1, y: -5 }}
						whileTap={{ scale: 0.9 }}
						onClick={scrollToTop}
						className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#0249A7] text-white rounded-lg shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-[#0249A7]/90 transition-colors border border-primary/20"
						aria-label="Scroll to top"
					>
						<motion.svg
							width="20"
							height="20"
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
