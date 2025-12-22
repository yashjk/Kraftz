interface AnimatedParagraphProps {
	text: string;
	className?: string;
	wordDelay?: number;
	delay?: number;
	threshold?: number;
}

function AnimatedParagraph({
	text,
	className = "typ-body text-muted-foreground",
}: AnimatedParagraphProps) {
	return <p className={className}>{text}</p>;
}

export default AnimatedParagraph;
