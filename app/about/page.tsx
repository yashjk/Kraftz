import Culture from "@/components/about/culture";
import Overview from "@/components/about/overview";
import Team from "@/components/about/team";
import VisionMission from "@/components/about/visionmission";
import ConnectCTA from "@/components/common/connect-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about KRAFTz - our vision, mission, culture, and team. We are dedicated to crafting growth intelligently through digital marketing, hospitality consulting, and exceptional travel experiences.",
	keywords: [
		"about KRAFTz",
		"company culture",
		"team",
		"vision mission",
		"marketing agency team",
		"hospitality consultants",
	],
	openGraph: {
		title: "About Us | KRAFTz",
		description:
			"Learn about KRAFTz - our vision, mission, culture, and team dedicated to crafting growth intelligently.",
		url: "/about",
	},
	twitter: {
		title: "About Us | KRAFTz",
		description:
			"Learn about KRAFTz - our vision, mission, culture, and team dedicated to crafting growth intelligently.",
	},
	alternates: {
		canonical: "/about",
	},
};

function About() {
	return (
		<>
			<Overview />
			<VisionMission />
			<Team />
			<Culture />
			<ConnectCTA />
		</>
	);
}

export default About;
