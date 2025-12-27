"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimatedParagraph from "./animated-paragraph";

interface VisualSectionProps {
	id: string;
	title: string;
	content: string[];
	imageSrc?: string;
	imagePosition?: "left" | "right";
	index: number;
}

export function VisualSection({
	id,
	title,
	content,
	imageSrc,
	imagePosition = "right",
	index,
}: VisualSectionProps) {
	const isEven = index % 2 === 0;
	const position = imagePosition === "left" ? "left" : isEven ? "right" : "left";

	return (
		<section
			id={id}
			className="relative px-6 md:px-10 lg:px-20 py-8 md:py-12 bg-background overflow-hidden scroll-mt-24"
		>
			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

			<div className="relative max-w-7xl mx-auto">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-6 md:mb-8"
				>
					<h2
						className={cn(
							"typ-section-title mb-2 text-[#0249A7]",
							"flex items-center justify-center gap-2 px-2"
						)}
					>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
							alt=""
							className="h-5 md:h-6 lg:h-7 w-auto object-contain"
							aria-hidden="true"
						/>
						<span>{title}</span>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
							alt=""
							className="h-5 md:h-6 lg:h-7 w-auto object-contain"
							aria-hidden="true"
						/>
					</h2>
				</motion.div>

				{/* Content Grid */}
				<div className={cn(
					"grid gap-4 md:gap-6 items-center",
					imageSrc ? "md:grid-cols-2" : "md:grid-cols-1 max-w-4xl mx-auto"
				)}>
					{/* Image */}
					{imageSrc && (
						<motion.div
							initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className={cn(
								"relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl w-full",
								position === "left" ? "md:order-1" : "md:order-2"
							)}
						>
							<Image
								src={imageSrc}
								alt={title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
						</motion.div>
					)}

					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: position === "left" ? 50 : -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className={cn(
							"w-full flex flex-col justify-center",
							imageSrc ? "h-64 md:h-80 lg:h-96" : "",
							position === "left" ? "md:order-2" : "md:order-1"
						)}
					>
						<div className="space-y-3">
							{content.map((text, textIndex) => (
								<p
									key={textIndex}
									className="typ-body text-muted-foreground break-words"
								>
									{text}
								</p>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
