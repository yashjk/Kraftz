"use client";

import ServicesHero from "@/components/services/hero";
import { OTAComparison } from "@/components/services/ota-comparison";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import ConnectCTA from "@/components/common/connect-cta";
import { motion } from "framer-motion";
import { otaManagementPageData } from "@/lib/config/services-pages";

function OTAManagementPageClient() {
	return (
		<>
			<ServicesHero
				title={otaManagementPageData.title}
				imageSrc={otaManagementPageData.imageSrc}
				backgroundPosition={otaManagementPageData.backgroundPosition}
				description={otaManagementPageData.heroMessage || ""}
				textShadow
			>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="typ-body text-white mt-4 text-center"
					style={{
						textShadow:
							"1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
					}}
				>
					{otaManagementPageData.description}
				</motion.p>
			</ServicesHero>

			{/* Comparison Section */}
			{otaManagementPageData.withoutItems && otaManagementPageData.withItems && (
				<OTAComparison
					withoutItems={otaManagementPageData.withoutItems}
					withItems={otaManagementPageData.withItems}
					impact={otaManagementPageData.impact || ""}
				/>
			)}

			<ConnectCTA />
		</>
	);
}

export default OTAManagementPageClient;
