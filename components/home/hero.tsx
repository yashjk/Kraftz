"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";
import { useCursor } from "@/hooks/use-cursor";
import { useEffect, useState, useRef } from "react";

function Hero() {
	const { mousePosition } = useCursor();
	const [particles, setParticles] = useState<
		Array<{
			id: number;
			x: number;
			y: number;
			opacity: number;
			vx: number;
			vy: number;
			color: string;
		}>
	>([]);
	const [bubbles, setBubbles] = useState<
		Array<{
			id: number;
			x: number;
			y: number;
			size: number;
			vx: number;
			vy: number;
		}>
	>([]);
	const sectionRef = useRef<HTMLElement>(null);

	// Bubble colors for multicolored bubbles - using actual hex colors
	const bubbleColors = [
		"#4a90c2", // Light blue (primary)
		"#f4d03f", // Gold (accent)
		"#d97757", // Terracotta (secondary)
		"#1e3a5f", // Dark blue
		"#2d5a8a", // Medium blue
		"#6bb6ff", // Bright blue
	];

	// Floating geometric shapes with parallax delay - bubbles at edges with varied sizes
	const shapes = [
		{
			id: 1,
			type: "circle",
			x: "5%",
			y: "10%",
			size: 28,
			delay: 0.1,
			color: bubbleColors[0],
		},
		{ id: 2, type: "triangle", x: "22%", y: "12%", size: 40, delay: 0.12 },
		{ id: 3, type: "hexagon", x: "38%", y: "22%", size: 32, delay: 0.14 },
		{
			id: 4,
			type: "circle",
			x: "95%",
			y: "15%",
			size: 42,
			delay: 0.11,
			color: bubbleColors[1],
		},
		{ id: 5, type: "cone", x: "72%", y: "22%", size: 36, delay: 0.13 },
		{ id: 6, type: "square", x: "88%", y: "12%", size: 34, delay: 0.15 },
		{ id: 7, type: "cylinder", x: "12%", y: "35%", size: 33, delay: 0.16 },
		{ id: 8, type: "triangle", x: "28%", y: "38%", size: 37, delay: 0.17 },
		{ id: 9, type: "hexagon", x: "45%", y: "35%", size: 35, delay: 0.18 },
		{
			id: 10,
			type: "circle",
			x: "3%",
			y: "40%",
			size: 35,
			delay: 0.19,
			color: bubbleColors[2],
		},
		{ id: 11, type: "cone", x: "78%", y: "35%", size: 36, delay: 0.2 },
		{ id: 12, type: "square", x: "92%", y: "40%", size: 34, delay: 0.21 },
		{ id: 13, type: "cylinder", x: "15%", y: "50%", size: 33, delay: 0.22 },
		{ id: 14, type: "triangle", x: "32%", y: "52%", size: 37, delay: 0.23 },
		{ id: 15, type: "hexagon", x: "50%", y: "50%", size: 35, delay: 0.24 },
		{
			id: 16,
			type: "circle",
			x: "97%",
			y: "55%",
			size: 32,
			delay: 0.25,
			color: bubbleColors[3],
		},
		{ id: 17, type: "cone", x: "85%", y: "50%", size: 36, delay: 0.26 },
		{ id: 18, type: "square", x: "5%", y: "45%", size: 35, delay: 0.27 },
		{ id: 19, type: "cylinder", x: "18%", y: "62%", size: 34, delay: 0.28 },
		{ id: 20, type: "triangle", x: "35%", y: "65%", size: 38, delay: 0.29 },
		{ id: 21, type: "hexagon", x: "52%", y: "62%", size: 36, delay: 0.3 },
		{
			id: 22,
			type: "circle",
			x: "2%",
			y: "70%",
			size: 38,
			delay: 0.31,
			color: bubbleColors[4],
		},
		{ id: 23, type: "cone", x: "88%", y: "62%", size: 35, delay: 0.32 },
		{ id: 24, type: "square", x: "10%", y: "75%", size: 34, delay: 0.33 },
		{ id: 25, type: "cylinder", x: "26%", y: "78%", size: 38, delay: 0.34 },
		{ id: 26, type: "triangle", x: "42%", y: "75%", size: 35, delay: 0.35 },
		{ id: 27, type: "hexagon", x: "58%", y: "78%", size: 37, delay: 0.36 },
		{
			id: 28,
			type: "circle",
			x: "96%",
			y: "82%",
			size: 30,
			delay: 0.37,
			color: bubbleColors[5],
		},
		{ id: 29, type: "cone", x: "92%", y: "78%", size: 33, delay: 0.38 },
		{ id: 30, type: "square", x: "3%", y: "30%", size: 32, delay: 0.39 },
		{ id: 31, type: "cylinder", x: "20%", y: "28%", size: 36, delay: 0.4 },
		{ id: 32, type: "hexagon", x: "95%", y: "28%", size: 34, delay: 0.41 },
		{
			id: 33,
			type: "circle",
			x: "8%",
			y: "85%",
			size: 40,
			delay: 0.42,
			color: bubbleColors[0],
		},
		{
			id: 34,
			type: "circle",
			x: "90%",
			y: "5%",
			size: 26,
			delay: 0.43,
			color: bubbleColors[1],
		},
		{
			id: 35,
			type: "circle",
			x: "98%",
			y: "35%",
			size: 36,
			delay: 0.44,
			color: bubbleColors[2],
		},
		{
			id: 36,
			type: "circle",
			x: "4%",
			y: "55%",
			size: 33,
			delay: 0.45,
			color: bubbleColors[3],
		},
	];

	// Spring animations for shapes with parallax delay - use state instead of hooks in loops
	const [shapeOffsets, setShapeOffsets] = useState<
		Array<{ x: number; y: number }>
	>(shapes.map(() => ({ x: 0, y: 0 })));

	// Update shape positions with parallax using smooth transitions
	useEffect(() => {
		const updateOffsets = () => {
			setShapeOffsets(
				shapes.map((shape) => {
					const offsetX =
						(mousePosition.x -
							(typeof window !== "undefined" ? window.innerWidth : 0) / 2) *
						shape.delay;
					const offsetY =
						(mousePosition.y -
							(typeof window !== "undefined" ? window.innerHeight : 0) / 2) *
						shape.delay;
					return { x: offsetX, y: offsetY };
				})
			);
		};

		// Use requestAnimationFrame for smooth updates
		const rafId = requestAnimationFrame(updateOffsets);
		return () => cancelAnimationFrame(rafId);
	}, [mousePosition]);

	// Gradient orb/glow that follows cursor
	const orbX = useSpring(useMotionValue(0), { stiffness: 50, damping: 25 });
	const orbY = useSpring(useMotionValue(0), { stiffness: 50, damping: 25 });

	useEffect(() => {
		orbX.set(mousePosition.x);
		orbY.set(mousePosition.y);
	}, [mousePosition, orbX, orbY]);

	// Magnetic text effect - heading reacts to cursor proximity
	const [headingTransform, setHeadingTransform] = useState({
		x: 0,
		y: 0,
		scale: 1,
	});

	useEffect(() => {
		if (sectionRef.current) {
			const rect = sectionRef.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const distance = Math.sqrt(
				Math.pow(mousePosition.x - centerX, 2) +
					Math.pow(mousePosition.y - centerY, 2)
			);
			const maxDistance = 400;
			const proximity = Math.max(0, 1 - distance / maxDistance);
			const offsetX = (mousePosition.x - centerX) * 0.02 * proximity;
			const offsetY = (mousePosition.y - centerY) * 0.02 * proximity;
			const scale = 1 + proximity * 0.02;

			setHeadingTransform({ x: offsetX, y: offsetY, scale });
		}
	}, [mousePosition]);

	// Multi-colored particle trail - defined outside to avoid dependency issues
	const particleColors = [
		"bg-primary/50",
		"bg-accent/50",
		"bg-secondary/50",
		"bg-[#1e3a5f]/50",
		"bg-[#2d5a8a]/50",
		"bg-[#4a90c2]/50",
	];

	// Generate particles continuously at cursor position
	// Use ref to avoid recreating interval on every mousePosition change
	const mousePositionRef = useRef(mousePosition);

	useEffect(() => {
		mousePositionRef.current = mousePosition;
	}, [mousePosition]);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentMousePos = mousePositionRef.current;
			if (
				currentMousePos.x > 0 &&
				currentMousePos.y > 0 &&
				sectionRef.current
			) {
				const rect = sectionRef.current.getBoundingClientRect();
				// Calculate position relative to the section container
				const relativeX = currentMousePos.x - rect.left;
				const relativeY = currentMousePos.y - rect.top;

				const angle = Math.random() * Math.PI * 2;
				const speed = 0.5 + Math.random() * 1;
				const colorIndex = Math.floor(Math.random() * particleColors.length);
				const newParticle = {
					id: Date.now() + Math.random(),
					x: relativeX, // Position relative to section
					y: relativeY, // Position relative to section
					opacity: 0.6,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					color: particleColors[colorIndex],
				};
				setParticles((prev) => [...prev.slice(-40), newParticle]); // Increased limit for longer trail
			}
		}, 60);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Empty dependency array - interval runs continuously, particleColors is stable

	// Update and fade particles
	useEffect(() => {
		const updateInterval = setInterval(() => {
			setParticles((prev) =>
				prev
					.map((p) => ({
						...p,
						x: p.x + p.vx,
						y: p.y + p.vy,
						opacity: Math.max(0, p.opacity - 0.02),
					}))
					.filter((p) => p.opacity > 0)
			);
		}, 16);

		return () => clearInterval(updateInterval);
	}, []);

	// Floating bubbles that move away from cursor
	useEffect(() => {
		// Initialize bubbles
		if (bubbles.length === 0 && typeof window !== "undefined") {
			const initialBubbles = Array.from({ length: 8 }, (_, i) => ({
				id: i,
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				size: 20 + Math.random() * 40,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
			}));
			setBubbles(initialBubbles);
		}
	}, [bubbles.length]);

	// Update bubbles - move away from cursor
	useEffect(() => {
		if (bubbles.length === 0) return;

		const bubbleInterval = setInterval(() => {
			setBubbles((prev) =>
				prev.map((bubble) => {
					const dx = bubble.x - mousePosition.x;
					const dy = bubble.y - mousePosition.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const repulsionForce =
						distance > 0 && distance < 200 ? Math.min(200 / distance, 2) : 0;
					const angle = Math.atan2(dy, dx);

					let newVx = bubble.vx + Math.cos(angle) * repulsionForce * 0.1;
					let newVy = bubble.vy + Math.sin(angle) * repulsionForce * 0.1;
					newVx *= 0.98; // Friction
					newVy *= 0.98;

					let newX = bubble.x + newVx;
					let newY = bubble.y + newVy;

					// Wrap around edges
					if (typeof window !== "undefined") {
						if (newX < 0) newX = window.innerWidth;
						if (newX > window.innerWidth) newX = 0;
						if (newY < 0) newY = window.innerHeight;
						if (newY > window.innerHeight) newY = 0;
					}

					return {
						...bubble,
						x: newX,
						y: newY,
						vx: newVx,
						vy: newVy,
					};
				})
			);
		}, 16);

		return () => clearInterval(bubbleInterval);
	}, [mousePosition, bubbles]);

	return (
		<section
			ref={sectionRef}
			className="relative bg-background overflow-hidden"
		>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Gradient orb/glow that follows cursor - smaller */}
				<motion.div
					className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-full blur-3xl pointer-events-none"
					style={{
						x: orbX,
						y: orbY,
						left: -128,
						top: -128,
					}}
				/>

				{/* Floating geometric shapes with parallax delay */}
				{shapes.map((shape, index) => {
					const offset = shapeOffsets[index];
					const isClient = typeof window !== "undefined";
					const baseX = isClient
						? (window.innerWidth * parseFloat(shape.x)) / 100
						: 0;
					const baseY = isClient
						? (window.innerHeight * parseFloat(shape.y)) / 100
						: 0;

					return (
						<motion.div
							key={shape.id}
							className="absolute pointer-events-none"
							style={{
								x: offset.x,
								y: offset.y,
								left: baseX,
								top: baseY,
								width: shape.size,
								height: shape.size,
								transform: "translate(-50%, -50%)",
							}}
							animate={{
								rotate: [0, 360],
								scale: [1, 1.1, 1],
							}}
							transition={{
								x: {
									type: "spring",
									stiffness: Math.max(15, 35 - shape.id * 0.5),
									damping: 20,
								},
								y: {
									type: "spring",
									stiffness: Math.max(15, 35 - shape.id * 0.5),
									damping: 20,
								},
								rotate: {
									duration: 15 + shape.id * 2,
									repeat: Infinity,
									ease: "linear",
								},
								scale: {
									duration: 15 + shape.id * 2,
									repeat: Infinity,
									ease: "linear",
								},
							}}
						>
							{shape.type === "circle" && (
								<svg viewBox="0 0 100 100" className="w-full h-full">
									<defs>
										{/* Main bubble gradient with realistic light refraction - multicolored */}
										<radialGradient
											id={`bubble-gradient-${shape.id}`}
											cx="40%"
											cy="35%"
										>
											<stop offset="0%" stopColor="white" stopOpacity="0.5" />
											<stop
												offset="30%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0.08"
											/>
											<stop
												offset="60%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0.03"
											/>
											<stop
												offset="100%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0.06"
											/>
										</radialGradient>
										{/* Primary highlight - main light reflection */}
										<radialGradient
											id={`bubble-highlight-${shape.id}`}
											cx="35%"
											cy="30%"
										>
											<stop offset="0%" stopColor="white" stopOpacity="0.95" />
											<stop offset="40%" stopColor="white" stopOpacity="0.5" />
											<stop offset="100%" stopColor="white" stopOpacity="0" />
										</radialGradient>
										{/* Secondary highlight - smaller reflection */}
										<radialGradient
											id={`bubble-highlight2-${shape.id}`}
											cx="60%"
											cy="25%"
										>
											<stop offset="0%" stopColor="white" stopOpacity="0.7" />
											<stop offset="50%" stopColor="white" stopOpacity="0.3" />
											<stop offset="100%" stopColor="white" stopOpacity="0" />
										</radialGradient>
										{/* Bottom shadow/dark area */}
										<radialGradient
											id={`bubble-shadow-${shape.id}`}
											cx="50%"
											cy="70%"
										>
											<stop
												offset="0%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0.06"
											/>
											<stop
												offset="100%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0"
											/>
										</radialGradient>
										{/* Outer glow */}
										<radialGradient
											id={`bubble-glow-${shape.id}`}
											cx="50%"
											cy="50%"
										>
											<stop
												offset="80%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0.06"
											/>
											<stop
												offset="100%"
												stopColor={shape.color || "currentColor"}
												stopOpacity="0"
											/>
										</radialGradient>
									</defs>
									{/* Outer glow layer */}
									<circle
										cx="50"
										cy="50"
										r="42"
										fill={`url(#bubble-glow-${shape.id})`}
									/>
									{/* Main bubble circle with realistic gradient - multicolored */}
									<circle
										cx="50"
										cy="50"
										r="40"
										fill={`url(#bubble-gradient-${shape.id})`}
										stroke={shape.color || "currentColor"}
										strokeWidth="0.8"
										style={{
											opacity: shape.color ? 0.15 : undefined,
											color: shape.color || undefined,
										}}
										className={shape.color ? "" : "text-primary/15"}
									/>
									{/* Bottom shadow for depth */}
									<ellipse
										cx="50"
										cy="65"
										rx="25"
										ry="8"
										fill={`url(#bubble-shadow-${shape.id})`}
									/>
									{/* Primary highlight - main light reflection */}
									<ellipse
										cx="35"
										cy="30"
										rx="14"
										ry="14"
										fill={`url(#bubble-highlight-${shape.id})`}
									/>
									{/* Secondary highlight - smaller reflection */}
									<ellipse
										cx="60"
										cy="25"
										rx="8"
										ry="8"
										fill={`url(#bubble-highlight2-${shape.id})`}
									/>
									{/* Subtle border for definition */}
									<circle
										cx="50"
										cy="50"
										r="40"
										fill="none"
										stroke={shape.color || "currentColor"}
										strokeWidth="0.6"
										style={{
											opacity: shape.color ? 0.1 : undefined,
											color: shape.color || undefined,
										}}
										className={shape.color ? "" : "text-primary/10"}
									/>
								</svg>
							)}
							{shape.type === "triangle" && (
								<svg viewBox="0 0 100 100" className="w-full h-full">
									<polygon
										points="50,10 90,90 10,90"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-accent/20"
									/>
								</svg>
							)}
							{shape.type === "square" && (
								<svg viewBox="0 0 100 100" className="w-full h-full">
									<rect
										x="10"
										y="10"
										width="80"
										height="80"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-secondary/20"
									/>
								</svg>
							)}
							{shape.type === "hexagon" && (
								<svg viewBox="0 0 100 100" className="w-full h-full">
									<polygon
										points="50,10 85,30 85,70 50,90 15,70 15,30"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-primary/20"
									/>
								</svg>
							)}
							{shape.type === "cone" && (
								<svg viewBox="0 0 100 100" className="w-full h-full">
									{/* Base ellipse */}
									<ellipse
										cx="50"
										cy="80"
										rx="35"
										ry="8"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-accent/20"
									/>
									{/* Left side */}
									<line
										x1="15"
										y1="80"
										x2="50"
										y2="20"
										stroke="currentColor"
										strokeWidth="2"
										className="text-accent/20"
									/>
									{/* Right side */}
									<line
										x1="85"
										y1="80"
										x2="50"
										y2="20"
										stroke="currentColor"
										strokeWidth="2"
										className="text-accent/20"
									/>
								</svg>
							)}
							{shape.type === "cylinder" && (
								<svg viewBox="0 0 100 100" className="w-full h-full">
									{/* Top ellipse */}
									<ellipse
										cx="50"
										cy="25"
										rx="35"
										ry="8"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-secondary/20"
									/>
									{/* Left side */}
									<line
										x1="15"
										y1="25"
										x2="15"
										y2="75"
										stroke="currentColor"
										strokeWidth="2"
										className="text-secondary/20"
									/>
									{/* Right side */}
									<line
										x1="85"
										y1="25"
										x2="85"
										y2="75"
										stroke="currentColor"
										strokeWidth="2"
										className="text-secondary/20"
									/>
									{/* Bottom ellipse */}
									<ellipse
										cx="50"
										cy="75"
										rx="35"
										ry="8"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-secondary/20"
									/>
								</svg>
							)}
						</motion.div>
					);
				})}

				{/* Animated connecting lines between shapes */}
				{typeof window !== "undefined" &&
					shapes.slice(0, -1).map((shape, index) => {
						const nextShape = shapes[index + 1];
						const shape1X = (window.innerWidth * parseFloat(shape.x)) / 100;
						const shape1Y = (window.innerHeight * parseFloat(shape.y)) / 100;
						const shape2X = (window.innerWidth * parseFloat(nextShape.x)) / 100;
						const shape2Y =
							(window.innerHeight * parseFloat(nextShape.y)) / 100;

						return (
							<motion.svg
								key={`line-${shape.id}-${nextShape.id}`}
								className="absolute inset-0 w-full h-full pointer-events-none"
								style={{ zIndex: 1 }}
							>
								<motion.line
									x1={shape1X}
									y1={shape1Y}
									x2={shape2X}
									y2={shape2Y}
									stroke="currentColor"
									strokeWidth="1"
									className="text-primary/10"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: [0, 1, 0],
										opacity: [0, 0.2, 0],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut",
										delay: index * 0.6,
									}}
								/>
							</motion.svg>
						);
					})}

				{/* Multi-colored particle trail */}
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className={`absolute w-2 h-2 rounded-full ${particle.color} pointer-events-none`}
						style={{
							left: `${particle.x}px`,
							top: `${particle.y}px`,
							opacity: particle.opacity,
							transform: "translate(-50%, -50%)",
						}}
					/>
				))}

				{/* Floating bubbles that move away from cursor */}
				{bubbles.map((bubble) => (
					<motion.div
						key={bubble.id}
						className="absolute rounded-full border border-primary/20 pointer-events-none"
						style={{
							left: bubble.x,
							top: bubble.y,
							width: bubble.size,
							height: bubble.size,
							transform: "translate(-50%, -50%)",
						}}
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.1, 0.2, 0.1],
						}}
						transition={{
							duration: 3 + bubble.id * 0.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			<div className="relative px-8 md:px-16 lg:px-28 py-16 md:py-28 lg:py-36 z-10">
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
									fontFamily: "var(--font-playfair), serif",
									fontWeight: 700,
									transform: `translate(${headingTransform.x}px, ${headingTransform.y}px) scale(${headingTransform.scale})`,
									transition: "transform 0.3s ease-out",
								}}
								className="text-5xl md:text-4xl lg:text-5xl leading-tight text-[#2d5a8a]"
							>
								Krafting Growth Intelligently
							</motion.h1>
						</div>

						<p className="text-2xl md:text-2xl text-muted-foreground leading-relaxed w-full max-w-4xl">
							<AnimatedText
								text="At Kraftz, we provide end-to-end hospitality and travel solutions, all designed to elevate performance and accelerate growth. We Kraft precision strategies that empower property owners to maximize revenue and create exceptional experiences for travelers."
								delay={0.5}
								wordDelay={0.03}
								threshold={0}
								triggerOnce={true}
							/>
						</p>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.8 }}
				className="absolute bottom-2.5s md:bottom-8 left-1/2 transform -translate-x-1/2 mt-2 z-20"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className="flex flex-col items-center gap-2 cursor-pointer"
				>
					<span className="text-xs text-muted-foreground uppercase tracking-wider">
						Scroll
					</span>
					<motion.svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="text-muted-foreground"
					>
						<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
					</motion.svg>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default Hero;
