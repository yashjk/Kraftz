import { cn } from "@/lib/utils";

function VisionMission() {
	return (
		<section className="px-8 md:px-28 py-28 text-center lg:text-start bg-[#f1f1f1] flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-8">
			<div className="w-full lg:w-1/2 text-center">
				<h6
					className={cn(
						// before content
						"before:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg)]",
						// after content
						"after:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg)]",
						// general
						"text-brand text-xl"
					)}
				>
					Vision
				</h6>
				<h2 className="my-8 text-4xl md:text-6xl">Our Vision</h2>
				<p className="text-gray-500 leading-normal text-lg">
					To be the most trusted growth partner of choice for hotels,
					accommodation providers and all age travellers. Driving success
					through intelligent strategy, data-driven insight and performance
					excellence
				</p>
			</div>
			<div className="w-full lg:w-1/2 text-center">
				<h6
					className={cn(
						// before content
						"before:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg)]",
						// after content
						"after:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg)]",
						// general
						"text-brand text-xl"
					)}
				>
					Mission
				</h6>
				<h2 className="my-8 text-4xl md:text-6xl">Our Mission</h2>
				<p className="text-gray-500 leading-normal text-lg">
					To deliver integrated hospitality, travel, and digital marketing
					solutions that drive growth, elevate guest experiences, and build
					stronger, future-ready brands
				</p>
			</div>
		</section>
	);
}

export default VisionMission;
