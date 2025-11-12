import { cn } from "@/lib/utils";

function Overview() {
	return (
		<section className="px-8 md:px-28 py-28 text-center lg:text-start bg-white flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-4">
			<div className="w-full text-center">
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
					About Us
				</h6>
				<p className="text-gray-500 leading-normal text-lg">
					At Kraftz, we empower the hospitality and travel ecosystem to perform,
					grow, and lead.
					<br />
					<br />
					Rooted in hospitality expertise and strengthened by digital innovation
					and strategic travel partnerships, Kraftz delivers end-to-end
					solutions that drive sustainable growth and measurable impact.
					<br />
					<br />
					With decades of collective experience, our team brings together
					revenue strategists, digital marketers, and travel experts — all
					united by one mission: to help our partners achieve operational
					excellence, brand distinction, and long-term profitability.
					<br />
					<br />
					From hotel revenue management to OTA optimization, from digital
					performance marketing, we design solutions that connect strategy with
					results. We don&apos;t just improve performance we transform potential into
					precision, and growth into leadership.
				</p>
			</div>
		</section>
	);
}

export default Overview;
