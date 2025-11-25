"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";

interface ConnectCTAProps {
	message?: string;
}

function ConnectCTA({
	message = "Every hotel has untapped potential. Let's unlock yours - with strategy, precision, and imagination.",
}: ConnectCTAProps) {
	return (
		<section className="relative px-8 md:px-16 lg:px-28 py-6 md:py-8 bg-gradient-to-b from-background via-accent/5 to-background text-center overflow-hidden">
			{/* Background animation */}
			<FadeInUp triggerOnce={true}>
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
			</FadeInUp>

			<FadeInUp delay={0.2} className="relative z-10" triggerOnce={true}>
				<div className="max-w-3xl mx-auto mb-4">
					{/* Decorative quotation marks */}
					<div className="flex items-start justify-center mb-2">
						<motion.svg
							className="w-2 h-2 md:w-4 md:h-4 text-primary/20"
							fill="currentColor"
							viewBox="0 0 24 24"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
						</motion.svg>
					</div>

					<p className="text-[18px] md:text-xl leading-relaxed text-foreground/80 font-light italic max-w-2xl mx-auto relative">
						<AnimatedText
							text={message}
							delay={0.3}
							wordDelay={0.03}
							triggerOnce={true}
						/>
					</p>

					{/* Decorative line */}
					<motion.div
						className="mt-3 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
					/>
				</div>
			</FadeInUp>
			<FadeInUp delay={0.4} className="relative z-10" triggerOnce={true}>
				<Link href="/contacts">
					<motion.button
						whileHover={{
							scale: 1.02,
							boxShadow:
								"0 8px 25px rgba(2, 73, 167, 0.25), 0 4px 10px rgba(2, 73, 167, 0.15)",
						}}
						whileTap={{ scale: 0.98 }}
						className="group relative inline-flex items-center justify-center px-8 py-2.5 border border-[#0249A7] bg-[#0249A7] text-white font-semibold text-base tracking-wide rounded-lg transition-all duration-300 hover:bg-[#022ba7] hover:text-white shadow-[0_4px_12px_rgba(2,73,167,0.15),0_2px_4px_rgba(2,73,167,0.1)] hover:shadow-[0_8px_25px_rgba(2,73,167,0.25),0_4px_10px_rgba(2,73,167,0.15)]"
					>
						{/* Elegant underline effect */}
						<motion.div
							className="absolute bottom-0 left-0 h-[1px] bg-[#0249A7]"
							initial={{ width: "0%" }}
							whileHover={{ width: "100%" }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						/>

						{/* Button content */}
						<span className="relative z-10 flex items-center gap-2.5">
							Connect With Kraftz
							<motion.svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								initial={{ x: 0 }}
								whileHover={{ x: 4 }}
								transition={{ type: "spring", stiffness: 500, damping: 25 }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</motion.svg>
						</span>
					</motion.button>
				</Link>
			</FadeInUp>
		</section>
	);
}

export default ConnectCTA;
