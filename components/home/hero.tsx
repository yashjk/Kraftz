"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/lib/config/homepage";

function Hero() {
	return (
		<section
			className="relative isolate min-h-[70vh] overflow-hidden bg-cover bg-fixed py-2 px-8 md:px-16 lg:px-24"
			style={{
				backgroundImage: `url('${heroContent.backgroundImage}')`,
				backgroundPosition: heroContent.backgroundPosition,
			}}
		>
			<div className="absolute inset-0 bg-linear-to-b from-black/25 to-black/40" />
			<div className="relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-between px-6 md:px-12 lg:px-20 text-center text-white py-8 md:py-12 mt-8">
				<h1
					className="typ-page-title"
					style={{
						fontFamily: '"Times New Roman", Times, serif',
						color: "#fffef8",
						textShadow:
							"0 15px 28px rgba(255, 255, 255, 0.7), 0 5px 10px rgba(255, 255, 255, 0.5)",
					}}
				>
					{heroContent.tagline}
				</h1>

				<p
					className="typ-body font-bold max-w-4xl"
					style={{
						color: "#fffef8",
						opacity: 0.9,
						textShadow:
							"0 1px 1px rgba(255, 255, 255, 0.848), 0 3px 3px rgba(255, 255, 255, 0.6)",
					}}
				>
					{heroContent.subline}
				</p>
			</div>
		</section>
	);
}

export default Hero;
