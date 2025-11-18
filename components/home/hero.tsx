"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeInUp, AnimatedText } from "@/lib/animations";
import { useCursor } from "@/hooks/use-cursor";
import { useEffect, useState, useRef, useMemo } from "react";
import {
	Car,
	Bed,
	Droplet,
	Plane,
	UtensilsCrossed,
	MapPin,
	Hotel,
	Luggage,
	Building2,
	ConciergeBell,
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
		Icon?: typeof Car;
		shapeType?: string;
		xPercent: number;
		yPercent: number;
		size: number;
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

	// Water current effect from cursor movement - affects ALL shapes
	// Make it work even when cursor is far away, just weaker
	const maxDistance = 800; // Larger range so all shapes are affected
	const distanceFactor = Math.max(0.2, 1 - distance / maxDistance); // Minimum 0.2 so always some effect
	const currentStrength = distanceFactor * cursorCurrent.strength * 1.5; // Increased multiplier

	// Water current direction - flow in the direction of cursor movement (not perpendicular)
	const currentAngle = Math.atan2(cursorCurrent.y, cursorCurrent.x);
	const currentX = Math.cos(currentAngle) * currentStrength * 40; // Increased multiplier
	const currentY = Math.sin(currentAngle) * currentStrength * 40;

	// Use motion values for reactive cursor effects
	const cursorOffsetX = useMotionValue(0);
	const cursorOffsetY = useMotionValue(0);
	const cursorRotate = useMotionValue(0);

	const springX = useSpring(cursorOffsetX, { stiffness: 60, damping: 25 });
	const springY = useSpring(cursorOffsetY, { stiffness: 60, damping: 25 });
	const springRotate = useSpring(cursorRotate, { stiffness: 60, damping: 25 });

	// Update motion values when cursor current changes
	useEffect(() => {
		cursorOffsetX.set(currentX);
		cursorOffsetY.set(currentY);
		cursorRotate.set(currentStrength * 5); // Increased rotation
	}, [
		currentX,
		currentY,
		currentStrength,
		cursorOffsetX,
		cursorOffsetY,
		cursorRotate,
	]);

	// Extract Icon if it's an icon type
	const Icon = shape.type === "icon" ? shape.Icon : null;

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
			{shape.type === "icon" && Icon ? (
				<Icon className="text-primary/30" size={Math.round(shape.size * 0.5)} />
			) : shape.type === "geometric" && shape.shapeType ? (
				<GeometricShape type={shape.shapeType} size={shape.size} />
			) : null}
		</motion.div>
	);
}

