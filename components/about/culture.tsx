import { cn } from "@/lib/utils";

function Culture() {
	return (
		<section className="relative px-8 md:px-28 xl:px-96 py-28 text-center bg-[#f1f1f1]">
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
				Values & Beliefs
			</h6>
			<h2 className="my-8 text-4xl md:text-6xl">Our Culture</h2>
			<p className="text-gray-500 leading-normal text-lg">
				Built on trust, collaboration, and measurable outcomes, our culture
				thrives on excellence and accountability. We don't just consult we
				collaborate, co-create, and deliver transformation.
				<br />
				<br />
				Every partnership we undertake is guided by our commitment to clarity,
				creativity, and commercial success. At Kraftz, growth is not a metric —
				it's a mindset.
			</p>
		</section>
	);
}

export default Culture;
