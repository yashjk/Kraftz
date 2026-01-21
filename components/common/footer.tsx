"use client";

import Link from "next/link";
import { contactInfo } from "@/lib/data";
import Logo from "./logo";

function Footer() {
	const services = [
		{ href: "/services/hospitality", label: "Hospitality Solutions" },
		{ href: "/services/ota-management", label: "OTA Management" },
		{ href: "/services/digital-marketing", label: "Digital Marketing" },
		{ href: "/services/travel", label: "Travel" },
	];

	return (
		<>
			<footer className="bg-background">
				<div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 py-7 text-center sm:px-6">
					<Logo />
					<p className="typ-body text-muted-foreground max-w-md">
          Krafted by Experts. Designed for Hotel Growth.
					</p>
					<div className="flex flex-wrap justify-center gap-12 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
						{services.map((service) => (
							<Link
								key={service.href}
								href={service.href}
								className="hover:text-[#0249A7] transition-colors"
							>
								{service.label}
							</Link>
						))}
					</div>
					<div className="space-y-1 typ-body text-muted-foreground">
						<a
							href={`mailto:${contactInfo.email}`}
							className="block hover:text-[#0249A7] transition-colors"
						>
							{contactInfo.email}
						</a>
						{[
							contactInfo.phone_uae,
							contactInfo.phone_ind_2,
							contactInfo.phone_ind_1,
						].map((phone) => (
							<a
								key={phone}
								href={`tel:${phone}`}
								className="block hover:text-[#0249A7] transition-colors"
							>
								{phone}
							</a>
						))}
					</div>
				</div>

				<div className="border-t border-border px-4 py-3 text-center text-xs md:text-md text-muted-foreground sm:px-6">
					<div className="mx-auto flex max-w-5xl flex-col items-center gap-2 sm:flex-row sm:justify-between">
						<p>
							© {new Date().getFullYear()} KRAFTz Hospitality and Travel
							Solutions F.Z.C . All rights reserved.
						</p>
						<div className="flex items-center gap-4">
							<Link href="#" className="hover:text-[#0249A7] transition-colors">
								Privacy Policy
							</Link>
							<Link href="#" className="hover:text-[#0249A7] transition-colors">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
