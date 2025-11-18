"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface HighlightItem {
	label: string;
	href?: string;
	id?: string;
}

type Highlight = string | HighlightItem;

interface ServicesHeroProps {
	title?: string;
	description: string;
	highlights?: Highlight[];
	category?: string;
	children?: ReactNode;
	imageSrc?: string;
}

// Helper function to convert text to kebab-case ID
function textToId(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

// Helper function to handle smooth scroll to section
function scrollToSection(hrefOrId: string) {
	const targetId = hrefOrId.startsWith("#") ? hrefOrId.slice(1) : hrefOrId;
	const element = document.getElementById(targetId);
	if (element) {
		const offset = 96; // Account for header height
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
}

function ServicesHero({
	title,
	description,
	highlights = [],
	category,
	children,
	imageSrc = "/hero1.jpg",
}: ServicesHeroProps) {
	return (
		<section
			className="relative bg-cover bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: `url('${imageSrc}')`,
				backgroundColor: "#0a0a0a",
				backgroundPosition: "right top",
				backgroundAttachment: "fixed",
			}}
		>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-[#2a1f1a]/60 z-0" />

			{/* Background decorations - matching main hero style */}
			<div className="absolute inset-0 overflow-hidden z-[1]">
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
			<div className="relative px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20 z-10">
				<div className="max-w-5xl mx-auto">
					<div className="items-center">
						{/* Text Content */}
						<div className="text-center lg:text-left space-y-6">
							{/* Category Badge */}

							{/* Title */}
							{title && (
								<FadeInUp delay={0.2} triggerOnce={true}>
									<h1
										className={cn(
											"font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-center",
											"flex items-center justify-center gap-2 px-2"
										)}
										style={{
											textShadow:
												"2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)",
										}}
									>
										<img
											src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
											alt=""
											className="h-6 md:h-8 lg:h-10 w-auto object-contain"
											aria-hidden="true"
										/>
										<span>{title}</span>
										<img
											src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
											alt=""
											className="h-6 md:h-8 lg:h-10 w-auto object-contain"
											aria-hidden="true"
										/>
									</h1>
								</FadeInUp>
							)}

							{/* Description with AnimatedText */}
							<FadeInUp delay={0.3} triggerOnce={true}>
								<p
									className="text-[18px] md:text-lg leading-relaxed text-white"
									style={{
										textShadow:
											"1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)",
									}}
								>
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
									<div className="relative z-10 flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
										{highlights.map((highlight, index) => {
											const label =
												typeof highlight === "string"
													? highlight
													: highlight.label;
											const hrefOrId =
												typeof highlight === "string"
													? textToId(highlight)
													: highlight.href ||
													  highlight.id ||
													  textToId(highlight.label);

											return (
												<motion.button
													key={index}
													type="button"
													onClick={(e) => {
														e.preventDefault();
														scrollToSection(hrefOrId);
													}}
													initial={{ opacity: 0, scale: 0.8, y: 10 }}
													animate={{ opacity: 1, scale: 1, y: 0 }}
													transition={{
														delay: 0.5 + index * 0.1,
														duration: 0.4,
														ease: [0.4, 0, 0.2, 1] as [
															number,
															number,
															number,
															number
														],
													}}
													className="relative z-10 px-4 py-2 text-[16px] md:text-[18px] font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer"
													whileHover={{ scale: 1.05, y: -2 }}
													whileTap={{ scale: 0.95 }}
													style={{ pointerEvents: "auto" }}
												>
													{label}
												</motion.button>
											);
										})}
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
