"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { teamParagraphs, teamSectionLabels } from "@/lib/config/about";

function Team() {
	return (
		<section className="relative isolate overflow-hidden px-8 md:px-24 py-16 md:py-20">
			<div className="absolute inset-0 bg-linear-to-br from-white via-[#eef2ff] to-white" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(2,73,167,0.08),transparent_50%)]" />

			<div className="relative z-10 space-y-10 text-center">
				<div className="text-center space-y-4">
					<h2
						className={cn(
							"typ-section-title text-[#0249A7]",
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
						<span className="typ-body uppercase tracking-[0.4em]">
							Collective Expertise
						</span>
						<span className="h-px w-16 bg-current/40" aria-hidden="true" />
					</div>
				</div>

				<div className="grid gap-10">
					{teamParagraphs.map((text, index) => (
						<div key={text} className="space-y-4 typ-body text-slate-700">
							<div className="flex items-center justify-center gap-3 text-[#0249A7]/70">
								<div className="h-px w-24 bg-[#0249A7]/20" aria-hidden="true" />
								<span className="typ-body uppercase tracking-[0.35em]">
									{teamSectionLabels[index]}
								</span>
								<div className="h-px w-24 bg-[#0249A7]/20" aria-hidden="true" />
							</div>
							<p className="text-center">{text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Team;
