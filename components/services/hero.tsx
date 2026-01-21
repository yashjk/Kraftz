"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServicesHeroProps {
	title?: string;
	description: string;
	category?: string;
	children?: ReactNode;
	imageSrc?: string;
	backgroundPosition?: string;
	showOverlay?: boolean;
	textShadow?: boolean;
}

const titleShadow = "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)";
const bodyShadow = "1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)";

function ServicesHero({
	title,
	description,
	category,
	children,
	imageSrc = "/hero1.jpg",
	backgroundPosition = "right top",
	showOverlay = true,
	textShadow = false,
}: ServicesHeroProps) {
	return (
		<section
			className="relative bg-cover bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: `url('${imageSrc}')`,
				backgroundColor: "#0a0a0a",
				backgroundPosition: backgroundPosition,
				backgroundAttachment: "fixed",
				height: "80vh",
			}}
		>
			{showOverlay && (
				<div className="absolute inset-0 bg-[#2a1f1a]/60 z-0" aria-hidden="true" />
			)}

			{/* Background decorations - matching main hero style */}
			<div className="absolute inset-0 overflow-hidden z-1">
				<div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
				<div className="absolute bottom-20 left-0 w-80 h-80 bg-linear-to-tr from-primary/15 to-transparent rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
			</div>

			{/* Content */}
			<div className="relative h-full px-4 z-10 flex items-center">
				<div className="w-full">
					<div className="items-center">
						{/* Text Content */}
						<div className="space-y-6 text-center">
							{/* Category Badge */}

							{/* Title */}
							{title && (
								<h1
									className={cn(
										"typ-page-title text-white text-center",
										"flex items-center justify-center gap-2 px-2"
									)}
									style={{
										textShadow: textShadow
											? titleShadow
											: "2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)",
									}}
								>
									<img
										src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
										alt=""
										className="h-6 md:h-8 lg:h-10 w-auto object-contain"
										aria-hidden="true"
									/>
									<span>{title}</span>
									<img
										src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
										alt=""
										className="h-6 md:h-8 lg:h-10 w-auto object-contain"
										aria-hidden="true"
									/>
								</h1>
							)}

							{/* Description */}
							<p
								className="typ-body text-white"
								style={{
									textShadow: textShadow
										? bodyShadow
										: "1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)",
								}}
							>
								{description}
							</p>

							{/* Custom Children Content */}
							{children && <div>{children}</div>}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesHero;
