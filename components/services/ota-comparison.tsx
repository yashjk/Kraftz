"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
	X,
	CheckCircle2,
	TrendingUp,
	BarChart3,
	DollarSign,
	Target,
	Zap,
	Shield,
} from "lucide-react";

interface OTAComparisonProps {
	withoutItems: string[];
	withItems: string[];
	impact: string;
}

const getIconForItem = (index: number) => {
	const icons = [
		Shield,
		BarChart3,
		DollarSign,
		Target,
		Zap,
		TrendingUp,
		BarChart3,
		Target,
	];
	return icons[index % icons.length];
};

export function OTAComparison({
	withoutItems,
	withItems,
	impact,
}: OTAComparisonProps) {
	const [activeView, setActiveView] = useState<"without" | "with">("without");

	return (
		<section className="relative px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
			{/* Animated background decorations */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

			<div className="relative max-w-7xl mx-auto">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 md:mb-16"
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

				{/* Interactive Toggle Switch */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="flex items-center justify-center gap-4 mb-12 md:mb-16"
				>
					<button
						onClick={() => setActiveView("without")}
						className={cn(
							"relative px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2",
							activeView === "without"
								? "bg-red-500 text-white shadow-lg shadow-red-500/50 scale-105"
								: "bg-muted text-muted-foreground hover:bg-muted/80"
						)}
					>
						<X className="w-5 h-5" />
						Without OTA Management
					</button>
					<div className="w-12 h-0.5 bg-border" />
					<button
						onClick={() => setActiveView("with")}
						className={cn(
							"relative px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2",
							activeView === "with"
								? "bg-green-500 text-white shadow-lg shadow-green-500/50 scale-105"
								: "bg-muted text-muted-foreground hover:bg-muted/80"
						)}
					>
						<CheckCircle2 className="w-5 h-5" />
						With Kraftz OTA Management
					</button>
				</motion.div>

				{/* Animated Content Cards */}
				<AnimatePresence mode="wait">
					{activeView === "without" ? (
						<motion.div
							key="without"
							initial={{ opacity: 0, x: -50, scale: 0.95 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							exit={{ opacity: 0, x: 50, scale: 0.95 }}
							transition={{ duration: 0.5 }}
							className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
						>
							{withoutItems.map((item, index) => {
								const Icon = getIconForItem(index);
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										whileHover={{ y: -8, scale: 1.02 }}
										className="relative group"
									>
										<div className="h-full bg-gradient-to-br from-red-50/80 to-red-100/40 dark:from-red-950/30 dark:to-red-900/20 border-2 border-red-200 dark:border-red-900/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
											{/* Icon */}
											<div className="mb-4 flex items-center justify-between">
												<div className="w-12 h-12 rounded-xl bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 dark:group-hover:bg-red-500/30 transition-colors">
													<Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
												</div>
												<X className="w-5 h-5 text-red-500" />
											</div>
											{/* Content */}
											<p className="typ-body text-foreground font-medium leading-relaxed">
												{item}
											</p>
											{/* Decorative line */}
											<div className="mt-4 h-1 w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					) : (
						<motion.div
							key="with"
							initial={{ opacity: 0, x: 50, scale: 0.95 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							exit={{ opacity: 0, x: -50, scale: 0.95 }}
							transition={{ duration: 0.5 }}
							className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
						>
							{withItems.map((item, index) => {
								const Icon = getIconForItem(index);
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										whileHover={{ y: -8, scale: 1.02 }}
										className="relative group"
									>
										<div className="h-full bg-gradient-to-br from-green-50/80 to-emerald-100/40 dark:from-green-950/30 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-900/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
											{/* Animated background glow */}
											<div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

											{/* Icon */}
											<div className="mb-4 flex items-center justify-between relative z-10">
												<div className="w-12 h-12 rounded-xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors group-hover:scale-110 group-hover:rotate-3">
													<Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
												</div>
												<CheckCircle2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
											</div>
											{/* Content */}
											<p className="typ-body text-foreground font-medium leading-relaxed relative z-10">
												{item}
											</p>
											{/* Decorative line */}
											<div className="mt-4 h-1 w-12 bg-gradient-to-r from-green-500 to-transparent rounded-full relative z-10" />
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					)}
				</AnimatePresence>

				{/* Impact Statement */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center"
				>
					<div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 dark:from-primary/20 dark:via-accent/20 dark:to-secondary/20 border-2 border-primary/20 dark:border-primary/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
						{/* Background pattern */}
						<div className="absolute inset-0 opacity-5">
							<div className="absolute inset-0" style={{
								backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
								backgroundSize: "40px 40px"
							}} />
						</div>

						<div className="relative z-10">
							<div className="text-center">
								<p className="typ-body text-muted-foreground max-w-2xl mx-auto">
									{impact}
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
