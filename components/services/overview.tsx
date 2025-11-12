"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { FadeInUp } from "@/lib/animations";

function ServiceOverview({
	title,
	children,
	imageSrc,
	imageAlt,
	imagePosition = "right",
	id,
}: {
	title?: string;
	children: ReactNode;
	imageSrc?: string;
	imageAlt?: string;
	imagePosition?: "left" | "right";
	id?: string;
}) {
	return (
		<section
			id={id}
			className="relative px-8 md:px-16 lg:px-28 py-12 md:py-16 bg-background overflow-hidden scroll-mt-24"
		>
			{/* Background decoration */}
			<motion.div
				className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<div className="relative max-w-7xl mx-auto">
				{title && (
					<FadeInUp triggerOnce={true}>
						<h2
							className="mb-8 text-3xl md:text-4xl lg:text-5xl text-center text-[#2d5a8a]"
							style={{
								fontFamily: "var(--font-playfair), serif",
								fontWeight: 700,
							}}
						>
							{title}
						</h2>
					</FadeInUp>
				)}

				<div
					className={`grid grid-cols-1 ${
						imageSrc ? "lg:grid-cols-2" : ""
					} gap-6 lg:gap-8 items-center ${
						imagePosition === "left" && imageSrc ? "lg:grid-flow-dense" : ""
					}`}
				>
					{/* Image Section */}
					{imageSrc && (
						<FadeInUp triggerOnce={true} usePositionDelay={false}>
							<motion.div
								className={`relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg ${
									imagePosition === "left" ? "lg:col-start-1" : ""
								}`}
							>
								<Image
									src={imageSrc}
									alt={imageAlt || title || "Service image"}
									fill
									className="object-cover"
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
							</motion.div>
						</FadeInUp>
					)}

					{/* Image Placeholder */}
					{!imageSrc && (
						<FadeInUp triggerOnce={true} usePositionDelay={false}>
							<motion.div
								className={`relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-dashed border-primary/30 flex items-center justify-center ${
									imagePosition === "left" ? "lg:col-start-1" : ""
								}`}
							>
								<div className="text-center p-8">
									<motion.div
										animate={{ scale: [1, 1.1, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center"
									>
										<svg
											className="w-8 h-8 text-primary"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
									</motion.div>
									<p className="text-sm text-muted-foreground font-medium">
										Image Placeholder
									</p>
									<p className="text-xs text-muted-foreground/70 mt-2">
										{imageAlt || "Add image here"}
									</p>
								</div>
							</motion.div>
						</FadeInUp>
					)}

					{/* Content Section */}
					<FadeInUp
						triggerOnce={true}
						className={`${
							imagePosition === "left" && imageSrc ? "lg:col-start-2" : ""
						}`}
					>
						<div className="space-y-4">{children}</div>
					</FadeInUp>
				</div>
			</div>
		</section>
	);
}

export default ServiceOverview;
