"use client";

import { motion } from "framer-motion";
import ConnectCTA from "@/components/common/connect-cta";
import Image from "next/image";
import { features } from "@/lib/config/features";

function Whyus() {
	return (
		<>
			<div className="relative">
				{/* Hero Section */}
				<section className="relative px-8 md:px-16 lg:px-24 pt-8 md:pt-12 lg:pt-16 pb-4 bg-background overflow-hidden">
					<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-30" />
					<div className="relative text-center px-8 md:px-28">
						<h2 className="typ-section-title mb-6 text-[#0249A7]">
							Why Choose Kraftz
						</h2>
					</div>
				</section>

				{/* Features Grid */}
				<div className="px-8 md:px-16 lg:px-24 pt-4 pb-10 md:pb-14 bg-background">
					<div className="flex flex-col gap-4 md:gap-0">
						{features.map((feature, index) => {
							const itemDelay = index * 0.1;
							const isEven = index % 2 === 0;
							const isFirst = index === 0;
							const isLast = index === features.length - 1;

							// Border radius classes: rounded-lg on mobile, conditional on desktop
							let borderRadiusClasses = "rounded-lg";
							if (isFirst && isLast) {
								// Only one card
								borderRadiusClasses = "rounded-lg";
							} else if (isFirst) {
								// First card: top radius on desktop
								borderRadiusClasses =
									"rounded-lg md:rounded-t-lg md:rounded-b-none";
							} else if (isLast) {
								// Last card: bottom radius on desktop
								borderRadiusClasses =
									"rounded-lg md:rounded-b-lg md:rounded-t-none";
							} else {
								// Middle cards: no radius on desktop
								borderRadiusClasses = "rounded-lg md:rounded-none";
							}

							return (
								<div key={feature.id} className="w-full">
									<motion.div
										className={`group relative w-full flex flex-col md:flex-row md:min-h-[270px] ${borderRadiusClasses} bg-white border border-primary/60 transition-all duration-300 shadow-lg overflow-hidden ${
											isEven ? "md:flex-row" : "md:flex-row-reverse"
										}`}
										whileHover={{ y: -4 }}
									>
										{/* Top accent bar - only visible on mobile */}
										<div className="absolute top-0 left-0 right-0 h-1 md:hidden bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

										{/* Image - Full height on desktop, fixed height on mobile */}
										<motion.div
											whileHover={{ scale: 1.02 }}
											transition={{ type: "spring", stiffness: 300 }}
											className="relative w-full md:w-[35%] h-48 md:h-auto overflow-hidden"
										>
											<Image
												src={feature.image}
												alt={feature.title}
												fill
												className="object-center group-hover:scale-105 transition-transform duration-300"
											/>
										</motion.div>

										{/* Text Content with Padding */}
										<div className="p-4 md:p-8 lg:p-12 flex flex-col justify-center md:w-[65%]">
											{/* Title */}
											<h3 className="typ-section-title mb-3 text-[#0249A7] group-hover:text-primary transition-colors duration-300">
												{feature.title}
											</h3>

											{/* Description */}
											<p className="typ-body text-muted-foreground">
												{feature.description}
											</p>
										</div>
									</motion.div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<ConnectCTA />
			<div className="my-4 h-1.5 w-32 bg-gradient-to-r from-secondary via-secondary to-transparent opacity-60 mx-auto" />
		</>
	);
}

export default Whyus;
