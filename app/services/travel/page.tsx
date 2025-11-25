import TravelPageClient from "./travel-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Luxury Travel Experiences",
	description:
		"Kraftz Travel Experiences curates journeys that transcend the ordinary. We design authentic, sophisticated, and seamless travel experiences for personal, family, and business needs. Every itinerary is crafted with precision, privacy, and perfection.",
	keywords: [
		"luxury travel",
		"travel experiences",
		"bespoke travel",
		"luxury travel planning",
		"corporate travel",
		"family travel",
		"personalized travel",
		"travel concierge",
	],
	openGraph: {
		title: "Luxury Travel Experiences | Kraftz",
		description:
			"Curated journeys that transcend the ordinary. Authentic, sophisticated, and seamless travel experiences crafted with precision and perfection.",
		url: "/services/travel",
	},
	twitter: {
		title: "Luxury Travel Experiences | Kraftz",
		description:
			"Curated journeys that transcend the ordinary. Authentic, sophisticated, and seamless travel experiences.",
	},
	alternates: {
		canonical: "/services/travel",
	},
};

function Travel() {
	return <TravelPageClient />;
}

export default Travel;
