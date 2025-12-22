"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { aboutOverviewParagraphs } from "@/lib/config/about";

function Overview() {
	const heroIntro = aboutOverviewParagraphs[0];
	const supportingCopy = aboutOverviewParagraphs.slice(1);

	return (
		<section className="relative isolate overflow-hidden px-8 md:px-24 py-16 md:py-24">
			<div className="absolute inset-0 bg-linear-to-br from-[#010918] via-[#03183a] to-[#042a5c]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
			<div className="absolute inset-x-0 top-10 mx-auto h-40 w-[85%] rounded-full bg-[#0c5ed9]/25 blur-3xl" />
			<div className="absolute inset-x-0 bottom-0 mx-auto h-64 w-[70%] rounded-full bg-[#FF7A18]/20 blur-[120px]" />

			<div className="relative z-10 text-white space-y-12 text-center">
				<header className="space-y-6">
					<h2
						className={cn(
							"typ-page-title",
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
					<p className="mx-auto max-w-5xl typ-body text-white/85">
						{heroIntro}
					</p>
				</header>

				<div className="grid gap-10 md:grid-cols-2">
					{supportingCopy.map((text, index) => (
						<div key={text} className="space-y-4">
							<div className="h-px w-20 mx-auto bg-white/20" />
							<p className="typ-body text-white/80">{text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Overview;
