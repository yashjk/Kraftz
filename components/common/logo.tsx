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
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
			>
				{/* Rounded square icon with gradient - matching exact design */}
				<div className="relative w-10 h-10">
					{/* Gradient background - deep blue to lighter blue/cyan */}
					<div
						className="absolute inset-0 rounded-xl animate-gradient"
						style={{
							background:
								"linear-gradient(to right, #1e3a5f 0%, #2d5a8a 50%, #4a90c2 100%)",
							backgroundSize: "150% 150%",
							borderRadius: "10px",
						}}
					/>
					{/* White pi symbol - centered, bold, serif */}
					<motion.div
						className="absolute inset-0 flex items-center justify-center"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
					>
						<span
							className="text-4xl font-bold text-white leading-none select-none"
							style={{
								fontFamily: "serif",
								fontWeight: "bold",
							}}
						>
							π
						</span>
					</motion.div>
				</div>
			</motion.div>

			{/* Kraftz text - K capitalized, rest lowercase, elegant serif, dark blue */}
			<motion.div
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
				className="flex items-center"
			>
				<motion.span
					className="text-4xl md:text-3xl leading-tight group-hover:text-accent transition-colors duration-300"
					style={{
						color: "#1e3a5f",
						fontFamily: "var(--font-playfair), serif",
						fontWeight: 700,
						fontStyle: "normal",
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					K
				</motion.span>
				<motion.span
					className="text-4xl md:text-3xl leading-tight group-hover:text-accent transition-colors duration-300"
					style={{
						color: "#1e3a5f",
						fontFamily: "var(--font-playfair), serif",
						fontWeight: 400,
						fontStyle: "normal",
					}}
					initial={{ opacity: 0, x: -5 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					raftz
				</motion.span>
			</motion.div>
		</Link>
	);
}

export default Logo;
