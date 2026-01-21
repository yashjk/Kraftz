"use client";

import { motion } from "framer-motion";

function Hero() {
	return (
		<section className="relative h-[80vh] bg-linear-to-b from-brand to-brand/90 overflow-hidden w-full px-6 md:px-0">
			<div className="absolute inset-0 opacity-30 pointer-events-none">
				<div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
			</div>

			<div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center text-center text-background">
				<h2 className="typ-page-title tracking-tight">About Us</h2>
			</div>
		</section>
	);
}

export default Hero;
