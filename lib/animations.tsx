"use client";

import { motion } from "framer-motion";
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
export const defaultTransition = {
	duration: 0.6,
	ease: [0.4, 0, 0.2, 1],
};

export const fastTransition = {
	duration: 0.3,
	ease: [0.4, 0, 0.2, 1],
};

export const slowTransition = {
	duration: 0.8,
	ease: [0.4, 0, 0.2, 1],
};

// Helper function to calculate delay based on position (top-left to bottom-right)
export function calculatePositionDelay(
	elementRef: React.RefObject<HTMLElement>,
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
	const elementRef = useRef<HTMLDivElement>(null);
	const [calculatedDelay, setCalculatedDelay] = useState(delay);

	const [ref, inView] = useInView({
		triggerOnce,
		threshold: 0.25, // 25% viewport threshold
	});

	useEffect(() => {
		if (usePositionDelay && elementRef.current) {
			const posDelay = calculatePositionDelay(elementRef, delay);
			setCalculatedDelay(posDelay);
		} else {
			setCalculatedDelay(delay);
		}
	}, [delay, usePositionDelay]);

	return (
		<motion.div
			ref={(node) => {
				ref(node);
				if (node) {
					(
						elementRef as React.MutableRefObject<HTMLDivElement | null>
					).current = node;
				}
			}}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={fadeInUp}
			transition={{ ...defaultTransition, delay: calculatedDelay }}
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
	const elementRef = useRef<HTMLDivElement>(null);
	const [calculatedDelay, setCalculatedDelay] = useState(delay);

	const [ref, inView] = useInView({
		triggerOnce,
		threshold: 0.25,
	});

	useEffect(() => {
		if (usePositionDelay && elementRef.current) {
			const posDelay = calculatePositionDelay(elementRef, delay);
			setCalculatedDelay(posDelay);
		} else {
			setCalculatedDelay(delay);
		}
	}, [delay, usePositionDelay]);

	return (
		<motion.div
			ref={(node) => {
				ref(node);
				if (node) {
					(
						elementRef as React.MutableRefObject<HTMLDivElement | null>
					).current = node;
				}
			}}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={fadeIn}
			transition={{ ...defaultTransition, delay: calculatedDelay }}
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
	const elementRef = useRef<HTMLDivElement>(null);
	const [calculatedDelay, setCalculatedDelay] = useState(delay);

	const [ref, inView] = useInView({
		triggerOnce,
		threshold: 0.25,
	});

	useEffect(() => {
		if (usePositionDelay && elementRef.current) {
			const posDelay = calculatePositionDelay(elementRef, delay);
			setCalculatedDelay(posDelay);
		} else {
			setCalculatedDelay(delay);
		}
	}, [delay, usePositionDelay]);

	return (
		<motion.div
			ref={(node) => {
				ref(node);
				if (node) {
					(
						elementRef as React.MutableRefObject<HTMLDivElement | null>
					).current = node;
				}
			}}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={slideInLeft}
			transition={{ ...defaultTransition, delay: calculatedDelay }}
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
	const elementRef = useRef<HTMLDivElement>(null);
	const [calculatedDelay, setCalculatedDelay] = useState(delay);

	const [ref, inView] = useInView({
		triggerOnce,
		threshold: 0.25,
	});

	useEffect(() => {
		if (usePositionDelay && elementRef.current) {
			const posDelay = calculatePositionDelay(elementRef, delay);
			setCalculatedDelay(posDelay);
		} else {
			setCalculatedDelay(delay);
		}
	}, [delay, usePositionDelay]);

	return (
		<motion.div
			ref={(node) => {
				ref(node);
				if (node) {
					(
						elementRef as React.MutableRefObject<HTMLDivElement | null>
					).current = node;
				}
			}}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={slideInRight}
			transition={{ ...defaultTransition, delay: calculatedDelay }}
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
	const elementRef = useRef<HTMLDivElement>(null);
	const [calculatedDelay, setCalculatedDelay] = useState(delay);

	const [ref, inView] = useInView({
		triggerOnce,
		threshold: 0.25,
	});

	useEffect(() => {
		if (usePositionDelay && elementRef.current) {
			const posDelay = calculatePositionDelay(elementRef, delay);
			setCalculatedDelay(posDelay);
		} else {
			setCalculatedDelay(delay);
		}
	}, [delay, usePositionDelay]);

	return (
		<motion.div
			ref={(node) => {
				ref(node);
				if (node) {
					(
						elementRef as React.MutableRefObject<HTMLDivElement | null>
					).current = node;
				}
			}}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={scaleIn}
			transition={{ ...defaultTransition, delay: calculatedDelay }}
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
		threshold: 0.25,
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

// Enhanced AnimatedText with line-by-line sequential animation
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
	const [ref, inView] = useInView({
		triggerOnce,
		threshold,
	});

	// Split text into paragraphs (by \n\n), then each paragraph into lines (by \n)
	// For paragraphs without explicit breaks, we'll treat the whole text as one paragraph
	// First, normalize the text - handle both actual newlines and literal \n characters
	// In JavaScript strings, \n is already a newline, but if it's written as literal characters, we need to convert them
	let normalizedText = text;
	// Replace literal backslash-n sequences (the actual characters \ and n) with actual newlines
	// This handles cases where \n\n appears as literal text in the string
	// In a regex, \\ matches a literal backslash, so \\n matches \n (backslash followed by n)
	// First, replace any literal \n\n sequences (backslash-n-backslash-n) with actual newline pairs
	normalizedText = normalizedText.replace(/\\n\\n/g, "\n\n");
	// Then replace any remaining literal \n (backslash-n) with actual newlines
	normalizedText = normalizedText.replace(/\\n/g, "\n");
	// Clean up any extra whitespace around paragraph breaks (spaces before/after \n\n)
	normalizedText = normalizedText.replace(/\s*\n\n\s*/g, "\n\n");
	// Now split by actual newline pairs for paragraphs
	const hasParagraphBreaks = normalizedText.includes("\n\n");
	const paragraphs = hasParagraphBreaks
		? normalizedText
				.split("\n\n")
				.map((para) => para.trim())
				.filter((para) => para.length > 0)
		: [normalizedText.trim()];

	// Process each paragraph: split into lines, then lines into words
	const paragraphLines = paragraphs.map((paragraph) => {
		const hasLineBreaks = paragraph.includes("\n");
		return hasLineBreaks
			? paragraph.split("\n").filter((line) => line.trim().length > 0)
			: [paragraph];
	});

	const paragraphLineWords = paragraphLines.map((lines) =>
		lines.map((line) => {
			// Split by whitespace, but filter out any remaining literal \n characters
			// that might have been missed in normalization
			return line
				.replace(/\\n/g, " ") // Replace any remaining literal \n with space
				.split(/(\s+)/)
				.filter((word) => word.length > 0 && !word.match(/^\\n+$/)); // Filter out literal \n sequences
		})
	);

	const wordDuration = 0.5; // Duration of each word animation

	// Calculate when each line should start (after previous line's last word completes)
	// Now we need to track across paragraphs and lines within paragraphs
	const getLineStartDelay = (
		paragraphIndex: number,
		lineIndex: number
	): number => {
		if (paragraphIndex === 0 && lineIndex === 0) return delay;

		let totalDelay = delay;

		// Calculate delay from all previous paragraphs
		for (let p = 0; p < paragraphIndex; p++) {
			const linesInParagraph = paragraphLineWords[p];
			for (let l = 0; l < linesInParagraph.length; l++) {
				const wordsInLine = linesInParagraph[l].filter(
					(w) => w.trim().length > 0
				).length;
				const previousLineDelay =
					p === 0 && l === 0 ? delay : getLineStartDelay(p, l);
				const previousLineDuration =
					wordsInLine > 0 ? (wordsInLine - 1) * wordDelay + wordDuration : 0;
				totalDelay = previousLineDelay + previousLineDuration;
			}
			// Add a small delay between paragraphs (for visual spacing)
			totalDelay += 0.2;
		}

		// Calculate delay from previous lines in current paragraph
		for (let l = 0; l < lineIndex; l++) {
			const wordsInLine = paragraphLineWords[paragraphIndex][l].filter(
				(w) => w.trim().length > 0
			).length;
			const previousLineDelay =
				paragraphIndex === 0 && l === 0
					? delay
					: getLineStartDelay(paragraphIndex, l);
			const previousLineDuration =
				wordsInLine > 0 ? (wordsInLine - 1) * wordDelay + wordDuration : 0;
			totalDelay = previousLineDelay + previousLineDuration;
		}

		return totalDelay;
	};

	return (
		<motion.span
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			className={className}
		>
			{paragraphs.map((paragraph, paragraphIndex) => {
				const lines = paragraphLines[paragraphIndex];
				const lineWords = paragraphLineWords[paragraphIndex];

				return (
					<span
						key={paragraphIndex}
						style={{ display: "block", fontSize: "16px" }}
					>
						{lines.map((line, lineIndex) => {
							const lineStartDelay = getLineStartDelay(
								paragraphIndex,
								lineIndex
							);
							const words = lineWords[lineIndex];

							return (
								<span
									key={`${paragraphIndex}-${lineIndex}`}
									style={{ display: "block" }}
								>
									{words.map((word, wordIndex) => {
										if (word.trim().length === 0) {
											return (
												<span
													key={`${paragraphIndex}-${lineIndex}-${wordIndex}`}
												>
													{word}
												</span>
											);
										}

										// Calculate delay for this word: line start delay + (word index * word delay)
										const wordDelayValue =
											lineStartDelay + wordIndex * wordDelay;

										return (
											<motion.span
												key={`${paragraphIndex}-${lineIndex}-${wordIndex}`}
												initial={{ opacity: 0, y: 20 }}
												animate={
													inView
														? {
																opacity: 1,
																y: 0,
																transition: {
																	delay: wordDelayValue,
																	duration: wordDuration,
																	ease: [0.4, 0, 0.2, 1],
																},
														  }
														: { opacity: 0, y: 20 }
												}
												style={{ display: "inline-block", whiteSpace: "pre" }}
											>
												{word}
											</motion.span>
										);
									})}
									{lineIndex < lines.length - 1 && <br />}
								</span>
							);
						})}
						{paragraphIndex < paragraphs.length - 1 && (
							<span style={{ display: "block", height: "1.5em" }} />
						)}
					</span>
				);
			})}
		</motion.span>
	);
}
