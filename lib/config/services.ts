import {
	TrendingUpIcon,
	NetworkIcon,
	BrainIcon,
	Share2Icon,
	StarIcon,
	MapPinIcon,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Service = {
	id: number;
	icon: LucideIcon;
	title: string;
	description: string;
	href: string;
};

export const services: Service[] = [
	{
		id: 1,
		icon: TrendingUpIcon,
		title: "Revenue Growth",
		description:
			"We unlock growth across segments, driving occupancy and delivering higher RevPAR, GOPPAR, and yield for the hotels",
		href: "/services/hospitality#revenue-management",
	},
	{
		id: 2,
		icon: NetworkIcon,
		title: "Distribution Channel",
		description:
			"Kraftz connects your inventory to all leading channels, ensuring real-time rates, availability, and multi-platform distribution.",
		href: "/services/hospitality#distribution-channel-management",
	},
	{
		id: 3,
		icon: BrainIcon,
		title: "Data Solutions & Business Intelligence",
		description:
			"We leverage the power of data and technology to enable revenue opportunities with 360° visibility on performance tracking and reporting",
		href: "/services/hospitality#business-intelligence",
	},
	{
		id: 4,
		icon: Share2Icon,
		title: "OTA Optimization",
		description:
			"We guarantee superior OTA performance, improved ranking, better conversion and increased bookings.",
		href: "/services/digital-marketing",
	},
	{
		id: 5,
		icon: StarIcon,
		title: "Digital Presence & Brand Experience",
		description:
			"We transform digital visibility and discoverability by blending SEO, Social Strategy, Paid Media, Content, and Influencer marketing.",
		href: "/services/hospitality#reputation-management-orm",
	},
	{
		id: 6,
		icon: MapPinIcon,
		title: "Travel Experiences",
		description:
			"We curate travel itineraries, global stays, journeys, and partnerships that define modern luxury for personal and business travelers.",
		href: "/services/travel",
	},
];
