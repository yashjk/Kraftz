export type ServiceSection = {
	id: string;
	title: string;
	content: string[];
	imageSrc?: string;
};

export type ServicePageData = {
	title: string;
	category?: string;
	imageSrc: string;
	backgroundPosition?: string;
	description: string;
	sections: ServiceSection[];
	// OTA Management specific fields
	heroMessage?: string;
	withoutItems?: string[];
	withItems?: string[];
	impact?: string;
};

export const hospitalityPageData: ServicePageData = {
	title: "Hospitality Solutions",
	imageSrc: "/hospitality-hero.jpg",
	description: `Increase direct bookings, enhance channel performance and distribution…. Kraftz is your strategic partner for transformation.`,
	sections: [
		{
			id: "revenue-management",
			title: "Revenue Management",
			content: [
				"At Kraftz Hospitality, we view revenue management as the commercial heartbeat of every hotel. We deliver strategies and develop revenue ecosystem that optimize performance and profitability.",
			],
			imageSrc: "/why-choose-2.jpg",
		},
		{
			id: "distribution-channel-management",
			title: "Distribution Channel Management",
			content: [
				"We help hotels maximize reach, visibility, and revenue by strategically managing distribution across channels. We evaluate your current channel mix, and market opportunities to design a tailored distribution strategy.",
			],
			imageSrc: "/Distribution channel management.png",
		},
		{
			id: "data-business-intelligence",
			title: "Data & Business Intelligence",
			content: [
				"Data is the foundation of modern hotel performance. We leverage data, insights, and predictive analytics to forecast demand, enable revenue opportunities and enhance guest experiences.",
			],
			imageSrc: "/why-choose-1.jpg",
		},
		{
			id: "reputation-management-orm",
			title: "Online Reputation Management",
			content: [
				"Reputation defines your brand's success. Kraftz helps hotels with comprehensive review monitoring, response management, and customer sentiment reporting across Google, TripAdvisor and OTAs.",
			],
			imageSrc: "/Online reputation management.png",
		},
		{
			id: "content-management",
			title: "Content Management",
			content: [
				"Great content sells experiences before the booking happens. Kraftz offers end-to-end content management including photography, video content, blogs, storytelling, and influencer collaboration.",
			],
			imageSrc: "/why-choose-5.jpg",
		},
	],
};

export const digitalMarketingPageData: ServicePageData = {
	title: "Digital Marketing Solutions",
	category: "Services",
	imageSrc: "/digital-marketing-hero.jpg",
	description:
		"We Kraft digital strategies that make brands visible, memorable, engaging, and impactful… delivering clear ROI across all platforms.",
	sections: [
		{
			id: "seo-search",
			title: "Search Engine Optimization (SEO)",
			content: [
				"Visibility begins with discoverability. Kraftz develops SEO ecosystems that go beyond keywords, focusing on intent, reputation, and experience. We ensure your brand ranks high across Google and AI-driven platforms.",
			],
			imageSrc: "/Search engine optimisation.png",
		},
		{
			id: "performance-marketing",
			title: "Performance Marketing (PPC & Media Buying)",
			content: [
				"We deliver measurable growth through targeted paid campaigns across Google Ads, Meta, LinkedIn, and programmatic platforms. We design campaigns rooted in audience insights and creative excellence.",
			],
			imageSrc: "/Performance Marketing.jpg",
		},
		{
			id: "social-media",
			title: "Social Media Strategy & Management",
			content: [
				"We turn brands into communities. Kraftz creates and manages high-impact social media ecosystems that drive engagement, appeal and loyalty across Facebook, Instagram, YouTube and more.",
			],
			imageSrc: "/Social Media Strategy.jpg",
		},
		{
			id: "website-experience-design",
			title: "Website & Experience Design",
			content: [
				"Your website is your digital first impression. Kraftz designs and develops sleek, fast, and conversion-optimized websites that balance creativity with clarity.",
			],
			imageSrc: "/website design.jpg",
		},
		{
			id: "ai-marketing",
			title: "AI Marketing & Automation",
			content: [
				"Kraftz leverages AI to deliver marketing that thinks ahead. From predictive analytics and chatbots to personalized campaigns and automation flows, we integrate intelligent systems.",
			],
			imageSrc: "/AI automation.png",
		},
		{
			id: "influencer-marketing",
			title: "Influencer Marketing",
			content: [
				"We help brands expand their reach and engagement through strategic influencer partnerships. From our extensive network, we select the right influencers, creating compelling content and driving brand awareness.",
			],
			imageSrc: "/Influencer marketing.png",
		},
	],
};

