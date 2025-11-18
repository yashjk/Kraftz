"use client";

import { motion } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";
import ConnectCTA from "@/components/common/connect-cta";
import Image from "next/image";

function Whyus() {
	const features = [
		{
			id: 1,
			image: "/why-choose-1.jpg",
			title: "Holistic Hospitality Intelligence",
			description:
				"Because we make hotels perform better. At Kraftz, we blend hospitality expertise, data insights, and technology to help hotels unlock higher revenue, better visibility, and stronger guest loyalty.",
		},
		{
			id: 2,
			image: "/why-choose-2.jpg",
			title: "Revenue & Distribution Mastery",
			description:
				"We bring decades of experiences in optimizing channel strategy, OTA mix, distribution and dynamic pricing for consistent RevPAR growth leading to higher yield.",
		},
		{
			id: 3,
			image: "/why-choose-3.jpg",
			title: "Tech & Data That Speaks for You",
			description:
				"From predictive forecasting to automation, we leverage tools that simplify operations and integrating with leading tech providers which empowers leadership to make fast, informed decisions.",
		},
		{
			id: 4,
			image: "/why-choose-4.jpg",
			title: "Cost Effective Model",
			description:
				"Leverage expert revenue management and intelligent tools without adding in-house costs. Our solutions focus on delivering results and ROI.",
		},
		{
			id: 5,
			image: "/why-choose-5.jpg",
			title: "Brand Elevation and Market Visibility",
			description:
				"We go beyond full rooms to Kraft high-reputation brand equity. By combining strategic guest sentiment analysis and an SEO-rich digital presence.",
		},
		{
			id: 6,
			image: "/why-choose-6.jpeg",
			title: "Trust, Transparency, & Measured Results",
			description:
				"Your voice drives our strategy. We guarantee complete transparency and unwavering commitment, focusing relentlessly on clarity, accountability, and verifiable outcomes.",
		},
	];

	return (
		<>
			<div className="relative">
				{/* Hero Section */}
				<section className="relative px-8 md:px-16 lg:px-28 pt-12 md:pt-16 lg:pt-20 pb-6 bg-gradient-to-b from-background via-background to-accent/5 overflow-hidden">
					{/* Animated background elements */}
					<motion.div
						className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
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
						className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl"
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

					<div className="relative text-center px-8 md:px-28">
						<FadeInUp delay={0.2} triggerOnce={true}>
							<h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-[#0249A7]">
								Why Choose Kraftz?
							</h2>
						</FadeInUp>
						<FadeInUp delay={0.3} triggerOnce={true}>
							<p className="text-[18px] md:text-lg leading-relaxed text-foreground">
								<AnimatedText
									text="We combine expertise, innovation, and proven results to transform your hospitality business. Our holistic approach integrates revenue management, distribution strategy, and brand elevation to deliver measurable growth and exceptional guest experiences."
									delay={0.4}
									wordDelay={0.02}
									triggerOnce={true}
								/>
							</p>
						</FadeInUp>
					</div>
				</section>

				{/* Features Grid */}
				<div className="px-8 md:px-16 lg:px-28 pt-6 pb-12 md:pb-20 bg-background">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
						{features.map((feature, index) => {
							const itemDelay = index * 0.1;

							return (
								<FadeInUp
									key={feature.id}
									delay={itemDelay}
									triggerOnce={true}
									usePositionDelay={false}
									className="h-full"
								>
									<motion.div
										className="group relative h-full flex flex-col rounded-lg bg-white border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
										whileHover={{ y: -4 }}
									>
										{/* Top accent bar */}
										<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

										{/* Image */}
										<motion.div
											whileHover={{ scale: 1.05 }}
											transition={{ type: "spring", stiffness: 300 }}
											className="relative w-full h-48 overflow-hidden"
										>
											<Image
												src={feature.image}
												alt={feature.title}
												fill
												className="object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										</motion.div>

										{/* Text Content with Padding */}
										<div className="p-4 md:p-6 flex flex-col flex-grow">
											{/* Title */}
											<h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-[#0249A7] group-hover:text-primary transition-colors duration-300">
												{feature.title}
											</h3>

											{/* Description */}
											<p className="text-[18px] md:text-lg leading-relaxed text-muted-foreground flex-grow">
												<AnimatedText
													text={feature.description}
													wordDelay={0.02}
													threshold={0.3}
													triggerOnce={true}
												/>
											</p>
										</div>
									</motion.div>
								</FadeInUp>
							);
						})}
					</div>
				</div>
			</div>
			<ConnectCTA />
			<FadeInUp delay={features.length * 0.6 + 0.2} triggerOnce={true}>
				<div className="my-4 h-1.5 w-32 bg-gradient-to-r from-secondary via-secondary to-transparent opacity-60 mx-auto" />
			</FadeInUp>
		</>
	);
}

export default Whyus;
