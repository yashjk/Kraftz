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
	description: `Kraftz Hospitality Consulting delivers comprehensive, end-to-end consulting services designed to help hotels, resorts, villas, serviced apartments and accommodation providers to unlock peak performance.

Our expertise spans revenue optimization, brand positioning, technology integration, and guest experience transformation. We combine market intelligence, data-driven insights, and operational experience to deliver measurable results that elevate occupancy, profitability, and brand reputation.

Whether you are looking to increase direct bookings, implement data analytics systems, or elevate your digital reputation, Kraftz is your strategic partner for measurable hotel transformation.`,
	highlights: [
		{ label: "Revenue Management", id: "revenue-management" },
		{
			label: "Distribution Channel Management",
			id: "distribution-channel-management",
		},
		{
			label: "Revenue Management System (RMS)",
			id: "revenue-management-system-rms",
		},
		{ label: "Business Intelligence", id: "business-intelligence" },
		{ label: "Data & Analytics", id: "data-analytics" },
		{
			label: "Reputation Management / ORM",
			id: "reputation-management-orm",
		},
		{ label: "Content Management", id: "content-management" },
	],
	sections: [
		{
			id: "revenue-management",
			title: "Revenue Management",
			content: [
				"At Kraftz Hospitality, we see Revenue Management as the commercial heartbeat of every hotel. With years of experience across leading hospitality brands, we deliver strategies that optimize pricing, performance, and profitability for long-term success. We start with a detailed audit of your hotel's revenue ecosystem, analyzing pricing structures, demand patterns, and market positioning to identify revenue opportunities and enhance competitive advantage. \n\n Our team develops dynamic, data-driven pricing strategies tailored to seasonal trends, day-of-week variations, and special events, while optimizing rate hierarchies, rate fences, and market segmentation to maximize yield. Using advanced forecasting and scenario modeling, we anticipate demand shifts and guide proactive decisions on rates, inventory, and promotions. \n\n Custom revenue dashboards and benchmarking against competitors provide actionable insights to stay ahead of the market curve. To elevate operational efficiency, we implement and optimize Revenue Management Systems (RMS), integrating AI-based forecasting, dynamic pricing automation, and competitor rate intelligence. \n\n We help hotels select and fine-tune RMS tools to align with brand standards, scale, and commercial objectives, ensuring technology enhances human expertise and delivers measurable ROI.",
			],
		},
		{
			id: "distribution-channel-management",
			title: "Distribution Channel Management",
			content: [
				"At Kraftz Hospitality, we help hotels maximize reach, visibility, and revenue by strategically managing distribution across OTAs, GDS platforms, and direct booking channels. We evaluate your current channel mix, performance metrics, and market opportunities to design a tailored distribution strategy that balances demand, cost, and yield. Through continuous monitoring of channel performance, rate parity, and booking trends, we ensure your property captures the right guests at the right rates. By leveraging data-driven insights and best practices, Kraftz enables hotels to maintain optimized channel allocation, consistent pricing, and improved profitability — strengthening market presence and driving sustainable growth.",
				"At Kraftz, our Revenue Management experts unlock new income streams and boost profitability through strategic rate planning, dynamic pricing models, and optimized channel distribution. \n\n We assess your property's market position, segment demand patterns, and develop tailor-made revenue systems that ensure maximum yield across OTAs, GDS, and direct channels. Our expert teams blend real-time analytics, competitor benchmarking, and inventory forecasting to achieve sustainable ADR growth and RevPAR improvement. \n\n Key Deliverables: Dynamic pricing algorithms customized for seasonalityRate parity and channel mix optimizationYield strategies backed by live market data Revenue reporting dashboards with BI integration",
			],
		},
		{
			id: "revenue-management-system-rms",
			title: "Revenue Management System (RMS)",
			content: [
				"Kraftz offers Revenue Management System (RMS) implementation and optimization for hotels seeking automation and intelligence in pricing. \n\n Our RMS framework integrates AI-based forecasting, occupancy trend analysis, and competitor rate mapping, enabling real-time decisions that maximize yield. We help hotels select, customize, and deploy RMS tools that align with their market segment — from luxury resorts to mid-scale chains — ensuring transparency, scalability, and measurable ROI. \n\n Core Features: AI-driven rate optimizationChannel performance analyticsAutomated forecasting & demand segmentationSeamless PMS / CRS integration.",
			],
		},
		{
			id: "business-intelligence",
			title: "Business Intelligence",
			content: [
				"In the age of data, Business Intelligence (BI) drives hospitality success. Kraftz enables hoteliers to leverage data through custom BI dashboards that consolidate performance metrics across bookings, occupancy, revenue, and guest behavior. \n\n Our BI framework transforms raw hotel data into actionable insights — empowering strategic decisions, identifying revenue leaks, and uncovering cross-selling opportunities. \n\n What We Offer: Interactive hotel performance dashboardsReal-time revenue & occupancy trackingForecasting with market trend overlaysCustomized KPI alerts for management teams",
			],
		},
		{
			id: "data-analytics",
			title: "Data & Analytics",
			content: [
				"Data is the foundation of modern hotel performance. At Kraftz, we help hotels harness big data, AI insights, and predictive analytics to enhance guest experiences, forecast demand, and improve operational efficiency. \n\n Our consultants specialize in data mapping, segmentation, and reporting automation — ensuring that decision-makers have the right insights at the right time. \n\n Highlights: Predictive demand forecastingGuest segmentation and loyalty analyticsData visualization dashboardsAI-driven reporting and automation",
			],
		},
		{
			id: "reputation-management-orm",
			title: "Reputation Management / ORM",
			content: [
				"Reputation defines your brand's success. Kraftz helps hotels monitor, manage, and elevate their online presence across platforms — from Google and TripAdvisor to OTA review channels. \n\n We deploy sentiment analysis, automated response systems, and review tracking tools that ensure brand perception aligns with guest experience. \n\n Our Approach: Comprehensive review monitoringResponse management and escalationSentiment trend reportingGuest feedback integration into CRM",
			],
		},
		{
			id: "content-management",
			title: "Content Management",
			content: [
				"Great content sells experiences before the booking happens. Kraftz offers end-to-end content management for hotels, resorts, villas, serviced apartments and accommodation providers — including copywriting, photography, room descriptions, and OTA content curation. \n\n We ensure every property's digital presence is accurate, appealing, and conversion-oriented, aligned with brand tone and SEO best practices. \n\n Services Include: Website & OTA content audit Property listing descriptions & keyword optimizationVisual asset curation (photos/videos)Localization for regional markets",
			],
		},
	],
};

