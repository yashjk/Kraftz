"use client";

import ServicesHero from "@/components/services/hero";
import { HospitalityEditorial } from "@/components/services/hospitality-editorial";
import ConnectCTA from "@/components/common/connect-cta";
import { hospitalityPageData } from "@/lib/config/services-pages";

function HospitalityPageClient() {
	return (
		<>
			<ServicesHero
				title={hospitalityPageData.title}
				imageSrc={hospitalityPageData.imageSrc}
				backgroundPosition={hospitalityPageData.backgroundPosition}
				description={hospitalityPageData.description}
			/>
			<HospitalityEditorial sections={hospitalityPageData.sections} />
			<ConnectCTA />
		</>
	);
}

export default HospitalityPageClient;
