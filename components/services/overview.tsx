"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function ServiceOverview({
	title,
	children,
	id,
}: {
	title?: string;
	children: ReactNode;
	id?: string;
}) {
	return (
		<section
			id={id}
			className="relative px-6 md:px-10 lg:px-20 pt-12 pb-16 md:pb-20 md:pt-16 bg-background overflow-hidden scroll-mt-24
		 rounded-t-4xl -mt-10 shadow-[0_-10px_20px_rgba(0,0,0,0.35)]"
		>
			{/* Top gradient line separator */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

			<div className="relative mx-auto">
				{title && (
					<h2
						className={cn(
							"typ-section-title mb-8 text-[#0249A7]",
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
				)}

				{/* Content Section - centered like homepage */}
				<div className="max-w-6xl mx-auto space-y-4">{children}</div>
			</div>
		</section>
	);
}

export default ServiceOverview;
