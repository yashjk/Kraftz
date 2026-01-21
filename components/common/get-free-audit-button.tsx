"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, X, Mail, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const MotionButton = motion.create("button");
const MotionDiv = motion.create("div");
const MotionA = motion.create("a");
const MotionSpan = motion.create("span");

export function GetFreeAuditButton() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Floating Button */}
			<MotionButton
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#0249A7] to-[#0c5ed9] hover:from-[#033d85] hover:to-[#0a4fb8] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
				whileHover={{ scale: 1.08 }}
				whileTap={{ scale: 0.95 }}
				animate={{
					scale: [1, 1.12, 1],
					boxShadow: [
						"0 10px 25px rgba(2, 73, 167, 0.3)",
						"0 15px 35px rgba(2, 73, 167, 0.5)",
						"0 10px 25px rgba(2, 73, 167, 0.3)",
					],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					repeatType: "reverse",
					ease: [0.4, 0, 0.6, 1],
				}}
			>
				<MotionSpan
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 12, 0],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "reverse",
						ease: [0.4, 0, 0.6, 1],
					}}
					className="inline-block"
				>
					<Sparkles className="w-6 h-6" />
				</MotionSpan>
				<span className="font-semibold text-lg">Get Free Audit</span>
			</MotionButton>

			{/* Contact Dialog */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent
					className="sm:max-w-[600px] p-0 gap-0 overflow-hidden data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-90 duration-300 shadow-xl"
					showCloseButton={false}
				>
					<MotionDiv
						initial={{ opacity: 0, scale: 0.88 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "spring", stiffness: 420, damping: 24 }}
						className="relative"
					>
						{/* Header */}
						<div className="relative bg-gradient-to-br from-[#010918] via-[#03183a] to-[#042a5c] p-6 md:p-8">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
							<div className="absolute inset-x-0 top-0 mx-auto h-40 w-[85%] rounded-full bg-[#0c5ed9]/25 blur-3xl" />

							<div className="relative z-10">
								<button
									onClick={() => setIsOpen(false)}
									className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
									aria-label="Close"
								>
									<X className="w-5 h-5" />
								</button>

								<div className="flex items-center gap-3 mb-2">
									<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
										<Sparkles className="w-6 h-6 text-[#FF7A18]" />
									</div>
									<div>
										<DialogTitle className="typ-section-title text-white mb-1">
											Get Free Audit
										</DialogTitle>
										<p className="typ-body text-white/80 text-sm">
											Connect with the Kraftz team
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<MotionDiv
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1, duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
							className="p-6 md:p-8 bg-background space-y-6"
						>
							{/* Email */}
							<MotionA
								href={`mailto:${contactInfo.email}`}
								className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
								whileHover={{ x: 4 }}
							>
								<div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
									<Mail className="w-6 h-6 text-primary" />
								</div>
								<div className="flex-1">
									<div className="typ-body font-semibold text-foreground mb-1">
										Email
									</div>
									<div className="typ-body text-muted-foreground group-hover:text-primary transition-colors">
										{contactInfo.email}
									</div>
								</div>
							</MotionA>

							{/* Phone Numbers */}
							<div className="p-4 rounded-xl border border-border">
								<div className="flex items-start gap-4 mb-3">
									<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
										<Phone className="w-6 h-6 text-primary" />
									</div>
									<div className="flex-1">
										<div className="typ-body font-semibold text-foreground mb-3">
											Phone
										</div>
										<div className="space-y-2">
											<MotionA
												href={`tel:${contactInfo.phone_uae.replace(/\s/g, "")}`}
												className="block typ-body text-muted-foreground hover:text-primary transition-colors"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_uae}{" "}
												<span className="text-xs">(UAE)</span>
											</MotionA>
											<MotionA
												href={`tel:${contactInfo.phone_ind_2.replace(
													/\s/g,
													""
												)}`}
												className="block typ-body text-muted-foreground hover:text-primary transition-colors"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_ind_2}{" "}
												<span className="text-xs">(India)</span>
											</MotionA>
											<MotionA
												href={`tel:${contactInfo.phone_ind_1.replace(
													/\s/g,
													""
												)}`}
												className="block typ-body text-muted-foreground hover:text-primary transition-colors"
												whileHover={{ x: 4 }}
											>
												{contactInfo.phone_ind_1}{" "}
												<span className="text-xs">(India)</span>
											</MotionA>
										</div>
									</div>
								</div>
							</div>
						</MotionDiv>
					</MotionDiv>
				</DialogContent>
			</Dialog>
		</>
	);
}
