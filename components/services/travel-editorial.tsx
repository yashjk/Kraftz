"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Section = { id: string; title: string; content: string[] };

// Second-to-last and last images only: Ultra-Luxury, Cultural
const IMAGES: { src: string; alt: string }[] = [
	{ src: "/Ultra-Luxury.jpg", alt: "Ultra-luxury and lifestyle experiences" },
	{ src: "/Cultural.jpg", alt: "Cultural and experiential journeys" },
];

function SectionTitle({ title }: { title: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.45 }}
			className="text-center"
		>
			<h2
				className={cn(
					"typ-section-title text-[#0249A7]",
					"flex items-center justify-center gap-2 px-2"
				)}
			>
				<img
					src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg"
					alt=""
					className="h-5 md:h-6 lg:h-7 w-auto object-contain"
					aria-hidden="true"
				/>
				<span>{title}</span>
				<img
					src="https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg"
					alt=""
					className="h-5 md:h-6 lg:h-7 w-auto object-contain"
					aria-hidden="true"
				/>
			</h2>
		</motion.div>
	);
}

type Block =
	| { type: "section"; section: Section; index: number }
	| { type: "image"; src: string; alt: string };

function buildBlocks(sections: Section[]): Block[] {
	const blocks: Block[] = [];
	const imgs = [...IMAGES];
	let imgIdx = 0;

	sections.forEach((section, i) => {
		blocks.push({ type: "section", section, index: i });
		// Image after 2nd and 3rd section — none at the end
		if ((i === 1 || i === 2) && imgIdx < imgs.length) {
			blocks.push({ type: "image", src: imgs[imgIdx].src, alt: imgs[imgIdx].alt });
			imgIdx++;
		}
	});

	return blocks;
}

interface TravelEditorialProps {
	sections: Section[];
}

export function TravelEditorial({ sections }: TravelEditorialProps) {
	const blocks = buildBlocks(sections);

	return (
		<div
			className={cn(
				"px-4 py-6 md:py-8",
				"bg-linear-to-b from-background via-amber-50/10 to-background"
			)}
		>
			<div className="w-full text-center">
				{blocks.map((block, i) => {
					if (block.type === "section") {
						return (
							<section
								key={block.section.id}
								id={block.section.id}
								className="scroll-mt-24 py-6 md:py-8 first:pt-0"
							>
								<SectionTitle title={block.section.title} />
								<motion.div
									initial={{ opacity: 0, y: 8 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.45, delay: 0.08 }}
									className="mt-3 md:mt-4 space-y-3"
								>
									{block.section.content.map((text, j) => (
										<p
											key={j}
											className="typ-body text-muted-foreground leading-relaxed"
										>
											{text}
										</p>
									))}
								</motion.div>
							</section>
						);
					}

					return (
						<figure key={`img-${i}`} className="my-6 md:my-8 flex justify-center">
							<motion.div
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
								className={cn(
									"relative w-full max-w-2xl mx-auto aspect-3/2 rounded-2xl overflow-hidden",
									"shadow-xl ring-1 ring-amber-200/30"
								)}
							>
								<Image
									src={block.src}
									alt={block.alt}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 672px"
								/>
							</motion.div>
						</figure>
					);
				})}
			</div>
		</div>
	);
}
