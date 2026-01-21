"use client";

import ServicesHero from "@/components/services/hero";
import { DigitalMarketingEditorial } from "@/components/services/digital-marketing-editorial";
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
			<DigitalMarketingEditorial sections={digitalMarketingPageData.sections} />
			<ConnectCTA />
		</>
	);
}

export default DigitalMarketingPageClient;
