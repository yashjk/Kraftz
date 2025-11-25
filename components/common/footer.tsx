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
						className="absolute top-0 left-0 w-96 h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] bg-primary/10 rounded-full blur-3xl"
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
						className="absolute bottom-0 right-0 w-96 h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] bg-secondary/10 rounded-full blur-3xl"
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
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] bg-accent/10 rounded-full blur-3xl"
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
				<div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-5 z-10">
					<div className="max-w-7xl mx-auto">
						{/* Main Footer Content */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-2">
							{/* Logo */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="flex items-center justify-center"
							>
								<div className="scale-100 transition-transform">
									<Logo />
								</div>
							</motion.div>

							{/* Services */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="flex flex-col items-center justify-center text-center"
							>
								<h4 className="font-heading text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#0249A7] mb-4 sm:mb-3 md:mb-4">
									Services
								</h4>
								<ul className="space-y-2 sm:space-y-1.5 md:space-y-2 flex flex-col items-center w-full">
									{services.map((service, index) => (
										<li key={index} className="w-full flex justify-center">
											<Link
												href={service.href}
												className="group inline-flex items-center text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground hover:text-[#0249A7] transition-colors duration-300"
											>
												<span className="group-hover:translate-x-1 transition-transform duration-300">
													{service.label}
												</span>
												<ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
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
								className="flex flex-col items-center justify-center text-center"
							>
								<h4 className="font-heading text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#0249A7] mb-4 sm:mb-3 md:mb-4">
									Get In Touch
								</h4>
								<div className="space-y-2 sm:space-y-1.5 md:space-y-2 flex flex-col items-center w-full">
									<motion.a
										href={`mailto:${contactInfo.email}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 group"
									>
										<Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary flex-shrink-0" />
										<span className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-[#0249A7] transition-colors break-all">
											{contactInfo.email}
										</span>
									</motion.a>
									<motion.a
										href={`tel:${contactInfo.phone_uae}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 group"
									>
										<Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary flex-shrink-0" />
										<span className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-[#0249A7] transition-colors">
											{contactInfo.phone_uae}
										</span>
									</motion.a>
									<motion.a
										href={`tel:${contactInfo.phone_ind_1}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 group"
									>
										<Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary flex-shrink-0" />
										<span className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-[#0249A7] transition-colors">
											{contactInfo.phone_ind_1}
										</span>
									</motion.a>
									<motion.a
										href={`tel:${contactInfo.phone_ind_2}`}
										whileHover={{ x: -4 }}
										className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 group"
									>
										<Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary flex-shrink-0" />
										<span className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-[#0249A7] transition-colors">
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
							className="flex flex-col items-center justify-center md:items-stretch gap-3 sm:gap-2 md:gap-4 pt-2 mt-4 sm:mt-4 border-t border-border"
						>
							<p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center">
								© {new Date().getFullYear()} Kraftz. All rights reserved.
							</p>
							<div className="flex flex-wrap justify-center gap-4 sm:gap-3 md:gap-5 text-sm sm:text-base md:text-lg lg:text-xl">
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
						className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-[#0249A7] text-white rounded-lg shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-[#0249A7]/90 transition-colors border border-primary/20"
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
							className="sm:w-5 sm:h-5"
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
