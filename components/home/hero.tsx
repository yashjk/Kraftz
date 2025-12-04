"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/lib/animations";

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0 },
};

function Hero() {
	return (
		<section className="relative isolate min-h-[60vh] overflow-hidden bg-[url('/hero1.jpg')] bg-cover bg-top bg-fixed py-2 px-8 md:px-16 lg:px-24">
			<div className="absolute inset-0 bg-linear-to-b from-black/25 to-black/40" />
			<div className="relative z-10 mx-auto flex min-h-[50vh] flex-col items-center justify-between px-6 md:px-12 lg:px-20 text-center text-white py-8 md:py-12">
				<motion.h1
					variants={fadeUp}
					initial="hidden"
					animate="show"
					transition={{ duration: 0.7, delay: 0.1 }}
					className="typ-page-title"
					style={{
						fontFamily: '"Times New Roman", Times, serif',
						color: "#fffef8",
						textShadow:
							"0 15px 28px rgba(255, 255, 255, 0.7), 0 5px 10px rgba(255, 255, 255, 0.5)",
					}}
				>
					Krafting Growth Intelligently
				</motion.h1>

				<motion.p
					variants={fadeUp}
					initial="hidden"
					animate="show"
					transition={{ duration: 0.7, delay: 0.2 }}
					className="typ-body font-bold max-w-4xl"
					style={{
						color: "#fffef8",
						opacity: 0.9,
						textShadow:
							"0 1px 1px rgba(255, 255, 255, 0.848), 0 3px 3px rgba(255, 255, 255, 0.6)",
					}}
				>
					<AnimatedText
						text="At Kraftz, we provide end-to-end hospitality and travel solutions, all designed to elevate performance and accelerate growth. We Kraft precision strategies that empower property owners to maximize revenue and create exceptional experiences for travelers."
						delay={0.2}
						wordDelay={0.03}
						threshold={0}
						triggerOnce
					/>
				</motion.p>
			</div>
		</section>
	);
}

export default Hero;
