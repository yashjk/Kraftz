"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/lib/animations";

function Team() {
	return (
		<section className="relative px-8 md:px-16 lg:px-28 py-16 md:py-24 bg-background overflow-hidden">
			{/* Background decoration */}
			<motion.div
				className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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

			<div className="relative max-w-5xl mx-auto text-center">
				<FadeInUp triggerOnce={true}>
					<span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4 block">
						Who We Are?
					</span>
					<h2
						className="text-3xl md:text-4xl lg:text-5xl mb-8"
						style={{
							fontFamily: "var(--font-playfair), serif",
							fontWeight: 700,
						}}
					>
						Our Team
					</h2>
				</FadeInUp>

				<FadeInUp delay={0.2} triggerOnce={true}>
					<p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-12 max-w-3xl mx-auto">
						The Kraftz Hospitality leadership and team brings together decades of
						experience across the hospitality and travel industry, each bringing a
						wealth of hands-on experience in revenue growth, OTA partnerships,
						distribution, digital marketing, business intelligence and commercial
						strategy.
					</p>
				</FadeInUp>

				{/* Team Image Grid Placeholder */}
				<FadeInUp delay={0.4} triggerOnce={true}>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						{[1, 2, 3].map((item) => {
							const itemDelay = (item - 1) * 0.6;
							return (
								<FadeInUp key={item} delay={itemDelay} triggerOnce={true} usePositionDelay={false}>
									<motion.div
										whileHover={{ y: -5, scale: 1.02 }}
										className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center"
									>
										<div className="text-center p-4">
											<svg
												className="w-12 h-12 mx-auto mb-2 text-primary/50"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
											<p className="text-xs text-muted-foreground/70">
												Team member {item}
											</p>
										</div>
									</motion.div>
								</FadeInUp>
							);
						})}
					</div>
				</FadeInUp>

				<FadeInUp delay={0.6} triggerOnce={true}>
					<div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
						<p>
							We&apos;ve successfully led initiatives that built large hotel portfolios,
							improved market share, and transformed revenue performance across
							multiple geographies.
						</p>
						<p>
							What unites us is a shared philosophy that true success comes from a
							balance of strategic thinking, operational excellence, and human
							connection.
						</p>
					</div>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Team;
