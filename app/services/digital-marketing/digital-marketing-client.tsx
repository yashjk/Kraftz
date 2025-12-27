"use client";

import ServicesHero from "@/components/services/hero";
import { VisualSection } from "@/components/services/visual-section";
import ConnectCTA from "@/components/common/connect-cta";
import { digitalMarketingPageData } from "@/lib/config/services-pages";

function DigitalMarketingPageClient() {
	return (
		<>
			<ServicesHero
				title={digitalMarketingPageData.title}
				category={digitalMarketingPageData.category}
				imageSrc={digitalMarketingPageData.imageSrc}
				description={digitalMarketingPageData.description}
			/>
			{digitalMarketingPageData.sections.map((section, index) => (
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

export default DigitalMarketingPageClient;
