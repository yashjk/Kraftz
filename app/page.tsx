import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import WhatWeDo from "@/components/home/whatwedo";
import Whyus from "@/components/home/whyus";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kraftz - Krafting Growth Intelligently",
	description:
		"Kraftz delivers comprehensive digital marketing, hospitality consulting, and travel experience services. We help businesses grow intelligently through strategic marketing, revenue optimization, and exceptional customer experiences.",
	keywords: [
		"digital marketing agency",
		"hospitality consulting",
		"luxury travel experiences",
		"business growth",
		"marketing strategy",
		"revenue optimization",
	],
	openGraph: {
		title: "Kraftz - Krafting Growth Intelligently",
		description:
			"Kraftz delivers comprehensive digital marketing, hospitality consulting, and travel experience services.",
		url: "/",
	},
	twitter: {
		title: "Kraftz - Krafting Growth Intelligently",
		description:
			"Kraftz delivers comprehensive digital marketing, hospitality consulting, and travel experience services.",
	},
	alternates: {
		canonical: "/",
	},
};

export default function Home() {
	return (
		<>
			<Hero />
			<Overview />
			<WhatWeDo />

			<Whyus />
		</>
	);
}
