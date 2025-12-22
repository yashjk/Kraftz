export type ServiceHighlight = {
	label: string;
	id: string;
};

export type ServiceSection = {
	id: string;
	title: string;
	content: string[];
};

export type ServicePageData = {
	title: string;
	category?: string;
	imageSrc: string;
	backgroundPosition?: string;
	description: string;
	highlights: ServiceHighlight[];
	sections: ServiceSection[];
};

export const hospitalityPageData: ServicePageData = {
	title: "Hospitality Solutions",
	imageSrc: "/hospitality-hero.jpg",
	description: `Increase direct bookings, enhance channel performance and distribution…. Kraftz is your strategic partner for transformation.`,
	highlights: [
		{ label: "Revenue Management", id: "revenue-management" },
		{
			label: "Distribution Channel Management",
			id: "distribution-channel-management",
		},
		{
			label: "Data & Business Intelligence",
			id: "data-business-intelligence",
		},
		{
			label: "Online Reputation Management",
			id: "reputation-management-orm",
		},
		{ label: "Content Management", id: "content-management" },
	],
	sections: [
		{
			id: "revenue-management",
			title: "Revenue Management",
			content: [
				"At Kraftz Hospitality, we view revenue management as the commercial heartbeat of every hotel. We deliver strategies and develop revenue ecosystem that optimize performance and profitability. Many hotels fail to achieve their full revenue potential and consistently face revenue leakage, weak ADR & RevPAR and poor demand we help hotels overcome these challenges.",
			],
		},
		{
			id: "distribution-channel-management",
			title: "Distribution Channel Management",
			content: [
				"We help hotels maximize reach, visibility, and revenue by strategically managing distribution across channels. We evaluate your current channel mix, and market opportunities to design a tailored distribution strategy that balances demand, cost, and yield. We ensure your property captures the right guests at the right rates.",
			],
		},
		{
			id: "data-business-intelligence",
			title: "Data & Business Intelligence",
			content: [
				"Data is the foundation of modern hotel performance. We leverage data, insights, and predictive analytics to forecast demand, enable revenue opportunities and enhance guest experiences. Our BI framework transforms data into actionable insights empowering strategic decisions and identifying revenue leakage.",
			],
		},
		{
			id: "reputation-management-orm",
			title: "Online Reputation Management",
			content: [
				"Reputation defines your brand's success. Kraftz helps hotels with comprehensive review monitoring, response management, escalation, customer sentiment reporting to ensure brand perception aligns with guest experience across Google, TripAdvisor and OTAs (Booking.com, Expedia, MakeMyTrip and more).",
			],
		},
		{
			id: "content-management",
			title: "Content Management",
			content: [
				"Great content sells experiences before the booking happens. Kraftz offers end-to-end content management including, photography, video content, blogs, storytelling, content curation and influencer collaboration. We ensure your digital presence is impactful, appealing, and aligned with SEO best practices",
			],
		},
	],
};

