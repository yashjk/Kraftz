export type NavLinkItem = {
	href: string;
	label: string;
};

export type ServiceNavLink = {
	href: string;
	label: string;
	items?: NavLinkItem[];
};

export type NavLink = NavLinkItem | ServiceNavLink;

export const serviceNavs: ServiceNavLink[] = [
	{
		href: "/services/hospitality",
		label: "Hospitality Solutions",
		items: [
			{
				href: "/services/hospitality#revenue-management",
				label: "Revenue Management",
			},
			{
				href: "/services/hospitality#distribution-channel-management",
				label: "Distribution Channel Management",
			},
			{
				href: "/services/hospitality#revenue-management-system-rms",
				label: "Revenue Management System (RMS)",
			},
			{
				href: "/services/hospitality#business-intelligence",
				label: "Business Intelligence",
			},
			{
				href: "/services/hospitality#data-analytics",
				label: "Data & Analytics",
			},
			{
				href: "/services/hospitality#reputation-management-orm",
				label: "Reputation Management / ORM",
			},
			{
				href: "/services/hospitality#content-management",
				label: "Content Management",
			},
		],
	},
	{ href: "/services/ota-management", label: "OTA Management" },
	{
		href: "/services/digital-marketing",
		label: "Digital Marketing",
		items: [
			{
				href: "/services/digital-marketing#digital-strategy-consulting",
				label: "Digital Strategy & Consulting",
			},
			{ href: "/services/digital-marketing#seo-search", label: "SEO" },
			{
				href: "/services/digital-marketing#performance-marketing",
				label: "Performance Marketing",
			},
			{
				href: "/services/digital-marketing#social-media",
				label: "Social Media",
			},
			{
				href: "/services/digital-marketing#content-strategy",
				label: "Content Strategy",
			},
			{
				href: "/services/digital-marketing#website-experience-design",
				label: "Website & Experience Design",
			},
			{
				href: "/services/digital-marketing#ai-marketing",
				label: "AI Marketing & Automation",
			},
			{
				href: "/services/digital-marketing#analytics-insights",
				label: "Analytics & Insights",
			},
			{
				href: "/services/digital-marketing#brand-reputation-communication",
				label: "Brand Reputation & Communication",
			},
			{
				href: "/services/digital-marketing#influencer-marketing",
				label: "Influencer Marketing",
			},
		],
	},
	{ href: "/services/travel", label: "Travel" },
];

export const navLinks: NavLink[] = [
	{ href: "/", label: "Home" },
	...serviceNavs,
	{ href: "/about", label: "About" },
	{ href: "/contacts", label: "Contact" },
];
