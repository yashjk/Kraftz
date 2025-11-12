import HospitalityPageClient from "./hospitality-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hospitality Consulting Services",
	description:
		"KRAFTz Hospitality Consulting delivers comprehensive, end-to-end consulting services for hotels, resorts, villas, and accommodation providers. We specialize in revenue optimization, brand positioning, technology integration, and reputation management.",
	keywords: [
		"hospitality consulting",
		"hotel consulting",
		"revenue management",
		"hotel revenue optimization",
		"RMS systems",
		"OTA management",
		"reputation management",
		"hospitality technology",
		"hotel brand positioning",
	],
	openGraph: {
		title: "Hospitality Consulting Services | KRAFTz",
		description:
			"Comprehensive hospitality consulting services for hotels, resorts, and accommodation providers. Revenue optimization, brand positioning, and technology integration.",
		url: "/services/hospitality",
	},
	twitter: {
		title: "Hospitality Consulting Services | KRAFTz",
		description:
			"Comprehensive hospitality consulting services for hotels, resorts, and accommodation providers.",
	},
	alternates: {
		canonical: "/services/hospitality",
	},
};

function Hospitality() {
	return <HospitalityPageClient />;
}

export default Hospitality;
