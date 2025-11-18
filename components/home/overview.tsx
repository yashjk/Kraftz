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
			className="relative pt-8 md:pt-12 pb-10 bg-background rounded-t-4xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
		>
			<div className="mx-auto w-full">
				<div className="flex flex-col items-center text-center px-8 md:px-28 ">
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
