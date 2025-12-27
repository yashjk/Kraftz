"use client";

import ServicesHero from "@/components/services/hero";
import { VisualSection } from "@/components/services/visual-section";
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
			{travelPageData.sections.map((section, index) => (
				<VisualSection
					key={section.id}
					id={section.id}
					title={section.title}
					content={section.content}
					imageSrc={section.imageSrc}
					index={index}
				/>
			))}
			<ConnectCTA />
		</>
	);
}

export default TravelPageClient;
