"use client";

import { motion } from "framer-motion";
import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import Link from "next/link";

function HospitalityPageClient() {
	return (
		<>
			<ServicesHero
				title="Hospitality Consulting"
				category="Services"
				description={`Kraftz Hospitality Consulting delivers comprehensive, end-to-end consulting services designed to help hotels, resorts, villas, serviced apartments and accommodation providers to unlock peak performance.

Our expertise spans revenue optimization, brand positioning, technology integration, and guest experience transformation. We combine market intelligence, data-driven insights, and operational experience to deliver measurable results that elevate occupancy, profitability, and brand reputation.

Whether you are looking to increase direct bookings, implement data analytics systems, or elevate your digital reputation, Kraftz is your strategic partner for measurable hotel transformation.`}
				highlights={[
					"Revenue Optimization",
					"Brand Positioning",
					"Technology Integration",
					"Guest Experience",
					"Market Intelligence",
					"Data-Driven Insights",
				]}
			/>
			<ServiceOverview
				id="revenue-management"
				title="Revenue Management"
				imagePosition="right"
				imageAlt="Revenue Management dashboard or analytics"
			>
				<AnimatedParagraph
					text="At Kraftz Hospitality, we see Revenue Management as the commercial heartbeat of every hotel. With years of experience across leading hospitality brands, we deliver strategies that optimize pricing, performance, and profitability for long-term success. We start with a detailed audit of your hotel's revenue ecosystem, analyzing pricing structures, demand patterns, and market positioning to identify revenue opportunities and enhance competitive advantage. \n\n Our team develops dynamic, data-driven pricing strategies tailored to seasonal trends, day-of-week variations, and special events, while optimizing rate hierarchies, rate fences, and market segmentation to maximize yield. Using advanced forecasting and scenario modeling, we anticipate demand shifts and guide proactive decisions on rates, inventory, and promotions. \n\n Custom revenue dashboards and benchmarking against competitors provide actionable insights to stay ahead of the market curve. To elevate operational efficiency, we implement and optimize Revenue Management Systems (RMS), integrating AI-based forecasting, dynamic pricing automation, and competitor rate intelligence. \n\n We help hotels select and fine-tune RMS tools to align with brand standards, scale, and commercial objectives, ensuring technology enhances human expertise and delivers measurable ROI."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="distribution-channel-management"
				title="Distribution Channel Management"
				imagePosition="left"
				imageAlt="Distribution channels and OTA management"
			>
				<AnimatedParagraph
					text="At Kraftz Hospitality, we help hotels maximize reach, visibility, and revenue by strategically managing distribution across OTAs, GDS platforms, and direct booking channels. We evaluate your current channel mix, performance metrics, and market opportunities to design a tailored distribution strategy that balances demand, cost, and yield. Through continuous monitoring of channel performance, rate parity, and booking trends, we ensure your property captures the right guests at the right rates. By leveraging data-driven insights and best practices, Kraftz enables hotels to maintain optimized channel allocation, consistent pricing, and improved profitability — strengthening market presence and driving sustainable growth."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
				<AnimatedParagraph
					text="At Kraftz, our Revenue Management experts unlock new income streams and boost profitability through strategic rate planning, dynamic pricing models, and optimized channel distribution. \n\n We assess your property's market position, segment demand patterns, and develop tailor-made revenue systems that ensure maximum yield across OTAs, GDS, and direct channels. Our expert teams blend real-time analytics, competitor benchmarking, and inventory forecasting to achieve sustainable ADR growth and RevPAR improvement. \n\n Key Deliverables: Dynamic pricing algorithms customized for seasonalityRate parity and channel mix optimizationYield strategies backed by live market data Revenue reporting dashboards with BI integration"
					className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Revenue Management System (RMS)"
				imagePosition="right"
				imageAlt="Revenue Management System interface"
			>
				<AnimatedParagraph
					text="Kraftz offers Revenue Management System (RMS) implementation and optimization for hotels seeking automation and intelligence in pricing. \n\n Our RMS framework integrates AI-based forecasting, occupancy trend analysis, and competitor rate mapping, enabling real-time decisions that maximize yield. We help hotels select, customize, and deploy RMS tools that align with their market segment — from luxury resorts to mid-scale chains — ensuring transparency, scalability, and measurable ROI. \n\n Core Features: AI-driven rate optimizationChannel performance analyticsAutomated forecasting & demand segmentationSeamless PMS / CRS integration."
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="business-intelligence"
				title="Business Intelligence"
				imagePosition="left"
				imageAlt="Business Intelligence dashboard"
			>
				<AnimatedParagraph
					text="In the age of data, Business Intelligence (BI) drives hospitality success. Kraftz enables hoteliers to leverage data through custom BI dashboards that consolidate performance metrics across bookings, occupancy, revenue, and guest behavior. \n\n Our BI framework transforms raw hotel data into actionable insights — empowering strategic decisions, identifying revenue leaks, and uncovering cross-selling opportunities. \n\n What We Offer: Interactive hotel performance dashboardsReal-time revenue & occupancy trackingForecasting with market trend overlaysCustomized KPI alerts for management teams"
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Data & Analytics"
				imagePosition="right"
				imageAlt="Data analytics and insights visualization"
			>
				<AnimatedParagraph
					text="Data is the foundation of modern hotel performance. At Kraftz, we help hotels harness big data, AI insights, and predictive analytics to enhance guest experiences, forecast demand, and improve operational efficiency. \n\n Our consultants specialize in data mapping, segmentation, and reporting automation — ensuring that decision-makers have the right insights at the right time. \n\n Highlights: Predictive demand forecastingGuest segmentation and loyalty analyticsData visualization dashboardsAI-driven reporting and automation"
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="OTA Management"
				imagePosition="left"
				imageAlt="OTA management and booking platforms"
			>
				<AnimatedParagraph
					text="Kraftz optimizes Online Travel Agency (OTA) performance through smart distribution and visibility strategies. We manage OTA listings, rate parity, and content accuracy to maximize conversions. \n\n By aligning your OTA strategy with revenue and branding goals, we ensure your property maintains top visibility, consistent pricing, and high conversion ratios. \n\n Services Include: OTA channel setup & auditRate and content parity managementPerformance tracking & market insightsCommission optimization & yield strategy"
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="reputation-management-orm"
				title="Reputation Management / ORM"
				imagePosition="right"
				imageAlt="Online reputation management and reviews"
			>
				<AnimatedParagraph
					text="Reputation defines your brand's success. Kraftz helps hotels monitor, manage, and elevate their online presence across platforms — from Google and TripAdvisor to OTA review channels. \n\n We deploy sentiment analysis, automated response systems, and review tracking tools that ensure brand perception aligns with guest experience. \n\n Our Approach: Comprehensive review monitoringResponse management and escalationSentiment trend reportingGuest feedback integration into CRM"
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Content Management"
				imagePosition="left"
				imageAlt="Content creation and management for hotels"
			>
				<AnimatedParagraph
					text="Great content sells experiences before the booking happens. Kraftz offers end-to-end content management for hotels, resorts, villas, serviced apartments and accommodation providers — including copywriting, photography, room descriptions, and OTA content curation. \n\n We ensure every property's digital presence is accurate, appealing, and conversion-oriented, aligned with brand tone and SEO best practices. \n\n Services Include: Website & OTA content audit Property listing descriptions & keyword optimizationVisual asset curation (photos/videos)Localization for regional markets"
					className="text-muted-foreground leading-relaxed text-base md:text-lg"
				/>

				<div className="mt-8 text-center">
					<Link href="/contacts">
						<motion.button
							whileHover={{
								scale: 1.05,
								backgroundColor: "rgba(var(--primary-rgb), 0.05)",
							}}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center justify-center px-8 py-2.5 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5"
						>
							Connect With KRAFTz
							<svg
								className="ml-2 w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</motion.button>
					</Link>
				</div>
			</ServiceOverview>
		</>
	);
}

export default HospitalityPageClient;
