import FormContainer from "@/components/contacts/formcontainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Kraftz. Contact us for digital marketing services, hospitality consulting, or luxury travel experiences. We're here to help your business grow intelligently.",
	keywords: [
		"contact Kraftz",
		"get in touch",
		"marketing consultation",
		"hospitality consulting inquiry",
		"travel booking",
		"business inquiry",
	],
	openGraph: {
		title: "Contact Us | Kraftz",
		description:
			"Get in touch with Kraftz for digital marketing services, hospitality consulting, or luxury travel experiences.",
		url: "/contacts",
	},
	twitter: {
		title: "Contact Us | Kraftz",
		description:
			"Get in touch with Kraftz for digital marketing services, hospitality consulting, or luxury travel experiences.",
	},
	alternates: {
		canonical: "/contacts",
	},
};

function Contacts() {
	return <FormContainer />;
}

export default Contacts;
