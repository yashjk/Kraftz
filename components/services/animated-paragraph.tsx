"use client";

import { AnimatedText } from "@/lib/animations";

interface AnimatedParagraphProps {
	text: string;
	className?: string;
	wordDelay?: number;
	delay?: number;
	threshold?: number;
}

function AnimatedParagraph({
	text,
	className = "text-muted-foreground text-[18px] md:text-lg leading-relaxed",
	wordDelay = 0.03,
	delay = 0,
	threshold = 0.25,
}: AnimatedParagraphProps) {
	return (
		<p className={className}>
			<AnimatedText
				text={text}
				wordDelay={wordDelay}
				delay={delay}
				threshold={threshold}
				triggerOnce={true}
			/>
		</p>
	);
}

export default AnimatedParagraph;
