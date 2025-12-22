"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import ConnectCTA from "@/components/common/connect-cta";
import { hospitalityPageData } from "@/lib/config/services-pages";

function HospitalityPageClient() {
	return (
		<>
			<ServicesHero
				title={hospitalityPageData.title}
				imageSrc={hospitalityPageData.imageSrc}
				description={hospitalityPageData.description}
				highlights={hospitalityPageData.highlights}
			/>
			{hospitalityPageData.sections.map((section) => (
				<ServiceOverview key={section.id} id={section.id} title={section.title}>
					{section.content.map((text, index) => (
						<AnimatedParagraph
							key={index}
							text={text}
							className={`typ-body text-muted-foreground ${
								index > 0 ? "mt-6" : ""
							}`}
						/>
					))}
				</ServiceOverview>
			))}
			<ConnectCTA />
		</>
	);
}

export default HospitalityPageClient;
