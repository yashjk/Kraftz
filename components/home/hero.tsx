"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";
import { useCursor } from "@/hooks/use-cursor";
import { useEffect, useState, useRef, useMemo } from "react";
import {
	TrendingUp,
	Network,
	Brain,
	Share2,
	Star,
	MapPin,
	Hotel,
	Luggage,
	Plane,
	BarChart3,
	Search,
	Megaphone,
	Users,
	Target,
	Zap,
	Globe,
	Briefcase,
	Camera,
	MessageSquare,
	Rocket,
	ChartLine,
	Database,
	Settings,
	Sparkles,
} from "lucide-react";

// Floating Shape Component
function FloatingShape({
	shape,
	index,
	relativeMousePos,
	cursorCurrent,
	sectionSize,
}: {
	shape: {
		id: string;
		type: string;
		Icon?: typeof TrendingUp;
		xPercent: number;
		yPercent: number;
		size: number;
		color: string;
	};
	index: number;
	relativeMousePos: { x: number; y: number };
	cursorCurrent: { x: number; y: number; strength: number };
	sectionSize: { width: number; height: number };
}) {
	// Base floating animation - continuous visible movement
	const floatDuration = 4 + (index % 3) * 2; // 4-8 seconds for more visible movement
	const floatX = Math.sin(index) * 30; // Increased amplitude for visibility
	const floatY = Math.cos(index * 1.3) * 30;

	// Calculate distance from cursor to shape
	const shapeX = (shape.xPercent / 100) * sectionSize.width;
	const shapeY = (shape.yPercent / 100) * sectionSize.height;
	const distance = Math.sqrt(
		Math.pow(relativeMousePos.x - shapeX, 2) +
			Math.pow(relativeMousePos.y - shapeY, 2)
	);

	// Water current effect from cursor movement - affects ALL shapes uniformly
	// Uniform strength for all shapes regardless of distance
	const uniformStrength = cursorCurrent.strength * 2.5;

	// Water current direction - flow in the direction of cursor movement (not perpendicular)
	const currentAngle = Math.atan2(cursorCurrent.y, cursorCurrent.x);

	const currentX = Math.cos(currentAngle) * uniformStrength * 70; // Uniform multiplier
	const currentY = Math.sin(currentAngle) * uniformStrength * 70;

	// Use motion values for reactive cursor effects
	const cursorOffsetX = useMotionValue(0);
	const cursorOffsetY = useMotionValue(0);
	const cursorRotate = useMotionValue(0);

	// More responsive springs for better cursor interaction
	const springX = useSpring(cursorOffsetX, { stiffness: 100, damping: 20 });
	const springY = useSpring(cursorOffsetY, { stiffness: 100, damping: 20 });
	const springRotate = useSpring(cursorRotate, { stiffness: 80, damping: 18 });

	// Update motion values when cursor current changes
	useEffect(() => {
		cursorOffsetX.set(currentX);
		cursorOffsetY.set(currentY);
		cursorRotate.set(uniformStrength * 8); // Uniform rotation for all shapes
	}, [
		currentX,
		currentY,
		uniformStrength,
		cursorOffsetX,
		cursorOffsetY,
		cursorRotate,
	]);

	// Extract Icon
	const Icon = shape.Icon;

	return (
		<motion.div
			className="absolute pointer-events-none"
			style={{
				left: `${shape.xPercent}%`,
				top: `${shape.yPercent}%`,
				width: shape.size,
				height: shape.size,
				transform: "translate(-50%, -50%)",
				zIndex: 1,
				x: springX,
				y: springY,
				rotate: springRotate,
			}}
			animate={{
				x: [floatX, floatX * 1.2, floatX * 0.8, floatX],
				y: [floatY, floatY * 1.2, floatY * 0.8, floatY],
				rotate: [0, 3, -3, 0],
			}}
			transition={{
				duration: floatDuration,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		>
			{Icon && (
				<Icon
					style={{ color: shape.color }}
					size={Math.round(shape.size * 0.5)}
				/>
			)}
		</motion.div>
	);
}

function Hero() {
	const { mousePosition } = useCursor();
	const sectionRef = useRef<HTMLElement>(null);
	const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });
	const [relativeMousePos, setRelativeMousePos] = useState({ x: 0, y: 0 });
	// Use refs instead of state to avoid infinite loops - these don't need to trigger re-renders
	const prevMousePosRef = useRef({ x: 0, y: 0 }); // Viewport coordinates for velocity
	const prevRelativePosRef = useRef({ x: 0, y: 0 }); // Relative coordinates for water current
	const [ripples, setRipples] = useState<
		Array<{
			id: string;
			x: number;
			y: number;
			radius: number;
			opacity: number;
			timestamp: number;
		}>
	>([]);
	const [cursorCurrent, setCursorCurrent] = useState({
		x: 0,
		y: 0,
		strength: 0,
	});
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

	// Store mouse position in a ref to avoid triggering effects on every mouse move
	const mousePosRef = useRef({ x: 0, y: 0 });

	// Update mouse position ref when it changes (without triggering re-renders)
	useEffect(() => {
		mousePosRef.current = { x: mousePosition.x, y: mousePosition.y };
	}, [mousePosition]);

	// Update relative mouse position and create ripples
	useEffect(() => {
		if (!sectionRef.current) return;

		let rafId: number | null = null;
		let lastUpdateTime = 0;
		const throttleMs = 16; // ~60fps for state updates

		const updateMousePos = (timestamp: number) => {
			if (sectionRef.current) {
				const currentMousePos = mousePosRef.current;
				const rect = sectionRef.current.getBoundingClientRect();
				const newPos = {
					x: currentMousePos.x - rect.left,
					y: currentMousePos.y - rect.top,
				};

				// Calculate cursor velocity (using viewport coordinates)
				const velocity = Math.sqrt(
					Math.pow(currentMousePos.x - prevMousePosRef.current.x, 2) +
						Math.pow(currentMousePos.y - prevMousePosRef.current.y, 2)
				);

				// Create ripple if cursor moved significantly and is within section bounds
				if (
					velocity > 5 &&
					currentMousePos.x >= rect.left &&
					currentMousePos.x <= rect.right &&
					currentMousePos.y >= rect.top &&
					currentMousePos.y <= rect.bottom
				) {
					setRipples((prev) => [
						...prev,
						{
							id: `ripple-${Date.now()}-${Math.random()}`,
							x: currentMousePos.x, // Use viewport coordinates for fixed positioning
							y: currentMousePos.y,
							radius: 0,
							opacity: 0.5,
							timestamp: Date.now(),
						},
					]);
				}

				// Calculate cursor velocity for water current (using relative positions for shapes)
				const cursorDx = newPos.x - prevRelativePosRef.current.x;
				const cursorDy = newPos.y - prevRelativePosRef.current.y;
				const cursorVelocity = Math.sqrt(
					cursorDx * cursorDx + cursorDy * cursorDy
				);

				// Throttle state updates to prevent excessive re-renders
				if (timestamp - lastUpdateTime >= throttleMs) {
					// Update cursor current state - make it more sensitive
					setCursorCurrent({
						x: cursorDx,
						y: cursorDy,
						strength: Math.min(cursorVelocity / 5, 2.5), // Increased sensitivity and max strength
					});

					// Update relative mouse position (throttled)
					setRelativeMousePos(newPos);
					lastUpdateTime = timestamp;
				}

				// Update refs (don't trigger re-renders) - always update these
				prevMousePosRef.current = {
					x: currentMousePos.x,
					y: currentMousePos.y,
				};
				prevRelativePosRef.current = newPos;
			}

			// Continue the animation loop
			rafId = requestAnimationFrame(updateMousePos);
		};

		// Start the animation loop
		rafId = requestAnimationFrame(updateMousePos);

		return () => {
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
		};
	}, []); // Empty dependency array - run once and use refs for mouse position

	// Update ripple animations
	useEffect(() => {
		const updateRipples = () => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			const maxRadius = Math.max(rect.width, rect.height) * 1.5;

			setRipples((prev) =>
				prev
					.map((ripple) => ({
						...ripple,
						radius: ripple.radius + 2,
						opacity: ripple.opacity - 0.02,
					}))
					.filter(
						(ripple) =>
							ripple.opacity > 0 &&
							ripple.radius < maxRadius &&
							// Keep ripples that are still within reasonable bounds
							ripple.x > rect.left - maxRadius &&
							ripple.x < rect.right + maxRadius &&
							ripple.y > rect.top - maxRadius &&
							ripple.y < rect.bottom + maxRadius
					)
			);
		};

		const interval = setInterval(updateRipples, 16); // ~60fps
		return () => clearInterval(interval);
	}, [sectionRef]);

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

	// Static shapes that react to cursor - only service-based icons
	const staticShapes = useMemo(() => {
		if (sectionSize.width === 0 || sectionSize.height === 0) return [];

		// Vibrant color palette for icons
		const iconColors = [
			"#0249A7", // Primary blue
			"#4ECDC4", // Teal
			"#FF6B6B", // Coral red
			"#FFE66D", // Yellow
			"#95E1D3", // Mint green
			"#F38181", // Pink coral
			"#AA96DA", // Purple
			"#FCBAD3", // Light pink
			"#FFA07A", // Light salmon
			"#20B2AA", // Light sea green
			"#FFD700", // Gold
			"#87CEEB", // Sky blue
			"#DDA0DD", // Plum
			"#98D8C8", // Turquoise
			"#F7DC6F", // Light yellow
			"#BB8FCE", // Lavender
		];

		// Service-based icons representing our services
		const serviceIcons = [
			// Core services (more frequent)
			TrendingUp, // Revenue Management
			Network, // Distribution Management
			Brain, // Business Intelligence
			Share2, // Digital Marketing
			Star, // Reputation Management
			MapPin, // Travel Experiences
			// Supporting icons
			Hotel,
			BarChart3, // Analytics
			Search, // SEO
			Megaphone, // Marketing
			Users, // Customer Management
			Target, // Strategy
			Zap, // Performance
			Globe, // Global Reach
			Briefcase, // Business Solutions
			Camera, // Content Creation
			MessageSquare, // Communication
			Rocket, // Growth
			ChartLine, // Data Analytics
			Database, // Data Solutions
			Settings, // Technology Integration
			Sparkles, // Brand Experience
			Plane, // Travel
			Luggage, // Travel Services
		];

		// Increase icon count for more prominent display
		const shapeCount = 60; // Increased from 35 to show more service icons
		const shapesArray = [];

		// Create a grid-based distribution system for even spacing
		const gridCols = Math.ceil(Math.sqrt(shapeCount));
		const gridRows = Math.ceil(shapeCount / gridCols);
		const cellWidth = 100 / gridCols;
		const cellHeight = 100 / gridRows;

		// Shuffle icons array to randomize which icons appear where
		const shuffledIcons = [...serviceIcons].sort(() => Math.random() - 0.5);
		// Shuffle colors array
		const shuffledColors = [...iconColors].sort(() => Math.random() - 0.5);

		// Create array of positions and shuffle them
		const positions: Array<{ x: number; y: number }> = [];
		for (let row = 0; row < gridRows; row++) {
			for (let col = 0; col < gridCols; col++) {
				if (positions.length < shapeCount) {
					// Add some randomness within each cell for natural look
					const baseX = col * cellWidth + cellWidth / 2;
					const baseY = row * cellHeight + cellHeight / 2;
					const jitterX = (Math.random() - 0.5) * cellWidth * 0.4; // 40% jitter
					const jitterY = (Math.random() - 0.5) * cellHeight * 0.4;
					positions.push({
						x: Math.max(5, Math.min(95, baseX + jitterX)),
						y: Math.max(5, Math.min(95, baseY + jitterY)),
					});
				}
			}
		}
		// Shuffle positions to avoid patterns
		positions.sort(() => Math.random() - 0.5);

		// Create only icon-based shapes with colors
		for (let i = 0; i < shapeCount; i++) {
			const position = positions[i];
			const xPercent = position.x;
			const yPercent = position.y;
			const size = 40 + Math.random() * 40; // 40-80px

			const Icon = shuffledIcons[i % shuffledIcons.length];
			// Assign a color with varying opacity for visual depth
			const baseColor = shuffledColors[i % shuffledColors.length];
			const opacity = 0.5 + Math.random() * 0.3; // Opacity between 0.5 and 0.8

			// Convert hex to rgba
			const hex = baseColor.replace("#", "");
			// Handle both 3-digit and 6-digit hex codes
			const r =
				hex.length === 3
					? parseInt(hex[0] + hex[0], 16)
					: parseInt(hex.substring(0, 2), 16);
			const g =
				hex.length === 3
					? parseInt(hex[1] + hex[1], 16)
					: parseInt(hex.substring(2, 4), 16);
			const b =
				hex.length === 3
					? parseInt(hex[2] + hex[2], 16)
					: parseInt(hex.substring(4, 6), 16);
			const color = `rgba(${r}, ${g}, ${b}, ${opacity})`;

			shapesArray.push({
				id: `shape-${i}`,
				type: "icon",
				Icon,
				xPercent,
				yPercent,
				size,
				color,
			});
		}

		return shapesArray;
	}, [sectionSize.width, sectionSize.height]);

	// Service icons for cursor shapes
	const serviceIconsForCursor = [
		TrendingUp,
		Network,
		Brain,
		Share2,
		Star,
		MapPin,
		Hotel,
		BarChart3,
		Search,
		Megaphone,
		Users,
		Target,
		Zap,
		Globe,
		Briefcase,
		Camera,
		MessageSquare,
		Rocket,
		ChartLine,
		Database,
		Settings,
		Sparkles,
		Plane,
		Luggage,
	];

	// Vibrant color palette for cursor shapes
	const cursorShapeColors = [
		"#0249A7", // Primary blue
		"#4ECDC4", // Teal
		"#FF6B6B", // Coral red
		"#FFE66D", // Yellow
		"#95E1D3", // Mint green
		"#F38181", // Pink coral
		"#AA96DA", // Purple
		"#FCBAD3", // Light pink
		"#FFA07A", // Light salmon
		"#20B2AA", // Light sea green
		"#FFD700", // Gold
		"#87CEEB", // Sky blue
		"#DDA0DD", // Plum
		"#98D8C8", // Turquoise
		"#F7DC6F", // Light yellow
		"#BB8FCE", // Lavender
	];

	// Cursor shapes that spawn from cursor and grow
	const [cursorShapes, setCursorShapes] = useState<
		Array<{
			id: string;
			x: number;
			y: number;
			size: number;
			opacity: number;
			Icon: typeof TrendingUp;
			color: string;
		}>
	>([]);

	// Track last spawn time to throttle shape creation
	const lastSpawnTimeRef = useRef<number>(0);

	// Create shapes that spawn from cursor
	useEffect(() => {
		if (!sectionRef.current || mousePosition.x === 0 || mousePosition.y === 0)
			return;

		// Check if cursor is within the hero section bounds
		const rect = sectionRef.current.getBoundingClientRect();
		if (
			mousePosition.x < rect.left ||
			mousePosition.x > rect.right ||
			mousePosition.y < rect.top ||
			mousePosition.y > rect.bottom
		)
			return;

		// Throttle shape creation - spawn at most once every 200ms
		const now = Date.now();
		const timeSinceLastSpawn = now - lastSpawnTimeRef.current;
		if (timeSinceLastSpawn < 200) return;

		// Increased spawn chance - 20% chance when throttled
		const shouldCreateShape = Math.random() > 0.8; // 20% chance
		if (!shouldCreateShape) return;

		lastSpawnTimeRef.current = now;

		// Select random icon and color
		const Icon =
			serviceIconsForCursor[
				Math.floor(Math.random() * serviceIconsForCursor.length)
			];
		const baseColor =
			cursorShapeColors[Math.floor(Math.random() * cursorShapeColors.length)];

		// Convert hex to rgba with opacity
		const hex = baseColor.replace("#", "");
		const r =
			hex.length === 3
				? parseInt(hex[0] + hex[0], 16)
				: parseInt(hex.substring(0, 2), 16);
		const g =
			hex.length === 3
				? parseInt(hex[1] + hex[1], 16)
				: parseInt(hex.substring(2, 4), 16);
		const b =
			hex.length === 3
				? parseInt(hex[2] + hex[2], 16)
				: parseInt(hex.substring(4, 6), 16);
		const opacity = 0.85 + Math.random() * 0.15; // Opacity between 0.85 and 1.0
		const color = `rgba(${r}, ${g}, ${b}, ${opacity})`;

		const newShape = {
			id: `cursor-shape-${Date.now()}-${Math.random()}`,
			x: mousePosition.x, // Use viewport coordinates for fixed positioning
			y: mousePosition.y,
			size: 5, // Start small
			opacity: 1,
			Icon,
			color,
		};

		setCursorShapes((prev) => {
			const updated = [newShape, ...prev];
			// Keep only last 25 shapes
			return updated.slice(0, 25);
		});
	}, [mousePosition, sectionRef]);

	// Update cursor shapes - grow them and fade them out
	useEffect(() => {
		const updateCursorShapes = () => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			const maxSize = 50; // Maximum size

			setCursorShapes((prev) =>
				prev
					.map((shape) => ({
						...shape,
						size: Math.min(shape.size + 1.5, maxSize), // Grow to 50px
						opacity:
							shape.size < maxSize
								? 1 - (shape.size / maxSize) * 0.3 // Fade less as it grows (from 1.0 to 0.7)
								: shape.opacity - 0.015, // Slower fade after max size
					}))
					.filter(
						(shape) =>
							shape.opacity > 0 &&
							shape.size > 0 &&
							shape.x > rect.left - 200 &&
							shape.x < rect.right + 200 &&
							shape.y > rect.top - 200 &&
							shape.y < rect.bottom + 200
					)
			);
		};

		const interval = setInterval(updateCursorShapes, 16); // ~60fps
		return () => clearInterval(interval);
	}, [sectionRef]);

	// Use CSS mask/clip-path approach for better performance
	// Create a circular mask that brightens lines within 40px radius

	return (
		<section ref={sectionRef} className="relative overflow-hidden bg-white">
			{/* Fixed animation layer */}
			<div
				className="fixed inset-0 overflow-hidden pointer-events-none"
				style={{ zIndex: 0 }}
			>
				{/* Shapes floating in water, affected by cursor movement */}
				{staticShapes.map((shape, index) => (
					<FloatingShape
						key={shape.id}
						shape={shape}
						index={index}
						relativeMousePos={relativeMousePos}
						cursorCurrent={cursorCurrent}
						sectionSize={sectionSize}
					/>
				))}

				{/* Cursor shapes that spawn and grow from cursor */}
				{cursorShapes.map((shape) => {
					const Icon = shape.Icon;
					return (
						<motion.div
							key={shape.id}
							className="absolute pointer-events-none"
							style={{
								left: shape.x,
								top: shape.y,
								width: shape.size,
								height: shape.size,
								transform: "translate(-50%, -50%)",
								opacity: shape.opacity,
								zIndex: 2,
							}}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.2 }}
						>
							<Icon
								style={{ color: shape.color }}
								size={Math.round(shape.size * 0.6)}
							/>
						</motion.div>
					);
				})}

				{/* Ripple effects */}
				{ripples.map((ripple) => (
					<motion.div
						key={ripple.id}
						className="absolute pointer-events-none"
						style={{
							left: ripple.x,
							top: ripple.y,
							width: ripple.radius * 2,
							height: ripple.radius * 2,
							transform: "translate(-50%, -50%)",
							border: `1px solid rgba(2, 73, 167, ${ripple.opacity * 0.25})`,
							borderRadius: "50%",
							zIndex: 0,
						}}
					/>
				))}

				{/* Cursor glow effect */}
				<motion.div
					className="absolute pointer-events-none"
					style={{
						left: mousePosRef.current.x,
						top: mousePosRef.current.y,
						width: 100,
						height: 100,
						transform: "translate(-50%, -50%)",
						background:
							"radial-gradient(circle, rgba(2, 73, 167, 0.15) 0%, rgba(2, 73, 167, 0.1) 30%, rgba(2, 73, 167, 0.05) 50%, transparent 70%)",
						borderRadius: "50%",
						filter: "blur(20px)",
						zIndex: 0,
						willChange: "transform",
					}}
					animate={{
						left: mousePosition.x,
						top: mousePosition.y,
						opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
					}}
					transition={{
						duration: 0.05,
						ease: "linear",
					}}
				/>
			</div>

			<div className="relative px-8 md:px-16 lg:px-28 py-16 md:py-12 lg:py-20 z-10 pointer-events-none">
				<div className="w-full mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
						className="flex flex-col gap-6 items-center text-center w-full"
						style={{ pointerEvents: "auto" }}
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
										"2px 2px 8px rgba(0, 0, 0, 0.15), 1px 1px 4px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.08), 0 0 40px rgba(2, 73, 167, 0.1)",
								}}
								className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
							>
								<span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-[#0249A7]">
									Krafting Growth Intelligently
								</span>
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.8 }}
								className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80 max-w-3xl mx-auto mt-6"
								style={{
									textShadow:
										"1px 1px 4px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.05)",
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
