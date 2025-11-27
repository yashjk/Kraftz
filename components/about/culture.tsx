import { cn } from "@/lib/utils";

const cultureParagraphs = [
	"Built on trust, collaboration, and measurable outcomes, our culture thrives on excellence and accountability. We don't just consult we collaborate, co-create, and deliver transformation.",
	"Every partnership we undertake is guided by our commitment to clarity, creativity, and commercial success. At Kraftz, growth is not a metric — it's a mindset.",
];

function Culture() {
	return (
		<section className="relative isolate overflow-hidden px-8 md:px-24 py-16 md:py-20">
			<div className="absolute inset-0 bg-linear-to-br from-[#031633] via-[#05224d] to-[#0b376c]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.25),transparent_50%)] opacity-40" />

			<div className="relative z-10 space-y-8 text-white text-center">
				<header className="space-y-4">
					<h2
						className={cn(
							"font-heading text-4xl md:text-5xl font-bold",
							"flex items-center justify-center gap-2"
						)}
					>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
							alt=""
							className="h-5 md:h-6 w-auto object-contain"
							aria-hidden="true"
						/>
						<span>Our Culture</span>
						<img
							src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
							alt=""
							className="h-5 md:h-6 w-auto object-contain"
							aria-hidden="true"
						/>
					</h2>
					<div className="flex items-center justify-center gap-3 text-white/70">
						<span className="h-px w-12 bg-white/30" aria-hidden="true" />
						<span className="text-xs uppercase tracking-[0.4em]">
							Mindset &amp; Practice
						</span>
						<span className="h-px w-12 bg-white/30" aria-hidden="true" />
					</div>
				</header>

				<div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]">
					<p className="text-base md:text-lg leading-relaxed text-white/85">{cultureParagraphs[0]}</p>

					<p className="text-base md:text-lg leading-relaxed text-white/80 italic">{cultureParagraphs[1]}</p>
				</div>
			</div>
		</section>
	);
}

export default Culture;
