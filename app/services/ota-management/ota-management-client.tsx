"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import ConnectCTA from "@/components/common/connect-cta";
import { otaManagementPageData } from "@/lib/config/services-pages";

function OTAManagementPageClient() {
	return (
		<>
			<ServicesHero
				title={otaManagementPageData.title}
				imageSrc={otaManagementPageData.imageSrc}
				backgroundPosition={otaManagementPageData.backgroundPosition}
				description={otaManagementPageData.description}
				highlights={otaManagementPageData.highlights}
			/>
			{otaManagementPageData.sections.map((section) => (
				<ServiceOverview key={section.id} id={section.id} title={section.title}>
					<AnimatedParagraph
						text={section.content[0]}
						className="typ-body text-muted-foreground"
					/>
				</ServiceOverview>
			))}
			<ConnectCTA />
		</>
	);
}

export default OTAManagementPageClient;
