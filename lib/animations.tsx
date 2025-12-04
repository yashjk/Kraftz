"use client";

import { motion, Transition } from "framer-motion";
import { ReactNode, useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Animation variants with reverse support
export const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
};

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

export const slideInLeft = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -50 },
};

export const slideInRight = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 50 },
};

export const scaleIn = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.8 },
};

// Animation transition defaults
export const defaultTransition: Transition = {
	duration: 0.4,
	ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const fastTransition: Transition = {
	duration: 0.2,
	ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const slowTransition: Transition = {
	duration: 0.5,
	ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// Helper function to calculate delay based on position (top-left to bottom-right)
export function calculatePositionDelay(
	elementRef: React.RefObject<HTMLElement | null>,
	baseDelay: number = 0
): number {
	if (!elementRef.current) return baseDelay;

	const rect = elementRef.current.getBoundingClientRect();
	const viewportHeight = window.innerHeight;
	const viewportWidth = window.innerWidth;

	// Normalize position (0 = top-left, 1 = bottom-right)
	const yPosition = rect.top / viewportHeight;
	const xPosition = rect.left / viewportWidth;

	// Calculate delay: top-left = lower delay, bottom-right = higher delay
	const positionDelay = yPosition * 0.3 + xPosition * 0.2;

	return baseDelay + positionDelay;
}

// Enhanced FadeInUp with 80% threshold
export function FadeInUp({
	children,
	delay = 0,
	className = "",
	triggerOnce = false,
	usePositionDelay = true,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	triggerOnce?: boolean;
	usePositionDelay?: boolean;
}) {
	const [ref, inView] = useInView({
		triggerOnce,
		rootMargin: "0px 0px -25% 0px", // Trigger when element reaches 75% of viewport height
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={fadeInUp}
			transition={defaultTransition}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function FadeIn({
	children,
	delay = 0,
	className = "",
	triggerOnce = false,
	usePositionDelay = true,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	triggerOnce?: boolean;
	usePositionDelay?: boolean;
}) {
	const [ref, inView] = useInView({
		triggerOnce,
		rootMargin: "0px 0px -25% 0px", // Trigger when element reaches 75% of viewport height
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={fadeIn}
			transition={defaultTransition}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function SlideInLeft({
	children,
	delay = 0,
	className = "",
	triggerOnce = false,
	usePositionDelay = true,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	triggerOnce?: boolean;
	usePositionDelay?: boolean;
}) {
	const [ref, inView] = useInView({
		triggerOnce,
		rootMargin: "0px 0px -25% 0px", // Trigger when element reaches 75% of viewport height
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={slideInLeft}
			transition={defaultTransition}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function SlideInRight({
	children,
	delay = 0,
	className = "",
	triggerOnce = false,
	usePositionDelay = true,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	triggerOnce?: boolean;
	usePositionDelay?: boolean;
}) {
	const [ref, inView] = useInView({
		triggerOnce,
		rootMargin: "0px 0px -25% 0px", // Trigger when element reaches 75% of viewport height
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={slideInRight}
			transition={defaultTransition}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function ScaleIn({
	children,
	delay = 0,
	className = "",
	triggerOnce = false,
	usePositionDelay = true,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	triggerOnce?: boolean;
	usePositionDelay?: boolean;
}) {
	const [ref, inView] = useInView({
		triggerOnce,
		rootMargin: "0px 0px -25% 0px", // Trigger when element reaches 75% of viewport height
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={scaleIn}
			transition={defaultTransition}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerContainer({
	children,
	className = "",
	triggerOnce = false,
}: {
	children: ReactNode;
	className?: string;
	triggerOnce?: boolean;
}) {
	const [ref, inView] = useInView({
		triggerOnce,
		rootMargin: "0px 0px -25% 0px", // Trigger when element reaches 75% of viewport height
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={containerVariants}
			className={className}
		>
			{children}
		</motion.div>
	);
}

// Simplified AnimatedText - displays text immediately without animation
export function AnimatedText({
	text,
	className = "",
	delay = 0,
	wordDelay = 0.03,
	threshold = 0.25,
	triggerOnce = false,
}: {
	text: string;
	className?: string;
	delay?: number;
	wordDelay?: number;
	threshold?: number;
	triggerOnce?: boolean;
}) {
	// Normalize text - handle both actual newlines and literal \n characters
	let normalizedText = text;
	normalizedText = normalizedText.replace(/\\n\\n/g, "\n\n");
	normalizedText = normalizedText.replace(/\\n/g, "\n");
	normalizedText = normalizedText.replace(/\s*\n\n\s*/g, "\n\n");

	return <span className={className}>{normalizedText}</span>;
}
