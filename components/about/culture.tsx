import { cn } from "@/lib/utils";

function Culture() {
	return (
		<section className="relative px-8 md:px-28 pt-8 md:pt-10 pb-12 md:pb-16 text-center">
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
				<span>Our Culture</span>
				<img
					src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
					alt=""
					className="h-5 md:h-6 lg:h-7 w-auto object-contain"
					aria-hidden="true"
				/>
			</h2>
			<p className="text-[18px] md:text-lg leading-relaxed text-muted-foreground">
				Built on trust, collaboration, and measurable outcomes, our culture
				thrives on excellence and accountability. We don&apos;t just consult we
				collaborate, co-create, and deliver transformation.
				<br />
				<br />
				Every partnership we undertake is guided by our commitment to clarity,
				creativity, and commercial success. At Kraftz, growth is not a metric —
				it&apos;s a mindset.
			</p>
		</section>
	);
}

export default Culture;
