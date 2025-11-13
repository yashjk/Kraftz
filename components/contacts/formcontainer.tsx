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
							<h1
								className="text-4xl md:text-5xl lg:text-6xl mb-3 text-[#2d5a8a]"
								style={{
									fontFamily: "var(--font-playfair), serif",
									fontWeight: 700,
								}}
							>
								Contact Us
							</h1>
							<p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
								Reach out to us for digital marketing services, hospitality
								consulting, or luxury travel experiences. We&apos;re here to
								help your business grow intelligently.
							</p>
						</div>
					</FadeInUp>

					{/* Contact Information - Modern Horizontal Layout */}
					<FadeInUp triggerOnce={true}>
						<div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-5 md:p-6 mb-8 shadow-lg">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
								{/* Email */}
								<motion.a
									href={`mailto:${contactInfo.email}`}
									className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-all duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
										<svg
											className="w-6 h-6 text-primary"
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
									<div className="flex-1 min-w-0">
										<div
											className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1"
											style={{
												fontFamily: "var(--font-playfair), serif",
											}}
										>
											Email
										</div>
										<div className="text-base font-medium text-foreground group-hover:text-primary transition-colors break-all">
											{contactInfo.email}
										</div>
									</div>
									<svg
										className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
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
									className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-all duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
										<svg
											className="w-6 h-6 text-primary"
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
									<div className="flex-1 min-w-0">
										<div
											className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1"
											style={{
												fontFamily: "var(--font-playfair), serif",
											}}
										>
											UAE
										</div>
										<div className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
											{contactInfo.phone_uae}
										</div>
									</div>
									<svg
										className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
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
								<div className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-all duration-300">
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
										<svg
											className="w-6 h-6 text-primary"
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
									<div className="flex-1 min-w-0">
										<div
											className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5"
											style={{
												fontFamily: "var(--font-playfair), serif",
											}}
										>
											India
										</div>
										<div className="space-y-1.5">
											<motion.a
												href={`tel:${contactInfo.phone_ind_1}`}
												className="block text-base font-medium text-foreground hover:text-primary transition-colors"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_ind_1}
											</motion.a>
											<motion.a
												href={`tel:${contactInfo.phone_ind_2}`}
												className="block text-base font-medium text-foreground hover:text-primary transition-colors"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_ind_2}
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
			<section className="relative px-8 md:px-16 lg:px-28 py-8 md:py-12 bg-background">
				<div className="relative max-w-7xl mx-auto">
					<FadeInUp triggerOnce={true}>
						<div className="text-center mb-6">
							<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">
								Our Offices
							</span>
							<h2
								className="text-2xl md:text-3xl lg:text-4xl mb-3"
								style={{
									fontFamily: "var(--font-playfair), serif",
									fontWeight: 700,
								}}
							>
								Visit Us
							</h2>
						</div>
					</FadeInUp>

					{/* UAE Office */}
					<div className="mb-8">
						<SlideInLeft triggerOnce={true}>
							<div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
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
									<div className="p-5 md:p-6 flex flex-col justify-center">
										<div>
											<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
												<svg
													className="w-7 h-7 text-primary"
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
											<h3
												className="text-lg md:text-xl mb-3"
												style={{
													fontFamily: "var(--font-playfair), serif",
													fontWeight: 700,
												}}
											>
												UAE Offices
											</h3>
											<div className="space-y-3 mb-4">
												<div>
													<div className="text-xs font-semibold text-foreground mb-0.5">
														Business Office
													</div>
													<p className="text-muted-foreground text-sm leading-relaxed">
														{contactInfo.address_uae_business}
													</p>
												</div>
												<div>
													<div className="text-xs font-semibold text-foreground mb-0.5">
														Registered Office
													</div>
													<p className="text-muted-foreground text-sm leading-relaxed">
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
												className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-xs"
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
							<div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									{/* Address Info */}
									<div className="p-5 md:p-6 flex flex-col justify-center order-2 lg:order-1">
										<div>
											<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
												<svg
													className="w-7 h-7 text-primary"
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
											<h3
												className="text-lg md:text-xl mb-3"
												style={{
													fontFamily: "var(--font-playfair), serif",
													fontWeight: 700,
												}}
											>
												India Office
											</h3>
											<p className="text-muted-foreground text-sm leading-relaxed mb-4">
												{contactInfo.address_ind}
											</p>
											<a
												href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
													contactInfo.address_ind
												)}`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-xs"
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
