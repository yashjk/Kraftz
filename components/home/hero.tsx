"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, FadeIn, AnimatedText } from "@/lib/animations";

function Hero() {
	return (
		<section className="relative bg-background overflow-hidden">
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
					animate={{
						x: [0, 30, 0],
						y: [0, -30, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-brand/15 to-transparent rounded-full blur-3xl"
					animate={{
						x: [0, -20, 0],
						y: [0, 20, 0],
						scale: [1, 1.15, 1],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="relative px-8 md:px-16 lg:px-28 py-12 md:py-20 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
							className="flex flex-col gap-6"
						>
							<div className="space-y-3">
								<motion.h1
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.8 }}
									className="text-5xl md:text-4xl lg:text-5xl leading-tight text-[#2d5a8a]"
									style={{
										fontFamily: "var(--font-playfair), serif",
										fontWeight: 700,
									}}
								>
									Krafting Growth Intelligently
								</motion.h1>
							</div>

							<p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
								<AnimatedText
									text="At Kraftz, we provide end-to-end hospitality and travel solutions, all designed to elevate performance and accelerate growth. We Kraft precision strategies that empower property owners to maximize revenue and create exceptional experiences for travelers."
									delay={0.5}
									wordDelay={0.03}
									threshold={0}
									triggerOnce={true}
								/>
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50, scale: 0.8 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
							className="hidden lg:flex items-center justify-center"
						>
							<div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
								{/* Rotating square container with logo gradient */}
								<motion.div
									className="relative w-64 h-64 md:w-80 md:h-80"
									animate={{
										rotate: [0, 360],
									}}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									{/* Gradient background matching logo */}
									<div
										className="absolute inset-0 rounded-3xl animate-gradient"
										style={{
											background:
												"linear-gradient(to right, #1e3a5f 0%, #2d5a8a 50%, #4a90c2 100%)",
											backgroundSize: "150% 150%",
											borderRadius: "36px",
										}}
									/>

									{/* Stationary π symbol - counter-rotated to stay fixed */}
									<motion.div
										className="absolute inset-0 flex items-center justify-center"
										style={{
											transform: "rotate(0deg)",
										}}
										animate={{
											rotate: [360, 0],
										}}
										transition={{
											duration: 20,
											repeat: Infinity,
											ease: "linear",
										}}
									>
										<span
											className="text-7xl md:text-[250px] font-extrabold text-white leading-none select-none"
											style={{
												fontFamily: "serif",
												fontWeight: "bold",
											}}
										>
											π
										</span>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.8 }}
				className="absolute bottom-2.5 md:bottom-8 left-1/2 transform -translate-x-1/2 mt-2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className="flex flex-col items-center gap-2 cursor-pointer"
				>
					<span className="text-xs text-muted-foreground uppercase tracking-wider">
						Scroll
					</span>
					<motion.svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="text-muted-foreground"
					>
						<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
					</motion.svg>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default Hero;
