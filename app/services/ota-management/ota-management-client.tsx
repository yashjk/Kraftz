"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import ConnectCTA from "@/components/common/connect-cta";

function OTAManagementPageClient() {
	return (
		<>
			<ServicesHero
				title="OTA Management"
				imageSrc="/ota-hero.jpg"
				backgroundPosition="right center"
				description={`Kraftz OTA Management delivers comprehensive online travel agency optimization services designed to help hotels, resorts, villas, serviced apartments and accommodation providers maximize their online presence and booking performance.

Our expertise spans OTA channel setup, rate parity management, content optimization, and performance analytics. We combine market intelligence, data-driven insights, and strategic distribution to deliver measurable results that elevate visibility, conversions, and revenue across all major OTA platforms.

Whether you are looking to optimize your Booking.com presence, enhance Expedia performance, or streamline multi-channel distribution, Kraftz is your strategic partner for OTA excellence.`}
				highlights={[
					{ label: "OTA Channel Setup & Audit", id: "ota-channel-setup" },
					{
						label: "Rate Parity Management",
						id: "rate-parity-management",
					},
					{
						label: "Content Optimization",
						id: "content-optimization",
					},
					{ label: "Performance Tracking & Analytics", id: "performance-tracking" },
					{ label: "Commission Optimization", id: "commission-optimization" },
					{ label: "Multi-Channel Distribution", id: "multi-channel-distribution" },
				]}
			/>
			<ServiceOverview id="ota-channel-setup" title="OTA Channel Setup & Audit">
				<AnimatedParagraph
					text="At Kraftz, we help hotels establish and optimize their presence across all major OTA platforms including Booking.com, Expedia, Agoda, and regional channels. We start with a comprehensive audit of your current OTA listings, identifying gaps in setup, content accuracy, and optimization opportunities. \n\n Our team ensures proper channel configuration, property mapping, rate plan setup, and inventory synchronization across all platforms. We verify that your property information, amenities, policies, and visual assets are accurate, compelling, and conversion-optimized. \n\n Key Services: Complete OTA account setup and configurationProperty listing optimization and verificationRate plan and inventory synchronizationMulti-platform content consistency checks"
					className="typ-body text-muted-foreground"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="rate-parity-management"
				title="Rate Parity Management"
			>
				<AnimatedParagraph
					text="Maintaining rate parity across all distribution channels is critical for brand integrity and OTA relationships. Kraftz monitors and manages rate consistency across OTAs, direct booking channels, and GDS platforms to ensure compliance and optimal positioning. \n\n We implement automated rate parity monitoring systems that alert you to discrepancies in real-time, helping you maintain consistent pricing while maximizing revenue opportunities. Our team works with your revenue management system to ensure rates are synchronized accurately across all channels. \n\n What We Offer: Real-time rate parity monitoring and alertsAutomated rate synchronization across channelsCompliance reporting and OTA relationship managementStrategic rate positioning for maximum yield"
					className="typ-body text-muted-foreground"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="content-optimization"
				title="Content Optimization"
			>
				<AnimatedParagraph
					text="Compelling content drives OTA conversions. Kraftz optimizes your property descriptions, photos, amenities, and policies across all OTA platforms to maximize visibility and booking rates. \n\n We ensure your listings are SEO-friendly, visually appealing, and accurately represent your property's unique value proposition. Our content strategy includes keyword optimization, localized descriptions for regional markets, and A/B testing to identify the most effective messaging. \n\n Services Include: Property description optimization and localizationHigh-conversion photo curation and sequencingAmenity and policy optimizationSEO keyword integration for better search rankings"
					className="typ-body text-muted-foreground"
				/>
			</ServiceOverview>
			<ServiceOverview id="performance-tracking" title="Performance Tracking & Analytics">
				<AnimatedParagraph
					text="Data-driven insights are essential for OTA success. Kraftz provides comprehensive performance tracking and analytics across all your OTA channels, delivering actionable insights that drive booking growth. \n\n Our analytics framework tracks key metrics including conversion rates, click-through rates, booking trends, competitive positioning, and revenue performance. We provide custom dashboards and regular reporting that help you understand what's working and where opportunities exist. \n\n Highlights: Real-time OTA performance dashboardsConversion rate analysis and optimizationCompetitive benchmarking and market insightsBooking trend forecasting and demand analysis"
					className="typ-body text-muted-foreground"
				/>
			</ServiceOverview>
			<ServiceOverview id="commission-optimization" title="Commission Optimization">
				<AnimatedParagraph
					text="Minimizing commission costs while maximizing bookings requires strategic channel management. Kraftz helps hotels optimize their OTA commission structure by analyzing channel performance, negotiating better rates where possible, and strategically allocating inventory to the most cost-effective channels. \n\n We evaluate commission costs against booking volume, revenue contribution, and guest quality to ensure you're getting the best return on your OTA investments. Our strategies help balance direct booking growth with OTA channel optimization. \n\n Core Features: Commission cost analysis and optimizationChannel mix strategy for cost efficiencyDirect booking conversion strategiesOTA negotiation support and relationship management"
					className="typ-body text-muted-foreground"
				/>
			</ServiceOverview>
			<ServiceOverview id="multi-channel-distribution" title="Multi-Channel Distribution">
				<AnimatedParagraph
					text="Effective multi-channel distribution ensures your property reaches the right guests at the right time across all booking platforms. Kraftz manages your distribution strategy across OTAs, direct channels, GDS, and metasearch platforms to maximize reach and revenue. \n\n We help hotels balance channel allocation, optimize inventory distribution, and ensure consistent branding and pricing across all touchpoints. Our approach integrates OTA management with your overall revenue and distribution strategy. \n\n What We Deliver: Integrated multi-channel distribution strategyInventory allocation optimization across platformsChannel performance comparison and optimizationUnified booking management and reporting"
					className="typ-body text-muted-foreground"
				/>
			</ServiceOverview>
			<ConnectCTA />
		</>
	);
}

export default OTAManagementPageClient;
