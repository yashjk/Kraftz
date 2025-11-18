import { cn } from "@/lib/utils";

function VisionMission() {
	return (
		<section className="px-8 md:px-28 py-12 md:py-16 text-center lg:text-start bg-[#f1f1f1] flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-8">
			<div className="w-full lg:w-1/2 text-center">
				<h2
					className={cn(
						"font-heading my-4 md:my-6 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#0249A7]",
						"flex items-center justify-center gap-2 px-2"
					)}
				>
					<img
						src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
						alt=""
						className="h-5 md:h-6 lg:h-7 w-auto object-contain"
						aria-hidden="true"
					/>
					<span>Our Vision</span>
					<img
						src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
						alt=""
						className="h-5 md:h-6 lg:h-7 w-auto object-contain"
						aria-hidden="true"
					/>
				</h2>
				<p className="text-[18px] md:text-lg leading-relaxed text-muted-foreground">
					To be the most trusted growth partner of choice for hotels,
					accommodation providers and all age travellers. Driving success
					through intelligent strategy, data-driven insight and performance
					excellence
				</p>
			</div>
			<div className="w-full lg:w-1/2 text-center">
				<h2
					className={cn(
						"font-heading my-4 md:my-6 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#0249A7]",
						"flex items-center justify-center gap-2 px-2"
					)}
				>
					<img
						src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
						alt=""
						className="h-5 md:h-6 lg:h-7 w-auto object-contain"
						aria-hidden="true"
					/>
					<span>Our Mission</span>
					<img
						src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
						alt=""
						className="h-5 md:h-6 lg:h-7 w-auto object-contain"
						aria-hidden="true"
					/>
				</h2>
				<p className="text-[18px] md:text-lg leading-relaxed text-muted-foreground">
					To deliver integrated hospitality, travel, and digital marketing
					solutions that drive growth, elevate guest experiences, and build
					stronger, future-ready brands
				</p>
			</div>
		</section>
	);
}

export default VisionMission;
