import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import WhatWeDo from "@/components/home/whatwedo";
import Whyus from "@/components/home/whyus";
import { homepageMetadata } from "@/lib/config/metadata";

export const metadata = homepageMetadata;

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