// Geometric Shape Component
function GeometricShape({ type, size }: { type: string; size: number }) {
	const baseStyle = {
		width: size,
		height: size,
		border: `2px solid #0249A7`,
		opacity: 0.08,
	};

	switch (type) {
		case "circle":
			return (
				<div
					style={{
						...baseStyle,
						borderRadius: "50%",
					}}
				/>
			);
		case "square":
			return (
				<div
					style={{
						...baseStyle,
						borderRadius: "4px",
					}}
				/>
			);
		case "triangle":
			return (
				<svg
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
					style={{ opacity: 0.08 }}
				>
					<polygon
						points={`
						${size / 2},${size * 0.1}
						${size * 0.1},${size * 0.9}
						${size * 0.9},${size * 0.9}
					`}
						fill="none"
						stroke="#0249A7"
						strokeWidth="2"
					/>
				</svg>
			);
		case "hexagon":
			const hexSize = size / 2;
			return (
				<svg
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
					style={{ opacity: 0.08 }}
				>
					<polygon
						points={`
						${size / 2},${size * 0.1}
						${size * 0.9},${size * 0.3}
						${size * 0.9},${size * 0.7}
						${size / 2},${size * 0.9}
						${size * 0.1},${size * 0.7}
						${size * 0.1},${size * 0.3}
					`}
						fill="none"
						stroke="#0249A7"
						strokeWidth="2"
					/>
				</svg>
			);
		case "diamond":
			return (
				<div
					style={{
						width: size,
						height: size,
						border: `2px solid #0249A7`,
						opacity: 0.08,
						transform: "rotate(45deg)",
						borderRadius: "4px",
					}}
				/>
			);
		case "cylinder":
			return (
				<svg
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
					style={{ opacity: 0.08 }}
				>
					{/* Top ellipse */}
					<ellipse
						cx={size / 2}
						cy={size * 0.2}
						rx={size * 0.3}
						ry={size * 0.1}
						fill="none"
						stroke="#0249A7"
						strokeWidth="2"
					/>
					{/* Side lines */}
					<line
						x1={size * 0.2}
						y1={size * 0.2}
						x2={size * 0.2}
						y2={size * 0.8}
						stroke="#0249A7"
						strokeWidth="2"
					/>
					<line
						x1={size * 0.8}
						y1={size * 0.2}
						x2={size * 0.8}
						y2={size * 0.8}
						stroke="#0249A7"
						strokeWidth="2"
					/>
					{/* Bottom ellipse */}
					<ellipse
						cx={size / 2}
						cy={size * 0.8}
						rx={size * 0.3}
						ry={size * 0.1}
						fill="none"
						stroke="#0249A7"
						strokeWidth="2"
					/>
				</svg>
			);
		default:
			return (
				<div
					style={{
						...baseStyle,
						borderRadius: "50%",
					}}
				/>
			);
	}
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
							opacity: 0.6,
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
						strength: Math.min(cursorVelocity / 8, 1.5), // Increased sensitivity and max strength
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

	// Static shapes that react to cursor
	const staticShapes = useMemo(() => {
		if (sectionSize.width === 0 || sectionSize.height === 0) return [];

		const icons = [
			Car,
			Bed,
			Droplet,
			Plane,
			UtensilsCrossed,
			MapPin,
			Hotel,
			Hotel, // Add Hotel twice for more frequency
			Luggage,
			Building2,
			ConciergeBell,
		];
		const geometricShapes = [
			"circle",
			"square",
			"triangle",
			"hexagon",
			"diamond",
			"cylinder",
		];
		const shapeCount = 35; // Mix of icons and geometric shapes - increased for more shapes
		const shapesArray = [];

		for (let i = 0; i < shapeCount; i++) {
			const isGeometric = i % 2 === 0; // Alternate between geometric and icons
			const xPercent = Math.random() * 100;
			const yPercent = Math.random() * 100;
			const size = 40 + Math.random() * 40; // 40-80px

			if (isGeometric) {
				const shapeType = geometricShapes[i % geometricShapes.length];
				shapesArray.push({
					id: `shape-${i}`,
					type: "geometric",
					shapeType,
					xPercent,
					yPercent,
					size,
				});
			} else {
				const Icon = icons[i % icons.length];
				shapesArray.push({
					id: `shape-${i}`,
					type: "icon",
					Icon,
					xPercent,
					yPercent,
					size,
				});
			}
		}

		return shapesArray;
	}, [sectionSize.width, sectionSize.height]);

	// Colorful particles that trail the cursor
	const [particles, setParticles] = useState<
		Array<{
			id: string;
			x: number;
			y: number;
			vx: number;
			vy: number;
			color: string;
			opacity: number;
		}>
	>([]);

	const colors = [
		"#0249A7", // primary blue
		"#FF6B6B", // red
		"#4ECDC4", // teal
		"#FFE66D", // yellow
		"#95E1D3", // mint
		"#F38181", // coral
		"#AA96DA", // purple
		"#FCBAD3", // pink
	];

	// Create particles that trail the cursor
	// Use mousePosition directly since particles are in a fixed viewport div
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

		// Add a new particle at cursor position (viewport coordinates for fixed div)
		const angle = Math.random() * Math.PI * 2;
		const speed = 0.5 + Math.random() * 1.5; // 0.5 to 2 px per frame

		const newParticle = {
			id: `particle-${Date.now()}-${Math.random()}`,
			x: mousePosition.x, // Use viewport coordinates for fixed positioning
			y: mousePosition.y,
			vx: Math.cos(angle) * speed,
			vy: Math.sin(angle) * speed,
			color: colors[Math.floor(Math.random() * colors.length)],
			opacity: 1,
		};

		setParticles((prev) => {
			const updated = [newParticle, ...prev];
			// Keep only last 100 particles for performance
			return updated.slice(0, 100);
		});
	}, [mousePosition, sectionRef]);

	// Update particle positions and fade them out
	useEffect(() => {
		const updateParticles = () => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();

			setParticles((prev) =>
				prev
					.map((particle) => ({
						...particle,
						x: particle.x + particle.vx,
						y: particle.y + particle.vy,
						opacity: particle.opacity - 0.015, // Fade out gradually
						vx: particle.vx * 0.98, // Slight friction
						vy: particle.vy * 0.98,
					}))
					.filter(
						(particle) =>
							particle.opacity > 0 &&
							particle.x > rect.left - 100 &&
							particle.x < rect.right + 100 &&
							particle.y > rect.top - 100 &&
							particle.y < rect.bottom + 100
					)
			);
		};

		const interval = setInterval(updateParticles, 16); // ~60fps
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

				{/* Colorful particles trailing cursor */}
				{particles.map((particle) => {
					return (
						<motion.div
							key={particle.id}
							className="absolute pointer-events-none rounded-full"
							style={{
								left: particle.x,
								top: particle.y,
								width: 5,
								height: 5,
								transform: "translate(-50%, -50%)",
								backgroundColor: particle.color,
								opacity: particle.opacity,
								zIndex: 2,
							}}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.1 }}
						/>
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
							border: `1px solid rgba(2, 73, 167, ${ripple.opacity * 0.15})`,
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
