"use client";

import { motion } from "framer-motion";
import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import Link from "next/link";

function TravelPageClient() {
	return (
		<>
			<ServicesHero
				title="Travel Experiences"
				category="Services"
				description="Kraftz Travel Experiences curates journeys that transcend the ordinary. We cater to all age cohorts discerning travelers — seeking authentic, sophisticated, and seamless travel experiences for personal, family, and business needs. Every itinerary is crafted with precision, privacy, and perfection."
				highlights={[
					"Personal Travel",
					"Family Journeys",
					"Corporate Travel",
					"Ultra-Luxury",
					"Cultural Experiences",
					"Bespoke Itineraries"
				]}
			/>

			<ServiceOverview
				id="travel-experiences"
				title="Philosophy"
				imagePosition="right"
				imageAlt="Travel philosophy and experiences"
			>
				<AnimatedParagraph
					text="We believe travel should evoke emotion, create connection, and leave an imprint. Kraftz doesn't sell packages — we design experiences. Each journey reflects the traveler's individuality and aspirations, merging culture, comfort, and creativity into unforgettable moments."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Personal & Family Travel"
				imagePosition="left"
				imageAlt="Personal and family travel experiences"
			>
				<AnimatedParagraph
					text="From hidden retreats to desert escapes, Kraftz designs meaningful journeys for individuals and families. We handle every detail — from private villas and personalized itineraries to Michelin-star dining and immersive cultural touchpoints — ensuring every journey feels like a once-in-a-lifetime story."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Corporate & Business Travel"
				imagePosition="right"
				imageAlt="Corporate and business travel"
			>
				<AnimatedParagraph
					text="For enterprises and executives, Kraftz curates travel experiences that balance efficiency with elegance. We offer executive retreats, leadership off-sites, and corporate travel management designed for productivity, comfort, and prestige."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Ultra-Luxury & Lifestyle Experiences"
				imagePosition="left"
				imageAlt="Ultra-luxury travel and lifestyle experiences"
			>
				<AnimatedParagraph
					text="We open doors to the extraordinary — private jets, yacht charters, island buyouts, and world-class hospitality experiences. Kraftz partners with global luxury brands to provide bespoke lifestyle experiences that redefine exclusivity for HNIs and UHNWIs."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>

			<ServiceOverview
				title="Cultural & Experiential Journeys"
				imagePosition="right"
				imageAlt="Cultural and experiential travel journeys"
			>
				<AnimatedParagraph
					text="Travel is transformation. Our cultural journeys connect travelers with local traditions, gastronomy, art, and heritage. Whether it's a tea ceremony in Kyoto, desert safari in Abu Dhabi, or vineyard retreat in Tuscany, Kraftz turns every destination into a living story."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
				<div className="mt-8">
					<AnimatedParagraph
						text="We don't just plan travel — we orchestrate experiences that define lifestyles. For those who expect the extraordinary, Kraftz is not just a service provider; we're your silent partner in crafting journeys that speak the language of luxury."
						className="text-muted-foreground leading-relaxed text-base md:text-lg"
					/>
				</div>

				<div className="mt-8 text-center">
					<Link href="/contacts">
						<motion.button
							whileHover={{
								scale: 1.05,
								backgroundColor: "rgba(var(--primary-rgb), 0.05)",
							}}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center justify-center px-8 py-2.5 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5"
						>
							Connect With KRAFTz
							<svg
								className="ml-2 w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</motion.button>
					</Link>
				</div>
			</ServiceOverview>
		</>
	);
}

export default TravelPageClient;
