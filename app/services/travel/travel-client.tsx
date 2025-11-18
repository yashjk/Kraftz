"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import ConnectCTA from "@/components/common/connect-cta";

function TravelPageClient() {
	return (
		<>
			<ServicesHero
				title="Travel Experiences"
				category="Services"
				imageSrc="/travel-hero.jpg"
				description="Kraftz Travel Experiences curates journeys that transcend the ordinary. We cater to all age cohorts discerning travelers — seeking authentic, sophisticated, and seamless travel experiences for personal, family, and business needs. Every itinerary is crafted with precision, privacy, and perfection."
				highlights={[
					{ label: "Personal & Family Travel", id: "personal-family-travel" },
					{ label: "Corporate & Business Travel", id: "corporate-business-travel" },
					{ label: "Ultra-Luxury & Lifestyle Experiences", id: "ultra-luxury-lifestyle" },
					{ label: "Cultural & Experiential Journeys", id: "cultural-experiential-journeys" },
					{ label: "Philosophy", id: "travel-experiences" }
				]}
			/>

			<ServiceOverview
				id="travel-experiences"
				title="Philosophy"
			>
				<AnimatedParagraph
					text="We believe travel should evoke emotion, create connection, and leave an imprint. Kraftz doesn't sell packages — we design experiences. Each journey reflects the traveler's individuality and aspirations, merging culture, comfort, and creativity into unforgettable moments."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="personal-family-travel"
				title="Personal & Family Travel"
			>
				<AnimatedParagraph
					text="From hidden retreats to desert escapes, Kraftz designs meaningful journeys for individuals and families. We handle every detail — from private villas and personalized itineraries to Michelin-star dining and immersive cultural touchpoints — ensuring every journey feels like a once-in-a-lifetime story."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="corporate-business-travel"
				title="Corporate & Business Travel"
			>
				<AnimatedParagraph
					text="For enterprises and executives, Kraftz curates travel experiences that balance efficiency with elegance. We offer executive retreats, leadership off-sites, and corporate travel management designed for productivity, comfort, and prestige."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="ultra-luxury-lifestyle"
				title="Ultra-Luxury & Lifestyle Experiences"
			>
				<AnimatedParagraph
					text="We open doors to the extraordinary — private jets, yacht charters, island buyouts, and world-class hospitality experiences. Kraftz partners with global luxury brands to provide bespoke lifestyle experiences that redefine exclusivity for HNIs and UHNWIs."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>

			<ServiceOverview
				id="cultural-experiential-journeys"
				title="Cultural & Experiential Journeys"
			>
				<AnimatedParagraph
					text="Travel is transformation. Our cultural journeys connect travelers with local traditions, gastronomy, art, and heritage. Whether it's a tea ceremony in Kyoto, desert safari in Abu Dhabi, or vineyard retreat in Tuscany, Kraftz turns every destination into a living story."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
				<div className="mt-8">
					<AnimatedParagraph
						text="We don't just plan travel — we orchestrate experiences that define lifestyles. For those who expect the extraordinary, Kraftz is not just a service provider; we're your silent partner in crafting journeys that speak the language of luxury."
						className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
					/>
				</div>
			</ServiceOverview>
			<ConnectCTA />
		</>
	);
}

export default TravelPageClient;
