"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Logo({ className = "" }: { className?: string }) {
	return (
		<Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="relative"
			>
				{/* Logo icon from image */}
				<img
					src="/kraftz-logo.png"
					alt="Kraftz Logo"
					className="h-24 w-auto object-contain"
				/>
			</motion.div>
		</Link>
	);
}

export default Logo;
