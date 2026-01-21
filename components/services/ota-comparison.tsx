"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
	Settings,
	TrendingDown,
	Scale,
	Wallet,
	ImageOff,
	EyeOff,
	Link2,
	XCircle,
	CheckCircle2,
	TrendingUp,
	LineChart,
	Receipt,
	ImagePlus,
	BarChart3,
	Globe,
	Target,
	ArrowRight,
	Sparkles,
} from "lucide-react";

interface OTAComparisonProps {
	withoutItems: string[];
	withItems: string[];
	impact: string;
}

const WITHOUT_ICONS: LucideIcon[] = [
	Settings,
	TrendingDown,
	Scale,
	Wallet,
	ImageOff,
	EyeOff,
	Link2,
	XCircle,
];

const WITH_ICONS: LucideIcon[] = [
	CheckCircle2,
	TrendingUp,
	LineChart,
	Receipt,
	ImagePlus,
	BarChart3,
	Globe,
	Target,
];

export function OTAComparison({
	withoutItems,
	withItems,
	impact,
}: OTAComparisonProps) {
	const pairs = withoutItems.map((without, i) => ({
		without,
		with: withItems[i] ?? "",
		withoutIcon: WITHOUT_ICONS[i % WITHOUT_ICONS.length],
		withIcon: WITH_ICONS[i % WITH_ICONS.length],
	}));

	return (
		<section className="relative px-6 md:px-10 lg:px-20 py-16 md:py-24 overflow-hidden">
			{/* Background — theme tokens only */}
			<div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />

			<div className="relative max-w-5xl mx-auto">
				{/* Section Title — #0249A7 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-10 md:mb-14"
				>
					<h2
						className={cn(
							"typ-section-title mb-6 text-[#0249A7]",
							"flex items-center justify-center gap-2 px-2"
						)}
					>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
							alt=""
							className="h-5 md:h-6 lg:h-7 w-auto object-contain"
							aria-hidden="true"
						/>
						<span>Transformation Impact</span>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
							alt=""
							className="h-5 md:h-6 lg:h-7 w-auto object-contain"
							aria-hidden="true"
						/>
					</h2>
				</motion.div>

				{/* Header: Without | Transform hub | With — theme colors */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-4 items-center mb-8 md:mb-12"
				>
					<div className="text-center md:text-right">
						<span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
							Before
						</span>
						<h3 className="typ-section-title text-muted-foreground mt-0.5">
							Without OTA Management
						</h3>
					</div>

					{/* Transform hub — #0249A7 + #FF7A18 */}
					<motion.div
						className={cn(
							"shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center",
							"bg-linear-to-br from-[#0249A7] via-[#FF7A18] to-[#0249A7]",
							"shadow-lg shadow-[#0249A7]/25"
						)}
						whileHover={{ scale: 1.08, rotate: 5 }}
						transition={{ type: "spring", stiffness: 400 }}
					>
						<ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
					</motion.div>

					<div className="text-center md:text-left">
						<span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#0249A7]/80">
							After
						</span>
						<h3 className="typ-section-title text-[#0249A7] mt-0.5">
							With Kraftz OTA Management
						</h3>
					</div>
				</motion.div>

				{/* Comparison rows + center spine — theme only */}
				<div className="relative">
					<div
						className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#0249A7]/25 to-transparent"
						aria-hidden="true"
					/>

					<div className="space-y-3 md:space-y-4">
						{pairs.map(
							(
								{ without, with: withText, withoutIcon: WithoutIcon, withIcon: WithIcon },
								index
							) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{ duration: 0.45, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
									className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-3 items-stretch"
								>
									{/* Left: Without — muted theme (slate), no red */}
									<motion.div
										className="group flex items-center gap-3 pr-1"
										whileHover={{ x: -2 }}
									>
										<div
											className={cn(
												"shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center",
												"bg-muted text-muted-foreground",
												"border border-border"
											)}
										>
											<WithoutIcon className="w-4 h-4 md:w-5 md:h-5" />
										</div>
										<div
											className={cn(
												"flex-1 min-w-0 rounded-xl md:rounded-2xl py-2.5 md:py-3 px-3 md:px-4",
												"bg-muted/90 text-muted-foreground typ-body font-medium",
												"border border-border",
												"rounded-l-xl md:rounded-l-2xl rounded-r-md md:rounded-r-lg"
											)}
										>
											{without}
										</div>
									</motion.div>

									<div className="hidden md:flex w-6 shrink-0 items-center justify-center">
										<div className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]/50" aria-hidden="true" />
									</div>

									{/* Right: With — WhatWeDo-style dark gradient + #FF7A18 accent */}
									<motion.div
										className="group flex items-center gap-3 pl-1 flex-row-reverse"
										whileHover={{ x: 2 }}
									>
										<div
											className={cn(
												"shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center",
												"bg-[#FF7A18] text-white"
											)}
										>
											<WithIcon className="w-4 h-4 md:w-5 md:h-5" />
										</div>
										<div
											className={cn(
												"flex-1 min-w-0 rounded-xl md:rounded-2xl py-2.5 md:py-3 px-3 md:px-4 text-right relative overflow-hidden",
												"bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c] text-white typ-body font-medium",
												"rounded-r-xl md:rounded-r-2xl rounded-l-md md:rounded-l-lg",
												"border-l-2 border-[#FF7A18]"
											)}
										>
											{withText}
										</div>
									</motion.div>
								</motion.div>
							)
						)}
					</div>
				</div>

				{/* Impact — theme: primary/10, accent, corner brackets */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.25 }}
					className="mt-14 md:mt-20"
				>
					<div className="relative rounded-2xl md:rounded-3xl p-6 md:p-10 bg-white dark:bg-card border border-[#0249A7]/20 shadow-lg shadow-[#0249A7]/5">
						<div
							className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#FF7A18]/50 rounded-tr-lg"
							aria-hidden="true"
						/>
						<div
							className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#0249A7]/30 rounded-bl-lg"
							aria-hidden="true"
						/>
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-linear-to-r from-transparent via-[#FF7A18]/50 to-transparent rounded-full" />

						<div className="relative flex flex-col md:flex-row md:items-center md:gap-6">
							<div className="shrink-0 flex items-center justify-center md:justify-start mb-4 md:mb-0">
								<div className="w-12 h-12 rounded-xl bg-[#FF7A18]/10 flex items-center justify-center">
									<Sparkles className="w-6 h-6 text-[#FF7A18]" aria-hidden="true" />
								</div>
							</div>
							<p className="typ-body text-foreground/90 max-w-2xl">
								{impact}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
