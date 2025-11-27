"use client";

import { motion } from "framer-motion";

function Hero() {
	return (
		<section className="relative min-h-screen bg-linear-to-b from-brand to-brand/90 overflow-hidden w-full px-6 md:px-0">
			<div className="absolute inset-0 opacity-30 pointer-events-none">
				<motion.div
					className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"
					animate={{
						x: [0, 40, 0],
						y: [0, -40, 0],
						scale: [1, 1.15, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"
					animate={{
						x: [0, -40, 0],
						y: [0, 40, 0],
						scale: [1, 1.15, 1],
					}}
					transition={{
						duration: 22,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center text-center text-background">
				<motion.h2
					initial={{ opacity: 0, y: 50, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
					className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
				>
					About Us
				</motion.h2>
			</div>
		</section>
	);
}

export default Hero;
