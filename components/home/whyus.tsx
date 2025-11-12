"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, AnimatedText } from "@/lib/animations";

function Whyus() {
	const features = [
		{
			id: 1,
			title: "Holistic Hospitality Intelligence",
			description:
				"Because we make hotels perform better. At Kraftz, we blend hospitality expertise, data insights, and technology to help hotels unlock higher revenue, better visibility, and stronger guest loyalty.",
		},
		{
			id: 2,
			title: "Revenue & Distribution Mastery",
			description:
				"We bring decades of experiences in optimizing channel strategy, OTA mix, distribution and dynamic pricing for consistent RevPAR growth leading to higher yield.",
		},
		{
			id: 3,
			title: "Tech & Data That Speaks for You",
			description:
				"From predictive forecasting to automation, we leverage tools that simplify operations and integrating with leading tech providers which empowers leadership to make fast, informed decisions.",
		},
		{
			id: 4,
			title: "Cost Effective Model",
			description:
				"Leverage expert revenue management and intelligent tools without adding in-house costs. Our solutions focus on delivering results and ROI.",
		},
		{
			id: 5,
			title: "Brand Elevation and Market Visibility",
			description:
				"We go beyond full rooms to Kraft high-reputation brand equity. By combining strategic guest sentiment analysis and an SEO-rich digital presence.",
		},
		{
			id: 6,
			title: "Trust, Transparency, & Measured Results",
			description:
				"Your voice drives our strategy. We guarantee complete transparency and unwavering commitment, focusing relentlessly on clarity, accountability, and verifiable outcomes.",
		},
	];

	return (
		<section className="relative px-8 md:px-16 lg:px-28 py-16 md:py-24 bg-background overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="relative max-w-6xl mx-auto">
				<FadeInUp triggerOnce={true}>
					<div className="mb-10 md:mb-12">
						<h2
							className="text-3xl md:text-4xl lg:text-5xl text-[#2d5a8a] leading-tight mb-4"
							style={{
								fontFamily: "var(--font-playfair), serif",
								fontWeight: 700,
							}}
						>
							Why Choose KRAFTz?
						</h2>
						<p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
							<AnimatedText
								text="Empowering the hotel and travel ecosystem to perform, grow, and lead."
								wordDelay={0.03}
								triggerOnce={true}
							/>
						</p>
					</div>
				</FadeInUp>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{features.map((feature, index) => {
						// Calculate delay: each item waits for previous item to complete (0.6s duration)
						const itemDelay = index * 0.6;
						return (
							<FadeInUp
								key={feature.id}
								delay={itemDelay}
								triggerOnce={true}
								usePositionDelay={false}
								className="h-full"
							>
								<motion.div
									whileHover={{
										y: -5,
										scale: 1.02,
										transition: { duration: 0.3 },
									}}
									className="card-3d relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-white to-accent/5 border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/40 h-full flex flex-col"
								>
									<motion.div
										className="absolute top-0 left-0 w-1.5 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full"
										whileHover={{ height: 20 }}
										transition={{ duration: 0.3 }}
									/>

									<div className="pl-5 flex flex-col flex-grow">
										<h3
											className="text-lg md:text-xl font-semibold mb-3 text-foreground"
											style={{
												fontFamily: "var(--font-playfair), serif",
												fontWeight: 600,
											}}
										>
											{feature.title}
										</h3>

										<p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base flex-grow">
											<AnimatedText
												text={feature.description}
												wordDelay={0.02}
												threshold={0.5}
												triggerOnce={true}
											/>
										</p>

										<Link href="/contacts" className="mt-auto">
											<motion.div
												className="inline-flex items-center text-primary font-medium transition-colors duration-300 hover:text-secondary cursor-pointer"
												whileHover={{ x: 5 }}
												transition={{ type: "spring", stiffness: 400 }}
											>
												Get In Touch
												<motion.svg
													className="ml-2 w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													whileHover={{ x: 3 }}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</motion.svg>
											</motion.div>
										</Link>
									</div>
								</motion.div>
							</FadeInUp>
						);
					})}
				</div>

				<FadeInUp delay={features.length * 0.6 + 0.2} triggerOnce={true}>
					<div className="mt-12 h-1.5 w-32 bg-gradient-to-r from-secondary via-secondary to-transparent opacity-60 mx-auto" />
				</FadeInUp>
			</div>
		</section>
	);
}

export default Whyus;
