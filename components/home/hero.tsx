"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/lib/animations";

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0 },
};

function Hero() {
	return (
		<section className="relative isolate min-h-[60vh] overflow-hidden bg-[url('/hero1.jpeg')] bg-cover bg-center bg-fixed py-2">
			<div className="absolute inset-0 bg-linear-to-b from-black/35 to-black/55" />
			<div className="relative z-10 mx-auto flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4 text-center text-white">
				<motion.h1
					variants={fadeUp}
					initial="hidden"
					animate="show"
					transition={{ duration: 0.7, delay: 0.1 }}
					className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_15px_28px_rgba(255,176,107,0.7)]"
				>
					Krafting Growth Intelligently
				</motion.h1>

				<motion.p
					variants={fadeUp}
					initial="hidden"
					animate="show"
					transition={{ duration: 0.7, delay: 0.2 }}
					className="text-base md:text-lg lg:text-xl text-white/90 font-bold drop-shadow-[0_10px_20px_rgba(255,176,107,0.55)]"
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
