"use client";

import ServicesHero from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import AnimatedParagraph from "@/components/services/animated-paragraph";
import ConnectCTA from "@/components/common/connect-cta";

function DigitalMarketingPageClient() {
	return (
		<>
			<ServicesHero
				title="Digital Marketing Solutions"
				category="Services"
				imageSrc="/digital-marketing-hero.jpg"
				description="Kraftz Digital Marketing Solutions transforms how brands are seen, searched, and remembered. We blend strategy, storytelling, and smart technology to help mid-size, large, and new-age businesses dominate the digital landscape. Every campaign we create aligns with the client's vision, mission, and OKRs — ensuring marketing delivers measurable business impact, not just impressions."
				highlights={[
					{ label: "Search Engine Optimization (SEO)", id: "seo-search" },
					{ label: "Performance Marketing (PPC & Media Buying)", id: "performance-marketing" },
					{ label: "Social Media Strategy & Management", id: "social-media" },
					{ label: "Content Strategy & Creation", id: "content-strategy" },
					{ label: "AI Marketing & Automation", id: "ai-marketing" },
					{ label: "Analytics & Performance Insights", id: "analytics-insights" }
				]}
			/>

			<ServiceOverview
				id="digital-strategy-consulting"
				title="Digital Strategy & Consulting"
			>
				<AnimatedParagraph
					text="Kraftz We start by decoding your business DNA — understanding your market, goals, and audience. Kraftz builds tailored digital strategies that connect every dot between brand, content, and conversion. From marketing roadmaps to digital transformation blueprints, our consulting ensures every rupee and dirham invested drives tangible ROI."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="seo-search"
				title="Search Engine Optimization (SEO)"
			>
				<AnimatedParagraph
					text="Visibility begins with discoverability. Kraftz develops SEO ecosystems that go beyond keywords — we focus on intent, authority, and experience. Our team ensures your brand ranks high across Google, Bing, and AI-driven platforms like ChatGPT and Copilot by optimizing on-page, off-page, and technical SEO with precision."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="performance-marketing"
				title="Performance Marketing (PPC & Media Buying)"
			>
				<AnimatedParagraph
					text="We deliver measurable growth through targeted paid campaigns across Google Ads, Meta, LinkedIn, and programmatic platforms. Kraftz's performance marketing team designs campaigns rooted in audience insights, creative excellence, and continuous optimization — ensuring maximum visibility and ROI."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="social-media"
				title="Social Media Strategy & Management"
			>
				<AnimatedParagraph
					text="We turn brands into communities. Kraftz creates and manages high-impact social media ecosystems that drive engagement, advocacy, and loyalty. Our approach blends trend intelligence with brand storytelling, ensuring every post adds measurable value."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="content-strategy"
				title="Content Strategy & Creation"
			>
				<AnimatedParagraph
					text="Great brands tell better stories. Kraftz creates compelling digital content — from brand films, blogs, and influencer collaborations to thought leadership and interactive campaigns. Each piece is optimized for storytelling, search, and shareability."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Website & Experience Design"
			>
				<AnimatedParagraph
					text="Your website is your digital first impression — we make it unforgettable. Kraftz designs and develops sleek, fast, and conversion-optimized websites that balance creativity with clarity. Every design reflects your brand ethos while driving measurable action."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="ai-marketing"
				title="AI Marketing & Automation"
			>
				<AnimatedParagraph
					text="Kraftz leverages AI to deliver marketing that thinks ahead. From predictive analytics and chatbots to personalized campaigns and automation flows, we integrate intelligent systems that amplify performance and efficiency."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				id="analytics-insights"
				title="Analytics & Performance Insights"
			>
				<AnimatedParagraph
					text="We measure what matters. Kraftz deploys advanced analytics frameworks to track campaign performance, user behavior, and conversion patterns. Every insight fuels smarter decisions and stronger outcomes."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Brand Reputation & Communication"
			>
				<AnimatedParagraph
					text="Beyond metrics, Kraftz builds perception. Our communication strategies align brand voice with customer emotion, ensuring consistency across touchpoints — from social posts to PR releases and leadership positioning."
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
			</ServiceOverview>
			<ServiceOverview
				title="Influencer Marketing"
			>
				<AnimatedParagraph
					text="At Kraftz, we help brands to expand their reach and engagement through strategic influencer partnerships. From our extensive network of influencers we select the right influencers, creating compelling content, and tracking performance, we drive brand awareness, trust, and conversions — ensuring measurable results and meaningful audience connections"
					className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
				/>
				<div className="mt-6">
					<AnimatedParagraph
						text="Digital transformation is no longer optional — it's essential. Kraftz empowers brands to not only adapt but to lead in the age of AI and experience-driven marketing. Whether you're a startup or a global enterprise, we'll craft your digital story with precision and purpose."
						className="text-muted-foreground leading-relaxed text-[18px] md:text-lg"
					/>
				</div>
			</ServiceOverview>
			<ConnectCTA />
		</>
	);
}

export default DigitalMarketingPageClient;
