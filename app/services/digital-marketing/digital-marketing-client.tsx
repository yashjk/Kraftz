"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
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
				highlights={digitalMarketingPageData.highlights}
			/>
			{digitalMarketingPageData.sections.map((section) => (
				<ServiceOverview key={section.id} id={section.id} title={section.title}>
					{section.content.map((text, index) => (
						<div key={index} className={index > 0 ? "mt-6" : ""}>
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

export default DigitalMarketingPageClient;
