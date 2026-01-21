"use client";

import ServicesHero from "@/components/services/hero";
import { TravelEditorial } from "@/components/services/travel-editorial";
import ConnectCTA from "@/components/common/connect-cta";
import { travelPageData } from "@/lib/config/services-pages";

function TravelPageClient() {
	return (
		<>
			<ServicesHero
				title={travelPageData.title}
				category={travelPageData.category}
				imageSrc={travelPageData.imageSrc}
				description={travelPageData.description}
			/>
			<TravelEditorial sections={travelPageData.sections} />
			<ConnectCTA />
		</>
	);
}

export default TravelPageClient;
