import FormContainer from "@/components/contacts/formcontainer";
import Hero from "@/components/contacts/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with KRAFTz. Contact us for digital marketing services, hospitality consulting, or luxury travel experiences. We're here to help your business grow intelligently.",
	keywords: [
		"contact KRAFTz",
		"get in touch",
		"marketing consultation",
		"hospitality consulting inquiry",
		"travel booking",
		"business inquiry",
	],
	openGraph: {
		title: "Contact Us | KRAFTz",
		description:
			"Get in touch with KRAFTz for digital marketing services, hospitality consulting, or luxury travel experiences.",
		url: "/contacts",
	},
	twitter: {
		title: "Contact Us | KRAFTz",
		description:
			"Get in touch with KRAFTz for digital marketing services, hospitality consulting, or luxury travel experiences.",
	},
	alternates: {
		canonical: "/contacts",
	},
};

function Contacts() {
	return <FormContainer />;
}

export default Contacts;
