import { cn } from "@/lib/utils";

const visionMission = [
	{
		title: "Our Vision",
		description:
			"To be the most trusted growth partner of choice for hotels, accommodation providers and all age travellers. Driving success through intelligent strategy, data-driven insight and performance excellence",
	},
	{
		title: "Our Mission",
		description:
			"To deliver integrated hospitality, travel, and digital marketing solutions that drive growth, elevate guest experiences, and build stronger, future-ready brands",
	},
];

function VisionMission() {
	return (
		<section className="relative isolate overflow-hidden px-8 md:px-24 py-16 md:py-20">
			<div className="absolute inset-0 bg-linear-to-br from-[#fef6ef] via-white to-[#e9f2ff]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,73,167,0.08),transparent_50%)]" />

			<div className="relative z-10 space-y-12 text-center">
				<div>
					<h2
						className={cn(
							"font-heading text-4xl md:text-5xl font-bold text-[#0249A7]",
							"flex items-center justify-center gap-2"
						)}
					>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
							alt=""
							className="h-5 md:h-6 w-auto object-contain"
							aria-hidden="true"
						/>
						<span>Vision &amp; Mission</span>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
							alt=""
							className="h-5 md:h-6 w-auto object-contain"
							aria-hidden="true"
						/>
					</h2>
				</div>

				<div className="grid gap-12 lg:grid-cols-2">
					{visionMission.map((item) => (
						<div
							key={item.title}
							className="space-y-4 px-6"
						>
							<p className="text-sm uppercase tracking-[0.4em] text-[#FF7A18]">
								{item.title}
							</p>
							<p className="text-base md:text-lg leading-relaxed text-slate-700">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default VisionMission;
