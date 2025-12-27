"use client";

import ServicesHero from "@/components/services/hero";
import { VisualSection } from "@/components/services/visual-section";
import ConnectCTA from "@/components/common/connect-cta";
import { hospitalityPageData } from "@/lib/config/services-pages";

function HospitalityPageClient() {
	return (
		<>
			<ServicesHero
				title={hospitalityPageData.title}
				imageSrc={hospitalityPageData.imageSrc}
				description={hospitalityPageData.description}
			/>
			{hospitalityPageData.sections.map((section, index) => (
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

export default HospitalityPageClient;
