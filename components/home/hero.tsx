"use client";

import { heroContent } from "@/lib/config/homepage";

function Hero() {
	return (
		<section
			className="relative isolate h-[80vh] overflow-hidden bg-cover bg-fixed py-2 px-8 md:px-16 lg:px-24"
			style={{
				backgroundImage: `url('${heroContent.backgroundImage}')`,
				backgroundPosition: heroContent.backgroundPosition,
			}}
		>
			<div className="absolute inset-0 bg-linear-to-b from-black/25 to-black/40" />
			<div className="relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center text-white py-8 md:py-12 mt-8 gap-4">
				<h1
					className="typ-page-title"
					style={{
						fontFamily: '"Times New Roman", Times, serif',
						color: "#fffef8",
						textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
						fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
					}}
				>
					{heroContent.tagline}
				</h1>

				<p
					className="typ-body font-bold max-w-4xl"
					style={{
						color: "#fffef8",
						opacity: 0.9,
						textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
						fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
					}}
				>
					{heroContent.subline}
				</p>
			</div>
		</section>
	);
}

export default Hero;
