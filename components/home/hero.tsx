"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";
import { useCursor } from "@/hooks/use-cursor";
import { useEffect, useState, useRef, useMemo } from "react";

function Hero() {
	const { mousePosition } = useCursor();
	const sectionRef = useRef<HTMLElement>(null);
	const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });
	const [relativeMousePos, setRelativeMousePos] = useState({ x: 0, y: 0 });
	const animationFrameRef = useRef<number | undefined>(undefined);

	// Magnetic text effect - keep this
	const headingX = useSpring(useMotionValue(0), {
		stiffness: 150,
		damping: 15,
	});
	const headingY = useSpring(useMotionValue(0), {
		stiffness: 150,
		damping: 15,
	});
	const headingScale = useSpring(useMotionValue(1), {
		stiffness: 150,
		damping: 15,
	});

	// Update section size on mount and resize
	useEffect(() => {
		const updateSize = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				setSectionSize({ width: rect.width, height: rect.height });
			}
		};

		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	// Update relative mouse position - throttled for performance
	useEffect(() => {
		if (!sectionRef.current) return;

		let rafId: number | null = null;
		const updateMousePos = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				setRelativeMousePos({
					x: mousePosition.x - rect.left,
					y: mousePosition.y - rect.top,
				});
			}
			rafId = null;
		};

		// Throttle updates using requestAnimationFrame
		if (rafId === null) {
			rafId = requestAnimationFrame(updateMousePos);
		}

		return () => {
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
		};
	}, [mousePosition]);

	// Magnetic text effect
	useEffect(() => {
		if (sectionRef.current) {
			const rect = sectionRef.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const distanceX = mousePosition.x - centerX;
			const distanceY = mousePosition.y - centerY;
			const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
			const maxDistance = 200;
			const intensity = Math.min(distance / maxDistance, 1);

			if (distance < maxDistance) {
				const offsetX = (distanceX / maxDistance) * 10 * (1 - intensity);
				const offsetY = (distanceY / maxDistance) * 10 * (1 - intensity);
				const scale = 1 + (1 - intensity) * 0.02;
				headingX.set(offsetX);
				headingY.set(offsetY);
				headingScale.set(scale);
			} else {
				headingX.set(0);
				headingY.set(0);
				headingScale.set(1);
			}
		}
	}, [mousePosition, headingX, headingY, headingScale]);

	// Generate diagonal grid lines - tilted at 45 degrees
	const gridSize = 15;
	const { diagonal1, diagonal2 } = useMemo(() => {
		if (sectionSize.width === 0 || sectionSize.height === 0)
			return { diagonal1: [], diagonal2: [] };

		const diagonal1Lines: Array<{
			x1: number;
			y1: number;
			x2: number;
			y2: number;
			id: string;
		}> = [];
		const diagonal2Lines: Array<{
			x1: number;
			y1: number;
			x2: number;
			y2: number;
			id: string;
		}> = [];

		// Diagonal lines going from top-left to bottom-right (\)
		// Line equation: y = x + c, where c is the y-intercept
		const maxOffset = sectionSize.width + sectionSize.height;
		for (let c = -maxOffset; c <= maxOffset; c += gridSize) {
			const intersections: Array<{ x: number; y: number }> = [];

			// Intersect with left edge (x = 0): y = c
			if (c >= 0 && c <= sectionSize.height) {
				intersections.push({ x: 0, y: c });
			}

			// Intersect with right edge (x = width): y = width + c
			const yRight = sectionSize.width + c;
			if (yRight >= 0 && yRight <= sectionSize.height) {
				intersections.push({ x: sectionSize.width, y: yRight });
			}

			// Intersect with top edge (y = 0): x = -c
			if (-c >= 0 && -c <= sectionSize.width) {
				intersections.push({ x: -c, y: 0 });
			}

			// Intersect with bottom edge (y = height): x = height - c
			const xBottom = sectionSize.height - c;
			if (xBottom >= 0 && xBottom <= sectionSize.width) {
				intersections.push({ x: xBottom, y: sectionSize.height });
			}

			if (intersections.length >= 2) {
				diagonal1Lines.push({
					x1: intersections[0].x,
					y1: intersections[0].y,
					x2: intersections[1].x,
					y2: intersections[1].y,
					id: `d1-${c}`,
				});
			}
		}

		// Diagonal lines going from top-right to bottom-left (/)
		// Line equation: y = -x + c, where c is the y-intercept
		for (let c = -maxOffset; c <= maxOffset; c += gridSize) {
			const intersections: Array<{ x: number; y: number }> = [];

			// Intersect with left edge (x = 0): y = c
			if (c >= 0 && c <= sectionSize.height) {
				intersections.push({ x: 0, y: c });
			}

			// Intersect with right edge (x = width): y = -width + c
			const yRight = -sectionSize.width + c;
			if (yRight >= 0 && yRight <= sectionSize.height) {
				intersections.push({ x: sectionSize.width, y: yRight });
			}

			// Intersect with top edge (y = 0): x = c
			if (c >= 0 && c <= sectionSize.width) {
				intersections.push({ x: c, y: 0 });
			}

			// Intersect with bottom edge (y = height): x = c - height
			const xBottom = c - sectionSize.height;
			if (xBottom >= 0 && xBottom <= sectionSize.width) {
				intersections.push({ x: xBottom, y: sectionSize.height });
			}

			if (intersections.length >= 2) {
				diagonal2Lines.push({
					x1: intersections[0].x,
					y1: intersections[0].y,
					x2: intersections[1].x,
					y2: intersections[1].y,
					id: `d2-${c}`,
				});
			}
		}

		return { diagonal1: diagonal1Lines, diagonal2: diagonal2Lines };
	}, [sectionSize.width, sectionSize.height]);

	// Use CSS mask/clip-path approach for better performance
	// Create a circular mask that brightens lines within 40px radius

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-cover bg-no-repeat"
			style={{
				backgroundImage: "url('/hero1.jpg')",
				backgroundColor: "#0a0a0a", // Fallback color
				backgroundPosition: "right center",
				backgroundAttachment: "fixed",
			}}
		>
			{/* Dark overlay - warm brown/terracotta tone for contrast with blue heading */}
			<div className="absolute inset-0 bg-[#3c3c3c]/45 z-0" />

			{/* Cursor glow effect - very bright for elevated effect */}
			<motion.div
				className="absolute pointer-events-none"
				style={{
					left: relativeMousePos.x,
					top: relativeMousePos.y,
					width: 80,
					height: 80,
					transform: "translate(-50%, -50%)",
					background:
						"radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 15%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 65%, transparent 80%)",
					borderRadius: "50%",
					filter: "blur(25px)",
					zIndex: 1,
					willChange: "transform",
				}}
				animate={{
					opacity: relativeMousePos.x > 0 && relativeMousePos.y > 0 ? 1 : 0,
				}}
				transition={{
					duration: 0.05,
					ease: "linear",
				}}
			/>

			{/* Grid lines - single layer, static for performance */}
			<svg
				className="absolute inset-0 w-full h-full pointer-events-none"
				style={{ zIndex: 2 }}
			>
				{/* Diagonal lines going top-left to bottom-right (\) */}
				{diagonal1.map((line) => (
					<line
						key={line.id}
						x1={line.x1}
						y1={line.y1}
						x2={line.x2}
						y2={line.y2}
						stroke="white"
						strokeWidth="0.7"
						opacity="0.25"
					/>
				))}
				{/* Diagonal lines going top-right to bottom-left (/) */}
				{diagonal2.map((line) => (
					<line
						key={line.id}
						x1={line.x1}
						y1={line.y1}
						x2={line.x2}
						y2={line.y2}
						stroke="white"
						strokeWidth="0.7"
						opacity="0.25"
					/>
				))}
			</svg>

			<div className="relative px-8 md:px-16 lg:px-28 py-16 md:py-12 lg:py-20 z-10">
				<div className="w-full mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
						className="flex flex-col gap-6 items-center text-center w-full"
					>
						<div className="space-y-3 w-full">
							{/* Magnetic text effect */}
							<motion.h1
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.8 }}
								style={{
									x: headingX,
									y: headingY,
									scale: headingScale,
									textShadow:
										"2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)",
								}}
								className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
							>
								<span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-white">
									Krafting Growth Intelligently
								</span>
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.8 }}
								className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto mt-6"
								style={{
									textShadow:
										"1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)",
								}}
							>
								<AnimatedText
									text="At Kraftz, we provide end-to-end hospitality and travel solutions, all designed to elevate performance and accelerate growth. We Kraft precision strategies that empower property owners to maximize revenue and create exceptional experiences for travelers."
									delay={0.5}
									wordDelay={0.03}
									threshold={0}
									triggerOnce={true}
								/>
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
