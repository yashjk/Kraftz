"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Overview() {
	return (
		<section className="relative px-8 md:px-28 py-12 md:py-16 text-center lg:text-start flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-4 overflow-hidden">
			{/* Background pie symbol */}
			<motion.div
				className="absolute -top-[30%] left-1/2 -translate-x-1/2 pointer-events-none"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 0.05, scale: 1 }}
				transition={{ duration: 1 }}
			>
				<span className="font-heading text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-[#0249A7] leading-none select-none">
					π
				</span>
			</motion.div>

			<div className="relative w-full text-center z-10">
				<h2
					className={cn(
						"font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#0249A7]",
						"flex items-center justify-center gap-2 px-2"
					)}
				>
					<img
						src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
						alt=""
						className="h-6 md:h-8 lg:h-10 w-auto object-contain"
						aria-hidden="true"
					/>
					<span>About Us</span>
					<img
						src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
						alt=""
						className="h-6 md:h-8 lg:h-10 w-auto object-contain"
						aria-hidden="true"
					/>
				</h2>
				<p className="text-[18px] md:text-lg leading-relaxed text-muted-foreground">
					At Kraftz, we empower the hospitality and travel ecosystem to perform,
					grow, and lead.
					<br />
					<br />
					Rooted in hospitality expertise and strengthened by digital innovation
					and strategic travel partnerships, Kraftz delivers end-to-end
					solutions that drive sustainable growth and measurable impact.
					<br />
					<br />
					With decades of collective experience, our team brings together
					revenue strategists, digital marketers, and travel experts — all
					united by one mission: to help our partners achieve operational
					excellence, brand distinction, and long-term profitability.
					<br />
					<br />
					From hotel revenue management to OTA optimization, from digital
					performance marketing, we design solutions that connect strategy with
					results. We don&apos;t just improve performance we transform potential
					into precision, and growth into leadership.
				</p>
			</div>
		</section>
	);
}

export default Overview;