export const otaManagementPageData: ServicePageData = {
	title: "OTA Management",
	imageSrc: "/ota-hero.jpg",
	backgroundPosition: "right center",
	heroMessage: "Transform Online Travel Agency channels into high-performing revenue assets",
	description: `OTAs are a critical revenue engine for hotels today, driving global visibility, demand generation, and booking volume. Kraftz delivers end-to-end OTA management, to optimize performance, strengthen rankings, improve conversion and control costs.
We help hotels accelerate revenue growth by combining structured audits, pricing alignment, rate parity control, and OTA strategies. We create a healthier balance between OTA and direct bookings directly impacting ADR, RevPAR, and profitability.`,
	withoutItems: [
		"Weak or incomplete OTA setup",
		"Poor OTA rankings and low visibility",
		"Inconsistent pricing and frequent rate parity issues",
		"High costs with low ROI",
		"Weak or outdated content and visuals",
		"Limited visibility into OTA performance",
		"Overdependence on select OTAs",
		"Missed revenue and growth opportunities",
	],
	withItems: [
		"Fully optimized OTA setup with correct mapping, rate plans, and inventory",
		"Improved rankings and stronger visibility across all OTA platforms",
		"Real-time rate parity monitoring and controlled pricing",
		"Reduced cost and efficient channel mix",
		"Conversion-optimized content, images, videos and storytelling",
		"Dashboards and actionable OTA analytics",
		"Balanced multi-channel distribution strategy",
		"Maximized revenue through structured OTA optimization",
	],
	impact: "Kraftz Impact: Higher OTA performance · Improved rankings · Higher bookings · Lower costs · Strong OTA relationships",
	sections: [
		{
			id: "ota-channel-setup",
			title: "OTA Channel Setup & Audit",
			content: [
				"At Kraftz, we help hotels establish and optimize their presence across all major OTA platforms including Booking.com, Expedia, Agoda, and regional channels. We start with a comprehensive audit of your current OTA listings, identifying gaps in setup, content accuracy, and optimization opportunities. \n\n Our team ensures proper channel configuration, property mapping, rate plan setup, and inventory synchronization across all platforms. We verify that your property information, amenities, policies, and visual assets are accurate, compelling, and conversion-optimized. \n\n Key Services: Complete OTA account setup and configurationProperty listing optimization and verificationRate plan and inventory synchronizationMulti-platform content consistency checks",
			],
		},
		{
			id: "rate-parity-management",
			title: "Rate Parity Management",
			content: [
				"Maintaining rate parity across all distribution channels is critical for brand integrity and OTA relationships. Kraftz monitors and manages rate consistency across OTAs, direct booking channels, and GDS platforms to ensure compliance and optimal positioning. \n\n We implement automated rate parity monitoring systems that alert you to discrepancies in real-time, helping you maintain consistent pricing while maximizing revenue opportunities. Our team works with your revenue management system to ensure rates are synchronized accurately across all channels. \n\n What We Offer: Real-time rate parity monitoring and alertsAutomated rate synchronization across channelsCompliance reporting and OTA relationship managementStrategic rate positioning for maximum yield",
			],
		},
		{
			id: "content-optimization",
			title: "Content Optimization",
			content: [
				"Compelling content drives OTA conversions. Kraftz optimizes your property descriptions, photos, amenities, and policies across all OTA platforms to maximize visibility and booking rates. \n\n We ensure your listings are SEO-friendly, visually appealing, and accurately represent your property's unique value proposition. Our content strategy includes keyword optimization, localized descriptions for regional markets, and A/B testing to identify the most effective messaging. \n\n Services Include: Property description optimization and localizationHigh-conversion photo curation and sequencingAmenity and policy optimizationSEO keyword integration for better search rankings",
			],
		},
		{
			id: "performance-tracking",
			title: "Performance Tracking & Analytics",
			content: [
				"Data-driven insights are essential for OTA success. Kraftz provides comprehensive performance tracking and analytics across all your OTA channels, delivering actionable insights that drive booking growth. \n\n Our analytics framework tracks key metrics including conversion rates, click-through rates, booking trends, competitive positioning, and revenue performance. We provide custom dashboards and regular reporting that help you understand what's working and where opportunities exist. \n\n Highlights: Real-time OTA performance dashboardsConversion rate analysis and optimizationCompetitive benchmarking and market insightsBooking trend forecasting and demand analysis",
			],
		},
		{
			id: "commission-optimization",
			title: "Commission Optimization",
			content: [
				"Minimizing commission costs while maximizing bookings requires strategic channel management. Kraftz helps hotels optimize their OTA commission structure by analyzing channel performance, negotiating better rates where possible, and strategically allocating inventory to the most cost-effective channels. \n\n We evaluate commission costs against booking volume, revenue contribution, and guest quality to ensure you're getting the best return on your OTA investments. Our strategies help balance direct booking growth with OTA channel optimization. \n\n Core Features: Commission cost analysis and optimizationChannel mix strategy for cost efficiencyDirect booking conversion strategiesOTA negotiation support and relationship management",
			],
		},
		{
			id: "multi-channel-distribution",
			title: "Multi-Channel Distribution",
			content: [
				"Effective multi-channel distribution ensures your property reaches the right guests at the right time across all booking platforms. Kraftz manages your distribution strategy across OTAs, direct channels, GDS, and metasearch platforms to maximize reach and revenue. \n\n We help hotels balance channel allocation, optimize inventory distribution, and ensure consistent branding and pricing across all touchpoints. Our approach integrates OTA management with your overall revenue and distribution strategy. \n\n What We Deliver: Integrated multi-channel distribution strategyInventory allocation optimization across platformsChannel performance comparison and optimizationUnified booking management and reporting",
			],
		},
	],
};