export const digitalMarketingPageData: ServicePageData = {
	title: "Digital Marketing Solutions",
	category: "Services",
	imageSrc: "/digital-marketing-hero.jpg",
	description:
		"We Kraft digital strategies that make brands visible, memorable, engaging, and impactful… delivering clear ROI across all platforms.",
	highlights: [
		{ label: "Search Engine Optimization (SEO)", id: "seo-search" },
		{
			label: "Performance Marketing (PPC & Media Buying)",
			id: "performance-marketing",
		},
		{
			label: "Social Media Strategy & Management",
			id: "social-media",
		},
		{ label: "Website & Experience Design", id: "website-experience-design" },
		{ label: "AI Marketing & Automation", id: "ai-marketing" },
		{ label: "Influencer Marketing", id: "influencer-marketing" },
	],
	sections: [
		{
			id: "seo-search",
			title: "Search Engine Optimization (SEO)",
			content: [
				"Visibility begins with discoverability. Kraftz develops SEO ecosystems that go beyond keywords we focus on intent, reputation, and experience. We ensure your brand ranks high across Google and AI-driven platforms like ChatGPT, Gemini and more by optimizing on-page, off-page, and SEO.",
			],
		},
		{
			id: "performance-marketing",
			title: "Performance Marketing (PPC & Media Buying)",
			content: [
				"We deliver measurable growth through targeted paid campaigns across Google Ads, Meta, LinkedIn, and programmatic platforms. We design campaigns rooted in audience insights, creative excellence ensuring maximum visibility and ROI.",
			],
		},
		{
			id: "social-media",
			title: "Social Media Strategy & Management",
			content: [
				"We turn brands into communities. Kraftz creates and manages high-impact social media ecosystems that drive engagement, appeal and loyalty across Facebook, Instagram, YouTube and more. Our approach blends trend intelligence with brand storytelling, ensuring every post adds measurable value.",
			],
		},
		{
			id: "website-experience-design",
			title: "Website & Experience Design",
			content: [
				"Your website is your digital first impression. Kraftz designs and develops sleek, fast, and conversion-optimized websites that balance creativity with clarity.",
			],
		},
		{
			id: "ai-marketing",
			title: "AI Marketing & Automation",
			content: [
				"Kraftz leverages AI to deliver marketing that thinks ahead. From predictive analytics and chatbots to personalized campaigns and automation flows, we integrate intelligent systems that amplify performance and efficiency.",
			],
		},
		{
			id: "influencer-marketing",
			title: "Influencer Marketing",
			content: [
				"We help brands to expand their reach and engagement through strategic influencer partnerships. From our extensive network of influencers, we select the right influencers, creating compelling content, drive brand awareness, and measurable results and meaningful audience connections.",
			],
		},
	],
};

export const otaManagementPageData: ServicePageData = {
	title: "OTA Management",
	imageSrc: "/ota-hero.jpg",
	backgroundPosition: "right center",
	description: `Kraftz OTA Management delivers comprehensive online travel agency optimization services designed to help hotels, resorts, villas, serviced apartments and accommodation providers maximize their online presence and booking performance.

Our expertise spans OTA channel setup, rate parity management, content optimization, and performance analytics. We combine market intelligence, data-driven insights, and strategic distribution to deliver measurable results that elevate visibility, conversions, and revenue across all major OTA platforms.

Whether you are looking to optimize your Booking.com presence, enhance Expedia performance, or streamline multi-channel distribution, Kraftz is your strategic partner for OTA excellence.`,
	highlights: [
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
	],
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
	highlights: [
		{ label: "Personal & Family Travel", id: "personal-family-travel" },
		{ label: "Corporate Travel", id: "corporate-travel" },
		{
			label: "Ultra-Luxury & Lifestyle Experiences",
			id: "ultra-luxury-lifestyle",
		},
		{
			label: "Cultural & Experiential Journeys",
			id: "cultural-experiential-journeys",
		},
	],
	sections: [
		{
			id: "personal-family-travel",
			title: "Personal & Family Travel",
			content: [
				"From hidden retreats to desert escapes, Kraftz designs meaningful journeys for individuals and families. From private villas and personalized itineraries to immersive cultural touchpoints ensuring every journey feels like a once-in-a-lifetime story.",
			],
		},
		{
			id: "corporate-travel",
			title: "Corporate Travel",
			content: [
				"For enterprises and executives, Kraftz curates travel experiences that balance efficiency with elegance. We offer corporate travel management, executive retreats, leadership off-sites designed for productivity, comfort, and prestige.",
			],
		},
		{
			id: "ultra-luxury-lifestyle",
			title: "Ultra-Luxury & Lifestyle Experiences",
			content: [
				"We open doors to the extraordinary private jets, yacht charters, and world-class hospitality experiences. Kraftz partners with global luxury brands to provide bespoke lifestyle experiences that redefine exclusivity for HNIs.",
			],
		},
		{
			id: "cultural-experiential-journeys",
			title: "Cultural & Experiential Journeys",
			content: [
				"Travel is transformation. Our cultural journeys connect travelers with local traditions, gastronomy, art, and heritage. Whether it's a tea ceremony in Kyoto, desert safari in Abu Dhabi, or vineyard retreat in Tuscany, Kraftz turns every destination into a living story.",
			],
		},
	],
};
