"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/config/services";

function WhatWeDo() {
	return (
		<div className="relative">
			{/* Hero Section */}
			<section className="relative px-8 md:px-16 lg:px-24 pt-8 md:pt-12 lg:pt-16 pb-4 bg-background overflow-hidden">
				<div className="relative text-center px-8 md:px-28">
					<h2 className="typ-section-title mb-6 text-[#0249A7]">What We Do</h2>
				</div>
			</section>

			{/* Services Grid */}
			<div className="px-8 md:px-16 lg:px-24 pt-4 pb-10 md:pb-14 bg-background">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
					{services.map((service, index) => {
						const IconComponent = service.icon;
						return (
							<div key={service.id} className="h-full">
								<Link href={service.href} className="h-full block">
									<motion.div
										className="service-card group relative p-8 cursor-pointer h-full flex flex-col bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c]"
										whileHover={{ y: -8, transition: { duration: 0.3 } }}
									>
										{/* Decorative corner element */}
										<motion.div
											className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-white/30 group-hover:border-[#FF7A18] transition-colors"
											whileHover={{ scale: 1.1 }}
										/>

										{/* Icon container */}
										<motion.div
											className="mb-6"
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
												<IconComponent
													size={32}
													className="group-hover:text-white text-[#FF7A18] transition-colors duration-300"
												/>
											</div>
										</motion.div>

										{/* Content */}
										<h3 className="typ-section-title mb-4 text-white group-hover:text-[#FF7A18] transition-colors duration-300">
											{service.title}
										</h3>

										<p className="typ-body text-white/80 mb-4 grow">
											{service.description}
										</p>

										{/* Read more link */}
										<div className="mt-auto pt-4">
											<motion.div
												className="inline-flex items-center font-medium transition-colors duration-300 text-[#FF7A18]"
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
										<div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:via-[#FF7A18]/60 transition-all duration-300" />
									</motion.div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default WhatWeDo;
