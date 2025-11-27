"use client";

import { motion } from "framer-motion";
import {
	SlideInLeft,
	SlideInRight,
	FadeInUp,
	AnimatedText,
} from "@/lib/animations";

function Overview() {
	return (
		<section
			id="overview"
			className="relative pt-6 md:pt-8 pb-8 bg-background rounded-t-4xl shadow-[0_-20px_20px_rgba(0,0,0,0.35)] overflow-hidden -mt-7"
		>
			<div className="mx-auto w-full">
				<div className="flex flex-col items-center text-center px-6 md:px-20 ">
					<SlideInRight
						className="flex flex-col gap-4 items-center w-full"
						triggerOnce={true}
					>
						<FadeInUp triggerOnce={true}>
							<h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#0249A7]">
								Welcome To Kraftz
							</h2>
						</FadeInUp>

						<p className="text-muted-foreground text-[18px] md:text-lg leading-relaxed w-full">
							<AnimatedText
								text="At Kraftz we redefine hospitality through Revenue Management, distribution channel, Artificial InteIligence, Data & Analytics, Business intelligence and digital marketing to create intelligent growth systems for hotels. In today’s dynamic market where demand shifts rapidly and competition intensifies, we help hotels not just fill rooms but to maximize every opportunity. Kraftz empowers hotels with smart, data-driven strategies that drive occupancy, optimize pricing and distribution, and elevate guest experiences. By combining deep hospitality expertise, strategic revenue management, data-driven insights, and innovative technology, we help hotels and travel businesses achieve sustainable, measurable growth and long-term commercial success"
								delay={0.1}
								wordDelay={0.02}
								triggerOnce={true}
							/>
						</p>
						<motion.a
							href="/contacts"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="group relative inline-flex items-center justify-center px-8 py-2.5 border border-[#FF7A18] bg-[#FF7A18] text-white font-semibold text-base tracking-wide rounded-lg transition-all duration-300 hover:bg-[#e56a0f] hover:text-white shadow-[0_4px_12px_rgba(255,122,24,0.25),0_2px_4px_rgba(255,122,24,0.15)] hover:shadow-[0_8px_25px_rgba(255,122,24,0.35),0_4px_10px_rgba(255,122,24,0.2)] mt-4"
						>
							<span className="relative z-10 flex items-center gap-2.5">
								Connect With Kraftz
								<motion.svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									initial={{ x: 0 }}
									whileHover={{ x: 4 }}
									transition={{ type: "spring", stiffness: 500, damping: 25 }}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</motion.svg>
							</span>
						</motion.a>
					</SlideInRight>
				</div>
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
	);
}

export default Overview;
