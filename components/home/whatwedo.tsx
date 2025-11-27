"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	TrendingUpIcon,
	NetworkIcon,
	BrainIcon,
	Share2Icon,
	StarIcon,
	MapPinIcon,
} from "lucide-react";
import { FadeInUp, StaggerContainer, AnimatedText } from "@/lib/animations";

function WhatWeDo() {
	const services = [
		{
			id: 1,
			icon: TrendingUpIcon,
			title: "Revenue Management",
			description:
				"We create rate architecture, demand modeling, channel mix optimization that results stronger RevPAR, higher ADR, and sustainable profitability.",
			href: "/services/hospitality#revenue-management",
		},
		{
			id: 2,
			icon: NetworkIcon,
			title: "Distribution Management",
			description:
				"Maximize your hotels reach with seamless multi-platform distribution. KRAFTz connects your inventory across leading channels, ensuring real-time updates across all platforms.",
			href: "/services/hospitality#distribution-channel-management",
		},
		{
			id: 3,
			icon: BrainIcon,
			title: "Business Intelligence & Data Solutions",
			description:
				"We turn hotel data into a competitive advantage with power of data to uncover revenue opportunities, leverage right tech ecosystem - RMS, PMS, AI, automation, and analytics to enhance efficiency.",
			href: "/services/hospitality#business-intelligence",
		},
		{
			id: 4,
			icon: Share2Icon,
			title: "Digital Marketing & Brand Experience",
			description:
				"Your digital presence should work as hard as your front line. We blend storytelling, design, and analytics to make your brand visible, desirable, and discoverable across search, social, and web.",
			href: "/services/digital-marketing",
		},
		{
			id: 5,
			icon: StarIcon,
			title: "Online Reputation & Guest Insights",
			description:
				"We help you manage guest sentiments and elevate your online credibility with precision turning feedback into loyalty and performance. Every review shapes your revenue.",
			href: "/services/hospitality#reputation-management-orm",
		},
		{
			id: 6,
			icon: MapPinIcon,
			title: "Travel Experiences",
			description:
				"Travel, tailored to excellence. For all age travellers personal or business, we curate global stays, journeys, and partnerships that define modern luxury.",
			href: "/services/travel",
		},
	];

	return (
		<div className="relative">
			{/* Hero Section */}
			<section className="relative px-8 md:px-16 lg:px-24 pt-8 md:pt-12 lg:pt-16 pb-4 bg-background overflow-hidden">
				<div className="relative text-center px-8 md:px-28">
					<FadeInUp delay={0.2} triggerOnce={true}>
						<h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-[#0249A7]">
							What We Do
						</h2>
					</FadeInUp>
				</div>
			</section>

			{/* Services Grid */}
			<div className="px-8 md:px-16 lg:px-24 pt-4 pb-10 md:pb-14 bg-background">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
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
										<h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-[#0249A7] group-hover:text-primary transition-colors duration-300">
											{service.title}
										</h3>

										<p className="text-[18px] md:text-lg leading-relaxed text-foreground mb-4 flex-grow">
											{service.description}
										</p>

										{/* Read more link */}
										<div className="mt-auto pt-4">
											<motion.div
												className="inline-flex items-center text-primary font-medium transition-colors duration-300 group-hover:text-accent"
												whileHover={{ x: 5 }}
												transition={{ type: "spring", stiffness: 400 }}
											>
												Read More
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
										</div>

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
		</div>
	);
}

export default WhatWeDo;
