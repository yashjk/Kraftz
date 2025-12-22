"use client";

import { motion } from "framer-motion";
import { welcomeContent } from "@/lib/config/homepage";

function Overview() {
	return (
		<section
			id="overview"
			className="relative pt-6 md:pt-8 pb-8 bg-background rounded-t-4xl shadow-[0_-20px_20px_rgba(0,0,0,0.35)] overflow-hidden -mt-7"
		>
			<div className="mx-auto w-full">
				<div className="flex flex-col items-center text-center px-6 md:px-20 ">
					<div className="flex flex-col gap-4 items-center w-full">
						<h2 className="typ-section-title text-[#0249A7]">
							{welcomeContent.title}
						</h2>

						<div className="typ-body text-muted-foreground w-full space-y-4">
							{welcomeContent.paragraphs.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
						<motion.a
							href={welcomeContent.ctaHref}
							className="group relative inline-flex items-center justify-center px-8 py-2.5 border border-[#FF7A18] bg-[#FF7A18] text-white font-semibold typ-body tracking-wide rounded-lg transition-all duration-300 hover:bg-[#e56a0f] hover:text-white shadow-[0_4px_12px_rgba(255,122,24,0.25),0_2px_4px_rgba(255,122,24,0.15)] hover:shadow-[0_8px_25px_rgba(255,122,24,0.35),0_4px_10px_rgba(255,122,24,0.2)] mt-4"
						>
							<span className="relative z-10 flex items-center gap-2.5">
								{welcomeContent.ctaText}
								<motion.svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									initial={{ x: 0 }}
									whileHover={{ x: 4 }}
									transition={{ type: "spring", stiffness: 500, damping: 25 }}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</motion.svg>
							</span>
						</motion.a>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
		</section>
	);
}

export default Overview;
