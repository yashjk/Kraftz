import DigitalMarketingPageClient from "./digital-marketing-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Digital Marketing Services",
	description:
		"KRAFTz Digital Marketing Solutions transforms how brands are seen, searched, and remembered. We offer SEO, PPC, social media management, content strategy, web design, AI marketing, and analytics services.",
	keywords: [
		"digital marketing services",
		"SEO services",
		"PPC advertising",
		"social media management",
		"content marketing",
		"web design",
		"AI marketing",
		"marketing analytics",
		"brand strategy",
		"influencer marketing",
	],
	openGraph: {
		title: "Digital Marketing Services | KRAFTz",
		description:
			"Transform how your brand is seen, searched, and remembered with KRAFTz Digital Marketing Solutions. SEO, PPC, social media, and more.",
		url: "/services/digital-marketing",
	},
	twitter: {
		title: "Digital Marketing Services | KRAFTz",
		description:
			"Transform how your brand is seen, searched, and remembered with KRAFTz Digital Marketing Solutions.",
	},
	alternates: {
		canonical: "/services/digital-marketing",
	},
};

function DigitalMarketing() {
	return <DigitalMarketingPageClient />;
}

export default DigitalMarketing;
