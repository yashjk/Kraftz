import OTAManagementPageClient from "./ota-management-client";

export const metadata = {
	title: "OTA Management Services",
	description:
		"Kraftz OTA Management delivers comprehensive online travel agency optimization services for hotels, resorts, and accommodation providers. We specialize in OTA channel setup, rate parity management, content optimization, and performance tracking to maximize bookings and revenue.",
	keywords: [
		"OTA management",
		"online travel agency",
		"OTA optimization",
		"booking.com management",
		"expedia management",
		"rate parity",
		"OTA content management",
		"channel distribution",
		"OTA performance",
	],
	openGraph: {
		title: "OTA Management Services | Kraftz",
		description:
			"Comprehensive OTA management services for hotels and accommodation providers. Maximize bookings and revenue through strategic OTA optimization.",
		url: "/services/ota-management",
	},
	twitter: {
		title: "OTA Management Services | Kraftz",
		description:
			"Comprehensive OTA management services for hotels and accommodation providers.",
	},
	alternates: {
		canonical: "/services/ota-management",
	},
};

function OTAManagement() {
	return <OTAManagementPageClient />;
}

export default OTAManagement;
