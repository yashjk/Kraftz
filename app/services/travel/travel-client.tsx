"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
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
				highlights={travelPageData.highlights}
			/>
			{travelPageData.sections.map((section) => (
				<ServiceOverview key={section.id} id={section.id} title={section.title}>
					{section.content.map((text, index) => (
						<div key={index} className={index > 0 ? "mt-8" : ""}>
							<AnimatedParagraph
								text={text}
								className="typ-body text-muted-foreground"
							/>
						</div>
					))}
				</ServiceOverview>
			))}
			<ConnectCTA />
		</>
	);
}

export default TravelPageClient;
