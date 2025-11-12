"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";

interface ServicesHeroProps {
	title?: string;
	description: string;
	highlights?: string[];
	category?: string;
	children?: ReactNode;
}

function ServicesHero({
	title,
	description,
	highlights = [],
	category,
	children,
}: ServicesHeroProps) {
	return (
		<section className="relative bg-background overflow-hidden">
			{/* Background decorations - matching main hero style */}
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
					className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl"
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
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 18,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative px-8 md:px-16 lg:px-28 py-12 md:py-16 lg:py-20">
				<div className="max-w-5xl mx-auto">
					<div className="items-center">
						{/* Text Content */}
						<div className="text-center lg:text-left space-y-6">
							{/* Category Badge */}
							{category && (
								<FadeInUp delay={0.1} triggerOnce={true}>
									<span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
										{category}
									</span>
								</FadeInUp>
							)}

							{/* Title */}
							{title && (
								<FadeInUp delay={0.2} triggerOnce={true}>
									<h1
										className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2d5a8a] text-center"
										style={{
											fontFamily: "var(--font-playfair), serif",
											fontWeight: 700,
										}}
									>
										{title}
									</h1>
								</FadeInUp>
							)}

							{/* Description with AnimatedText */}
							<FadeInUp delay={0.3} triggerOnce={true}>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									<AnimatedText
										text={description}
										wordDelay={0.03}
										triggerOnce={true}
									/>
								</p>
							</FadeInUp>

							{/* Highlights as Tags */}
							{highlights.length > 0 && (
								<FadeInUp delay={0.4} triggerOnce={true}>
									<div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
										{highlights.map((highlight, index) => (
											<motion.span
												key={index}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
												className="px-3 py-1.5 text-sm font-medium text-primary bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
											>
												{highlight}
											</motion.span>
										))}
									</div>
								</FadeInUp>
							)}

							{/* Custom Children Content */}
							{children && (
								<FadeInUp delay={0.5} triggerOnce={true}>
									{children}
								</FadeInUp>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesHero;
