"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const teamParagraphs = [
	"The Kraftz Hospitality leadership and team brings together decades of experience across the hospitality and travel industry, each bringing a wealth of hands-on experience in revenue growth, OTA partnerships, distribution, digital marketing, business intelligence and commercial strategy.",
	"We've successfully led initiatives that built large hotel portfolios, improved market share, and transformed revenue performance across multiple geographies.",
	"What unites us is a shared philosophy that true success comes from a balance of strategic thinking, operational excellence, and human connection.",
];

function Team() {
	return (
		<section className="relative isolate overflow-hidden px-8 md:px-24 py-16 md:py-20">
			<motion.div
				className="absolute inset-0 bg-linear-to-br from-white via-[#eef2ff] to-white"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			/>
			<motion.div
				className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(2,73,167,0.08),transparent_50%)]"
				animate={{ opacity: [0.15, 0.35, 0.15] }}
				transition={{ duration: 10, repeat: Infinity }}
			/>

			<div className="relative z-10 space-y-10 text-center">
				<FadeInUp triggerOnce>
					<div className="text-center space-y-4">
						<h2
							className={cn(
								"font-heading text-4xl md:text-5xl font-bold text-[#0249A7]",
								"flex items-center justify-center gap-2"
							)}
						>
							<img
								src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
								alt=""
								className="h-5 md:h-6 w-auto object-contain"
								aria-hidden="true"
							/>
							<span>Our Team</span>
							<img
								src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
								alt=""
								className="h-5 md:h-6 w-auto object-contain"
								aria-hidden="true"
							/>
						</h2>
						<div className="flex items-center justify-center gap-4 text-[#0249A7]/70">
							<span className="h-px w-16 bg-current/40" aria-hidden="true" />
							<span className="text-xs uppercase tracking-[0.4em]">
								Collective Expertise
							</span>
							<span className="h-px w-16 bg-current/40" aria-hidden="true" />
						</div>
					</div>
				</FadeInUp>

				<div className="grid gap-10">
					{teamParagraphs.map((text, index) => (
						<FadeInUp key={text} delay={0.1 * index} triggerOnce>
							<div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-700">
								<div className="flex items-center justify-center gap-3 text-[#0249A7]/70">
									<span className="text-sm uppercase tracking-[0.35em]">
										{index === 0
											? "Leadership"
											: index === 1
											? "Reach"
											: "Values"}
									</span>
									<div className="h-px w-24 bg-[#0249A7]/20" aria-hidden="true" />
								</div>
								<p className="text-center">{text}</p>
							</div>
						</FadeInUp>
					))}
				</div>
			</div>
		</section>
	);
}

export default Team;
