"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/lib/animations";

function FormContainer() {
	// Google Maps embed URLs using the search query format (no API key required)
	const uaeMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
		contactInfo.address_uae_business
	)}&output=embed`;
	const indiaMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
		contactInfo.address_ind
	)}&output=embed`;

	return (
		<div className="bg-background">
			{/* Hero Section */}
			<section className="relative px-8 md:px-16 lg:px-28 py-8 md:py-12 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
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
				<motion.div
					className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
				/>

				<div className="relative max-w-7xl mx-auto">
					<FadeInUp triggerOnce={true}>
						<div className="text-center mb-6">
							<h1 className="typ-page-title mb-3 text-[#0249A7]">
								Contact Us
							</h1>
						</div>
					</FadeInUp>

					{/* Contact Information - Modern Horizontal Layout */}
					<FadeInUp triggerOnce={true}>
						<div className="bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c] border border-border rounded-3xl p-5 md:p-6 mb-8 shadow-lg">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
								{/* Email */}
								<motion.a
									href={`mailto:${contactInfo.email}`}
									className="group flex items-start gap-3 p-3 rounded-2xl transition-all duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<motion.div
										className="mb-0"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
											<svg
												className="w-8 h-8 group-hover:text-white text-[#FF7A18] transition-colors duration-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
									</motion.div>
									<div className="flex-1 min-w-0">
										<div className="typ-body font-semibold text-white uppercase tracking-wider mb-1">
											Email
										</div>
										<div className="typ-body font-medium text-white group-hover:text-[#FF7A18] transition-colors duration-300 break-all">
											{contactInfo.email}
										</div>
									</div>
									<svg
										className="w-5 h-5 text-white group-hover:text-[#FF7A18] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</motion.a>

								{/* UAE Phone */}
								<motion.a
									href={`tel:${contactInfo.phone_uae}`}
									className="group flex items-start gap-3 p-3 rounded-2xl transition-all duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<motion.div
										className="mb-0"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
											<svg
												className="w-8 h-8 group-hover:text-white text-[#FF7A18] transition-colors duration-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
									</motion.div>
									<div className="flex-1 min-w-0">
										<div className="typ-body font-semibold text-white uppercase tracking-wider mb-1">
											UAE
										</div>
										<div className="typ-body font-medium text-white group-hover:text-[#FF7A18] transition-colors duration-300">
											{contactInfo.phone_uae}
										</div>
									</div>
									<svg
										className="w-5 h-5 text-white group-hover:text-[#FF7A18] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</motion.a>

								{/* India Phone */}
								<div className="group flex items-start gap-3 p-3 rounded-2xl transition-all duration-300">
									<motion.div
										className="mb-0"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
											<svg
												className="w-8 h-8 group-hover:text-white text-[#FF7A18] transition-colors duration-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
									</motion.div>
									<div className="flex-1 min-w-0">
										<div className="typ-body font-semibold text-white uppercase tracking-wider mb-2">
											India
										</div>
										<div className="flex flex-col space-y-2">
											<motion.a
												href={`tel:${contactInfo.phone_ind_2}`}
												className="block typ-body font-medium text-white hover:text-[#FF7A18] transition-colors duration-300"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_ind_2}
											</motion.a>
											<motion.a
												href={`tel:${contactInfo.phone_ind_1}`}
												className="block typ-body font-medium text-white hover:text-[#FF7A18] transition-colors duration-300"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_ind_1}
											</motion.a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</FadeInUp>
				</div>
			</section>

			{/* Office Locations with Maps */}
			<section className="relative px-8 md:px-16 lg:px-28 pt-4 pb-8 md:pb-12 bg-background">
				<div className="relative max-w-7xl mx-auto">
					<FadeInUp triggerOnce={true}>
						<div className="text-center mb-4">
							<h2 className="typ-page-title mb-3 text-[#0249A7]">
								Visit Us
							</h2>
						</div>
					</FadeInUp>

					{/* UAE Office */}
					<div className="mb-8">
						<SlideInLeft triggerOnce={true}>
							<div className="bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c] border border-border rounded-3xl overflow-hidden shadow-lg">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									{/* Map */}
									<div className="h-64 lg:h-auto">
										<iframe
											width="100%"
											height="100%"
											style={{ border: 0, minHeight: "256px" }}
											loading="lazy"
											allowFullScreen
											referrerPolicy="no-referrer-when-downgrade"
											src={uaeMapUrl}
										></iframe>
									</div>
									{/* Address Info */}
									<div className="p-5 md:p-6 flex flex-col justify-center group">
										<div>
											<motion.div
												className="mb-3"
												whileHover={{ scale: 1.1, rotate: 5 }}
												transition={{ type: "spring", stiffness: 300 }}
											>
												<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
													<svg
														className="w-8 h-8 text-[#FF7A18] group-hover:text-white transition-colors duration-300"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
														/>
													</svg>
												</div>
											</motion.div>
											<h3 className="typ-section-title mb-3 text-white">
												UAE Offices
											</h3>
											<div className="space-y-3 mb-4">
												<div>
													<div className="typ-body font-semibold text-white mb-0.5">
														Business Office
													</div>
													<p className="typ-body text-white">
														{contactInfo.address_uae_business_full}
													</p>
												</div>
												<div>
													<div className="typ-body font-semibold text-white mb-0.5">
														Registered Office
													</div>
													<p className="typ-body text-white">
														{contactInfo.address_uae_registered}
													</p>
												</div>
											</div>
											<a
												href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
													contactInfo.address_uae_business
												)}`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-[#FF7A18] hover:text-white transition-colors font-medium typ-body"
											>
												View Business Office on Google Maps
												<svg
													className="w-4 h-4 ml-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</SlideInLeft>
					</div>

					{/* India Office */}
					<div>
						<SlideInRight triggerOnce={true}>
							<div className="bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c] border border-border rounded-3xl overflow-hidden shadow-lg">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									{/* Address Info */}
									<div className="p-5 md:p-6 flex flex-col justify-center order-2 lg:order-1 group">
										<div>
											<motion.div
												className="mb-3"
												whileHover={{ scale: 1.1, rotate: 5 }}
												transition={{ type: "spring", stiffness: 300 }}
											>
												<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
													<svg
														className="w-8 h-8 text-[#FF7A18] group-hover:text-white transition-colors duration-300"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
														/>
													</svg>
												</div>
											</motion.div>
											<h3 className="typ-section-title mb-3 text-white">
												India Office
											</h3>
											<p className="typ-body text-white mb-4">
												{contactInfo.address_ind}
											</p>
											<a
												href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
													contactInfo.address_ind
												)}`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-[#FF7A18] hover:text-white transition-colors font-medium typ-body"
											>
												View on Google Maps
												<svg
													className="w-4 h-4 ml-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
										</div>
									</div>
									{/* Map */}
									<div className="h-64 lg:h-auto order-1 lg:order-2">
										<iframe
											width="100%"
											height="100%"
											style={{ border: 0, minHeight: "256px" }}
											loading="lazy"
											allowFullScreen
											referrerPolicy="no-referrer-when-downgrade"
											src={indiaMapUrl}
										></iframe>
									</div>
								</div>
							</div>
						</SlideInRight>
					</div>
				</div>
			</section>
		</div>
	);
}

export default FormContainer;
