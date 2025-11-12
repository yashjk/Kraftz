"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	AirplayIcon,
	BrainCircuitIcon,
	CircleDollarSignIcon,
	ForkliftIcon,
	PlaneTakeoffIcon,
	SquareUserIcon,
} from "lucide-react";
import { FadeInUp, StaggerContainer, AnimatedText } from "@/lib/animations";

function WhatWeDo() {
	const services = [
		{
			id: 1,
			icon: CircleDollarSignIcon,
			title: "Revenue Management",
			description:
				"We create rate architecture, demand modeling, channel mix optimization that results stronger RevPAR, higher ADR, and sustainable profitability.",
			href: "/services/hospitality#revenue-management",
		},
		{
			id: 2,
			icon: ForkliftIcon,
			title: "Distribution Management",
			description:
				"Maximize your hotels reach with seamless multi-platform distribution. KRAFTz connects your inventory across leading channels, ensuring real-time updates across all platforms.",
			href: "/services/hospitality#distribution-channel-management",
		},
		{
			id: 3,
			icon: BrainCircuitIcon,
			title: "Business Intelligence & Data Solutions",
			description:
				"We turn hotel data into a competitive advantage with power of data to uncover revenue opportunities, leverage right tech ecosystem - RMS, PMS, AI, automation, and analytics to enhance efficiency.",
			href: "/services/hospitality#business-intelligence",
		},
		{
			id: 4,
			icon: AirplayIcon,
			title: "Digital Marketing & Brand Experience",
			description:
				"Your digital presence should work as hard as your front line. We blend storytelling, design, and analytics to make your brand visible, desirable, and discoverable across search, social, and web.",
			href: "/services/digital-marketing#digital-strategy-consulting",
		},
		{
			id: 5,
			icon: SquareUserIcon,
			title: "Online Reputation & Guest Insights",
			description:
				"We help you manage guest sentiments and elevate your online credibility with precision turning feedback into loyalty and performance. Every review shapes your revenue.",
			href: "/services/hospitality#reputation-management-orm",
		},
		{
			id: 6,
			icon: PlaneTakeoffIcon,
			title: "Travel Experiences",
			description:
				"Travel, tailored to excellence. For all age travellers personal or business, we curate global stays, journeys, and partnerships that define modern luxury.",
			href: "/services/travel#travel-experiences",
		},
	];

	return (
		<div className="relative">
			{/* Hero Section */}
			<section className="relative px-8 md:px-16 lg:px-28 py-12 md:py-16 pb-12 bg-gradient-to-b from-background via-background to-accent/5 overflow-hidden">
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

				<div className="relative max-w-4xl mx-auto text-center">
					<FadeInUp delay={0.2} triggerOnce={true}>
						<h2
							className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#2d5a8a]"
							style={{
								fontFamily: "var(--font-playfair), serif",
								fontWeight: 700,
							}}
						>
							What We Do
						</h2>
					</FadeInUp>
					<FadeInUp delay={0.3} triggerOnce={true}>
						<p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
							<AnimatedText
								text="At Kraftz, we provide end-to-end hospitality and travel solutions, all designed to elevate performance and accelerate growth. We Kraft precision strategies that empower property owners to maximize revenue and create exceptional experiences for travelers."
								delay={0.4}
								wordDelay={0.02}
								triggerOnce={true}
							/>
						</p>
					</FadeInUp>
				</div>

				<FadeInUp delay={0.5} triggerOnce={true}>
					<motion.div
						className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1 }}
					/>
				</FadeInUp>
			</section>

			{/* Services Grid */}
			<div className="px-8 md:px-16 lg:px-28 py-12 md:py-20 bg-background">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{services.map((service, index) => {
						const IconComponent = service.icon;
						// Calculate delay: each item waits for previous item to complete
						// Item duration is 0.6s, so delay = index * 0.6
						const itemDelay = index * 0.6;
						return (
							<FadeInUp
								key={service.id}
								delay={itemDelay}
								triggerOnce={true}
								usePositionDelay={false}
								className="h-full"
							>
								<Link href={service.href} className="h-full block">
									<motion.div
										className="service-card group relative p-8 cursor-pointer h-full flex flex-col"
										whileHover={{ y: -8, transition: { duration: 0.3 } }}
									>
										{/* Decorative corner element */}
										<motion.div
											className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors"
											whileHover={{ scale: 1.1 }}
										/>

										{/* Icon container */}
										<motion.div
											className="mb-6"
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
												<IconComponent
													size={32}
													className="text-primary group-hover:text-accent transition-colors duration-300"
												/>
											</div>
										</motion.div>

										{/* Content */}
										<h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
											{service.title}
										</h3>

										<p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-grow">
											{service.description}
										</p>

										{/* Bottom accent line */}
										<motion.div
											className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent group-hover:via-accent/60 transition-all duration-300"
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.6, delay: itemDelay + 0.3 }}
										/>
									</motion.div>
								</Link>
							</FadeInUp>
						);
					})}
				</div>
			</div>

			{/* CTA Section */}
			<section className="relative px-8 md:px-16 lg:px-28 py-12 md:py-16 bg-gradient-to-b from-background via-accent/5 to-background text-center overflow-hidden">
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
					<p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-6 font-light">
						<AnimatedText
							text="Every hotel has untapped potential. Let's unlock yours - with strategy, precision, and imagination."
							delay={0.3}
							wordDelay={0.03}
							triggerOnce={true}
						/>
					</p>
				</FadeInUp>
				<FadeInUp delay={0.4} className="relative z-10" triggerOnce={true}>
					<Link href="/contacts">
						<motion.button
							whileHover={{
								scale: 1.05,
								backgroundColor: "rgba(var(--primary-rgb), 0.05)",
							}}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center justify-center px-8 py-2.5 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5"
						>
							Connect With KRAFTz
							<motion.svg
								className="ml-2 w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400 }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</motion.svg>
						</motion.button>
					</Link>
				</FadeInUp>
			</section>
		</div>
	);
}

export default WhatWeDo;
