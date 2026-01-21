"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Section = { id: string; title: string; content: string[] };

const IMAGES: { src: string; alt: string }[] = [
	{ src: "/Hospitality Solutions 1.jpeg", alt: "Hospitality and hotel excellence" },
	{ src: "/Hospitality solutions 2.jpeg", alt: "Hospitality solutions" },
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
		// Image after 2nd and 4th section — editorial breaks, no 1:1 with content
		if ((i === 1 || i === 3) && imgIdx < imgs.length) {
			blocks.push({ type: "image", src: imgs[imgIdx].src, alt: imgs[imgIdx].alt });
			imgIdx++;
		}
	});

	return blocks;
}

interface HospitalityEditorialProps {
	sections: Section[];
}

export function HospitalityEditorial({ sections }: HospitalityEditorialProps) {
	const blocks = buildBlocks(sections);

	return (
		<div className="px-10 py-10 md:py-14 bg-background">
			<div className="w-full">
				{blocks.map((block, i) => {
					if (block.type === "section") {
						return (
							<section
								key={block.section.id}
								id={block.section.id}
								className="scroll-mt-24 mb-8 md:mb-10"
							>
								<SectionTitle title={block.section.title} />
								<div className="mt-3 md:mt-4 space-y-3">
									{block.section.content.map((text, j) => (
										<p key={j} className="typ-body text-muted-foreground">
											{text}
										</p>
									))}
								</div>
							</section>
						);
					}

					return (
						<figure key={`img-${i}`} className="my-8 md:my-10">
							<div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden">
								<Image
									src={block.src}
									alt={block.alt}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 672px"
								/>
							</div>
						</figure>
					);
				})}
			</div>
		</div>
	);
}