export const digitalMarketingPageData: ServicePageData = {
	title: "Digital Marketing Solutions",
	category: "Services",
	imageSrc: "/digital-marketing-hero.jpg",
	description:
		"Kraftz Digital Marketing Solutions transforms how brands are seen, searched, and remembered. We blend strategy, storytelling, and smart technology to help mid-size, large, and new-age businesses dominate the digital landscape. Every campaign we create aligns with the client's vision, mission, and OKRs — ensuring marketing delivers measurable business impact, not just impressions.",
	highlights: [
		{
			label: "Digital Strategy & Consulting",
			id: "digital-strategy-consulting",
		},
		{ label: "Search Engine Optimization (SEO)", id: "seo-search" },
		{
			label: "Performance Marketing (PPC & Media Buying)",
			id: "performance-marketing",
		},
		{
			label: "Social Media Strategy & Management",
			id: "social-media",
		},
		{ label: "Content Strategy & Creation", id: "content-strategy" },
		{ label: "Website & Experience Design", id: "website-experience-design" },
		{ label: "AI Marketing & Automation", id: "ai-marketing" },
		{ label: "Analytics & Performance Insights", id: "analytics-insights" },
		{
			label: "Brand Reputation & Communication",
			id: "brand-reputation-communication",
		},
		{ label: "Influencer Marketing", id: "influencer-marketing" },
	],
	sections: [
		{
			id: "digital-strategy-consulting",
			title: "Digital Strategy & Consulting",
			content: [
				"Kraftz We start by decoding your business DNA — understanding your market, goals, and audience. Kraftz builds tailored digital strategies that connect every dot between brand, content, and conversion. From marketing roadmaps to digital transformation blueprints, our consulting ensures every rupee and dirham invested drives tangible ROI.",
			],
		},
		{
			id: "seo-search",
			title: "Search Engine Optimization (SEO)",
			content: [
				"Visibility begins with discoverability. Kraftz develops SEO ecosystems that go beyond keywords — we focus on intent, authority, and experience. Our team ensures your brand ranks high across Google, Bing, and AI-driven platforms like ChatGPT and Copilot by optimizing on-page, off-page, and technical SEO with precision.",
			],
		},
		{
			id: "performance-marketing",
			title: "Performance Marketing (PPC & Media Buying)",
			content: [
				"We deliver measurable growth through targeted paid campaigns across Google Ads, Meta, LinkedIn, and programmatic platforms. Kraftz's performance marketing team designs campaigns rooted in audience insights, creative excellence, and continuous optimization — ensuring maximum visibility and ROI.",
			],
		},
		{
			id: "social-media",
			title: "Social Media Strategy & Management",
			content: [
				"We turn brands into communities. Kraftz creates and manages high-impact social media ecosystems that drive engagement, advocacy, and loyalty. Our approach blends trend intelligence with brand storytelling, ensuring every post adds measurable value.",
			],
		},
		{
			id: "content-strategy",
			title: "Content Strategy & Creation",
			content: [
				"Great brands tell better stories. Kraftz creates compelling digital content — from brand films, blogs, and influencer collaborations to thought leadership and interactive campaigns. Each piece is optimized for storytelling, search, and shareability.",
			],
		},
		{
			id: "website-experience-design",
			title: "Website & Experience Design",
			content: [
				"Your website is your digital first impression — we make it unforgettable. Kraftz designs and develops sleek, fast, and conversion-optimized websites that balance creativity with clarity. Every design reflects your brand ethos while driving measurable action.",
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
			id: "analytics-insights",
			title: "Analytics & Performance Insights",
			content: [
				"We measure what matters. Kraftz deploys advanced analytics frameworks to track campaign performance, user behavior, and conversion patterns. Every insight fuels smarter decisions and stronger outcomes.",
			],
		},
		{
			id: "brand-reputation-communication",
			title: "Brand Reputation & Communication",
			content: [
				"Beyond metrics, Kraftz builds perception. Our communication strategies align brand voice with customer emotion, ensuring consistency across touchpoints — from social posts to PR releases and leadership positioning.",
			],
		},
		{
			id: "influencer-marketing",
			title: "Influencer Marketing",
			content: [
				"At Kraftz, we help brands to expand their reach and engagement through strategic influencer partnerships. From our extensive network of influencers we select the right influencers, creating compelling content, and tracking performance, we drive brand awareness, trust, and conversions — ensuring measurable results and meaningful audience connections",
				"Digital transformation is no longer optional — it's essential. Kraftz empowers brands to not only adapt but to lead in the age of AI and experience-driven marketing. Whether you're a startup or a global enterprise, we'll craft your digital story with precision and purpose.",
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
		"Kraftz Travel Experiences curates journeys that transcend the ordinary. We cater to all age cohorts discerning travelers — seeking authentic, sophisticated, and seamless travel experiences for personal, family, and business needs. Every itinerary is crafted with precision, privacy, and perfection.",
	highlights: [
		{ label: "Personal & Family Travel", id: "personal-family-travel" },
		{ label: "Corporate & Business Travel", id: "corporate-business-travel" },
		{
			label: "Ultra-Luxury & Lifestyle Experiences",
			id: "ultra-luxury-lifestyle",
		},
		{
			label: "Cultural & Experiential Journeys",
			id: "cultural-experiential-journeys",
		},
		{ label: "Philosophy", id: "travel-experiences" },
	],
	sections: [
		{
			id: "travel-experiences",
			title: "Philosophy",
			content: [
				"We believe travel should evoke emotion, create connection, and leave an imprint. Kraftz doesn't sell packages — we design experiences. Each journey reflects the traveler's individuality and aspirations, merging culture, comfort, and creativity into unforgettable moments.",
			],
		},
		{
			id: "personal-family-travel",
			title: "Personal & Family Travel",
			content: [
				"From hidden retreats to desert escapes, Kraftz designs meaningful journeys for individuals and families. We handle every detail — from private villas and personalized itineraries to Michelin-star dining and immersive cultural touchpoints — ensuring every journey feels like a once-in-a-lifetime story.",
			],
		},
		{
			id: "corporate-business-travel",
			title: "Corporate & Business Travel",
			content: [
				"For enterprises and executives, Kraftz curates travel experiences that balance efficiency with elegance. We offer executive retreats, leadership off-sites, and corporate travel management designed for productivity, comfort, and prestige.",
			],
		},
		{
			id: "ultra-luxury-lifestyle",
			title: "Ultra-Luxury & Lifestyle Experiences",
			content: [
				"We open doors to the extraordinary — private jets, yacht charters, island buyouts, and world-class hospitality experiences. Kraftz partners with global luxury brands to provide bespoke lifestyle experiences that redefine exclusivity for HNIs and UHNWIs.",
			],
		},
		{
			id: "cultural-experiential-journeys",
			title: "Cultural & Experiential Journeys",
			content: [
				"Travel is transformation. Our cultural journeys connect travelers with local traditions, gastronomy, art, and heritage. Whether it's a tea ceremony in Kyoto, desert safari in Abu Dhabi, or vineyard retreat in Tuscany, Kraftz turns every destination into a living story.",
				"We don't just plan travel — we orchestrate experiences that define lifestyles. For those who expect the extraordinary, Kraftz is not just a service provider; we're your silent partner in crafting journeys that speak the language of luxury.",
			],
		},
	],
};
