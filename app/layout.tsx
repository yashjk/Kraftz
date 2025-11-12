import type React from "react";
import type { Metadata } from "next";
import { Gilda_Display, Jost, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const gilda = Gilda_Display({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-gilda",
});
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-playfair",
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://kraftz.com"
	),
	title: {
		default: "KRAFTz - Krafting Growth Intelligently",
		template: "%s | KRAFTz",
	},
	description:
		"KRAFTz delivers comprehensive digital marketing, hospitality consulting, and travel experience services. We help businesses grow intelligently through strategic marketing, revenue optimization, and exceptional customer experiences.",
	keywords: [
		"digital marketing",
		"hospitality consulting",
		"travel experiences",
		"SEO",
		"brand strategy",
		"revenue management",
		"luxury travel",
		"marketing agency",
		"business growth",
		"digital transformation",
	],
	authors: [{ name: "KRAFTz" }],
	creator: "KRAFTz",
	publisher: "KRAFTz",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: "/icon.svg",
		apple: "/icon.svg",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		title: "KRAFTz - Krafting Growth Intelligently",
		description:
			"KRAFTz delivers comprehensive digital marketing, hospitality consulting, and travel experience services. We help businesses grow intelligently.",
		siteName: "KRAFTz",
		images: [
			{
				url: "/og-image.svg",
				width: 1200,
				height: 630,
				alt: "KRAFTz - Krafting Growth Intelligently",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "KRAFTz - Krafting Growth Intelligently",
		description:
			"KRAFTz delivers comprehensive digital marketing, hospitality consulting, and travel experience services.",
		images: ["/og-image.svg"],
		creator: "@kraftz",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		// Add your verification codes here when available
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// bing: "your-bing-verification-code",
	},
	alternates: {
		canonical: "/",
	},
	category: "Business Services",
	generator: "v0.app",
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "KRAFTz",
	description:
		"KRAFTz delivers comprehensive digital marketing, hospitality consulting, and travel experience services. We help businesses grow intelligently through strategic marketing, revenue optimization, and exceptional customer experiences.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://kraftz.com",
	logo: `${
		process.env.NEXT_PUBLIC_SITE_URL || "https://kraftz.com"
	}/placeholder-logo.png`,
	sameAs: [
		// Add your social media profiles here
		// "https://www.facebook.com/kraftz",
		// "https://www.twitter.com/kraftz",
		// "https://www.linkedin.com/company/kraftz",
		// "https://www.instagram.com/kraftz",
	],
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "Customer Service",
		// Add contact information when available
	},
	areaServed: "Worldwide",
	knowsAbout: [
		"Digital Marketing",
		"Hospitality Consulting",
		"Travel Experiences",
		"SEO",
		"Brand Strategy",
		"Revenue Management",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${gilda.variable} ${jost.variable} ${playfair.variable} antialiased max-w-[1536px] mx-auto`}
			>
				<Script
					id="organization-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
