"use client";

import { motion } from "framer-motion";
import {
	SlideInLeft,
	SlideInRight,
	FadeInUp,
	AnimatedText,
} from "@/lib/animations";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Overview() {
	const [statsRef, statsInView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<section
			id="overview"
			className="relative px-8 md:px-16 lg:px-28 pt-8 md:pt-12 pb-16 md:pb-24 bg-background"
		>
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					<SlideInLeft className="order-2 lg:order-1" triggerOnce={true}>
						<div className="relative">
							<motion.div
								className="absolute -top-10 -left-10 w-32 h-32 bg-accent/15 rounded-full blur-2xl"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<FadeInUp
								className="relative bg-white rounded-2xl p-8 md:p-12 border border-border shadow-lg"
								triggerOnce={true}
							>
								<p className="text-muted-foreground leading-relaxed text-base md:text-lg">
									<AnimatedText
										text="At Kraftz we redefine hospitality through Revenue Management, distribution channel, Artificial Intelligence, Data & Analytics, Business intelligence and digital marketing to create intelligent growth systems for hotels. In today's dynamic market where demand shifts rapidly and competition intensifies, we help hotels not just fill rooms but to maximize every opportunity."
										wordDelay={0.02}
										triggerOnce={true}
									/>
								</p>
							</FadeInUp>
						</div>
					</SlideInLeft>

					<SlideInRight
						className="order-1 lg:order-2 flex flex-col gap-4"
						triggerOnce={true}
					>
						<FadeInUp triggerOnce={true}>
							<h2
								className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#2d5a8a]"
								style={{
									fontFamily: "var(--font-playfair), serif",
									fontWeight: 700,
								}}
							>
								Welcome To KRAFTz
							</h2>
						</FadeInUp>

						<p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg">
							<AnimatedText
								text="Kraftz empowers hotels with smart, data-driven strategies that drive occupancy, optimize pricing and distribution, and elevate guest experiences. By combining deep hospitality expertise, strategic revenue management, data-driven insights, and innovative technology, we help hotels and travel businesses achieve sustainable, measurable growth and long-term commercial success."
								delay={0.1}
								wordDelay={0.02}
								triggerOnce={true}
							/>
						</p>

						<div ref={statsRef} className="flex gap-6 pt-2">
							<FadeInUp delay={0.2} triggerOnce={true}>
								<motion.div
									className="flex flex-col gap-2"
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<h4
										className="text-3xl text-primary"
										style={{
											fontFamily: "var(--font-playfair), serif",
											fontWeight: 700,
										}}
									>
										{statsInView && (
											<CountUp end={40} duration={2} suffix="+" />
										)}
										{!statsInView && "40+"}
									</h4>
									<p className="text-muted-foreground text-sm">
										Years of Experience
									</p>
								</motion.div>
							</FadeInUp>
							<FadeInUp delay={0.3} triggerOnce={true}>
								<motion.div
									className="flex flex-col gap-2"
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<h4
										className="text-3xl text-primary"
										style={{
											fontFamily: "var(--font-playfair), serif",
											fontWeight: 700,
										}}
									>
										{statsInView && (
											<CountUp end={25} duration={2} suffix="%" />
										)}
										{!statsInView && "25%"}
									</h4>
									<p className="text-muted-foreground text-sm">
										Avg RevPAR Growth
									</p>
								</motion.div>
							</FadeInUp>
						</div>
					</SlideInRight>
				</div>
			</div>
		</section>
	);
}

export default Overview;
