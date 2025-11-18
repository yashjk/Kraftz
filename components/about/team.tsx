"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

function Team() {
	return (
		<section className="relative px-8 md:px-28 pt-12 md:pt-16  overflow-hidden">
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

			<div className="relative w-full text-center">
				<FadeInUp triggerOnce={true}>
					<h2
						className={cn(
							"font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-8 text-[#0249A7]",
							"flex items-center justify-center gap-2 px-2"
						)}
					>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
							alt=""
							className="h-5 md:h-6 lg:h-7 w-auto object-contain"
							aria-hidden="true"
						/>
						<span>Our Team</span>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
							alt=""
							className="h-5 md:h-6 lg:h-7 w-auto object-contain"
							aria-hidden="true"
						/>
					</h2>
				</FadeInUp>

				<FadeInUp delay={0.2} triggerOnce={true}>
					<p className="text-[18px] md:text-lg leading-relaxed text-muted-foreground mb-8">
						The Kraftz Hospitality leadership and team brings together decades
						of experience across the hospitality and travel industry, each
						bringing a wealth of hands-on experience in revenue growth, OTA
						partnerships, distribution, digital marketing, business intelligence
						and commercial strategy.
					</p>
				</FadeInUp>

				<FadeInUp delay={0.3} triggerOnce={true}>
					<div className="space-y-4 text-[18px] md:text-lg leading-relaxed text-muted-foreground">
						<p>
							We&apos;ve successfully led initiatives that built large hotel
							portfolios, improved market share, and transformed revenue
							performance across multiple geographies.
						</p>
						<p>
							What unites us is a shared philosophy that true success comes from
							a balance of strategic thinking, operational excellence, and human
							connection.
						</p>
					</div>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Team;
