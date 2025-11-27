"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const overviewParagraphs = [
	"At Kraftz, we empower the hospitality and travel ecosystem to perform, grow, and lead.",
	"Rooted in hospitality expertise and strengthened by digital innovation and strategic travel partnerships, Kraftz delivers end-to-end solutions that drive sustainable growth and measurable impact.",
	"With decades of collective experience, our team brings together revenue strategists, digital marketers, and travel experts — all united by one mission: to help our partners achieve operational excellence, brand distinction, and long-term profitability.",
	"From hotel revenue management to OTA optimization, from digital performance marketing, we design solutions that connect strategy with results.",
	"We don't just improve performance we transform potential into precision, and growth into leadership.",
];

function Overview() {
	const heroIntro = overviewParagraphs[0];
	const supportingCopy = overviewParagraphs.slice(1);

	return (
		<section className="relative isolate overflow-hidden px-8 md:px-24 py-16 md:py-24">
			<motion.div
				className="absolute inset-0 bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c]"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			/>
			<motion.div
				className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]"
				animate={{ opacity: [0.15, 0.4, 0.15] }}
				transition={{ duration: 10, repeat: Infinity }}
			/>
			<motion.div
				className="absolute inset-x-0 top-10 mx-auto h-40 w-[85%] rounded-full bg-[#0c5ed9]/25 blur-3xl"
				animate={{ opacity: [0.15, 0.35, 0.15] }}
				transition={{ duration: 8, repeat: Infinity }}
			/>
			<motion.div
				className="absolute inset-x-0 bottom-0 mx-auto h-64 w-[70%] rounded-full bg-[#FF7A18]/20 blur-[120px]"
				animate={{ opacity: [0.12, 0.3, 0.12], scale: [0.95, 1.05, 0.95] }}
				transition={{ duration: 9, repeat: Infinity }}
			/>

			<div className="relative z-10 text-white space-y-12 text-center">
				<header className="space-y-6">
					<h2
						className={cn(
							"font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
							"flex items-center justify-center gap-2"
						)}
					>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
							alt=""
							className="h-6 md:h-8 w-auto object-contain"
							aria-hidden="true"
						/>
						<span>About Us</span>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
							alt=""
							className="h-6 md:h-8 w-auto object-contain"
							aria-hidden="true"
						/>
					</h2>
					<p className="mx-auto max-w-5xl text-lg leading-relaxed text-white/85">
						{heroIntro}
					</p>
				</header>

				<div className="grid gap-10 md:grid-cols-2">
					{supportingCopy.map((text, index) => (
						<div key={text} className="space-y-4">
							<div className="h-px w-20 mx-auto bg-white/20" />
							<p className="text-base md:text-lg leading-relaxed text-white/80">
								{text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Overview;