export const travelPageData: ServicePageData = {
	title: "Travel Experiences",
	category: "Services",
	imageSrc: "/travel-hero.jpg",
	description:
		"Every travel itinerary is krafted with precision and perfection for personal, family, and business needs we cater to all…",
	sections: [
		{
			id: "personal-family-travel",
			title: "Personal & Family Travel",
			content: [
				"From hidden retreats to desert escapes, Kraftz designs meaningful journeys for individuals and families. From private villas and personalized itineraries to immersive cultural touchpoints ensuring every journey feels like a once-in-a-lifetime story.",
			],
			imageSrc: "/Family Travel.jpg",
		},
		{
			id: "corporate-travel",
			title: "Corporate Travel",
			content: [
				"For enterprises and executives, Kraftz curates travel experiences that balance efficiency with elegance. We offer corporate travel management, executive retreats, and leadership off-sites designed for productivity, comfort, and prestige.",
			],
			imageSrc: "/Corporate travel.jpg",
		},
		{
			id: "ultra-luxury-lifestyle",
			title: "Ultra-Luxury & Lifestyle Experiences",
			content: [
				"We open doors to the extraordinary private jets, yacht charters, and world-class hospitality experiences. Kraftz partners with global luxury brands to provide bespoke lifestyle experiences that redefine exclusivity for HNIs.",
			],
			imageSrc: "/Ultra-Luxury.jpg",
		},
		{
			id: "cultural-experiential-journeys",
			title: "Cultural & Experiential Journeys",
			content: [
				"Travel is transformation. Our cultural journeys connect travelers with local traditions, gastronomy, art, and heritage. Whether it's a tea ceremony in Kyoto, desert safari in Abu Dhabi, or vineyard retreat in Tuscany, Kraftz turns every destination into a living story.",
			],
			imageSrc: "/Cultural.jpg",
		},
	],
};
