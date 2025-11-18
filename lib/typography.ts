/**
 * Typography System for Kraftz
 *
 * Consistent typography classes for headings, body text, and UI elements
 * Uses Playfair Display for headings and Jost for body text
 */

export const typography = {
	// Headings - Playfair Display
	h1: "font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
	h2: "font-heading text-4xl md:text-5xl lg:text-5xl font-bold leading-tight",
	h3: "font-heading text-xl md:text-2xl font-semibold leading-tight",
	h4: "font-heading text-lg md:text-xl font-semibold leading-tight",

	// Body text - Jost (default sans-serif)
	body: "text-[18px] md:text-lg leading-relaxed",
	bodySmall: "text-[18px] md:text-lg leading-relaxed",
	bodyLarge: "text-[18px] md:text-lg leading-relaxed",

	// Special cases
	hero: "font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
	sectionTitle: "font-heading text-4xl md:text-5xl lg:text-5xl font-bold leading-tight",
	cardTitle: "font-heading text-xl md:text-2xl font-semibold leading-tight",

	// Colors
	headingColor: "text-[#0249A7]",
	bodyColor: "text-muted-foreground",
	primaryColor: "text-primary",
} as const;

/**
 * Helper function to combine typography classes
 */
export function getTypographyClass(
	type: keyof typeof typography,
	additionalClasses?: string
): string {
	return `${typography[type]} ${additionalClasses || ""}`.trim();
}
