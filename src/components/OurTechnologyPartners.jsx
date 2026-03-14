import React from "react";
import microsoftLogo from "../assets/microsoft.png";
import appleLogo from "../assets/apple.png";
import googlePartnerLogo from "../assets/googlepartner.png";
import metaLogo from "../assets/meta.png";
import awsLogo from "../assets/aws.png";
import semrushLogo from "../assets/semrush.png";
import ahrefsLogo from "../assets/408dd955666317a61ff560158fedf2beb46ea371.png";
import lookerLogo from "../assets/looker.png";
import metaToolsLogo from "../assets/metaa.png";
import webflowLogo from "../assets/webflow.png";
import figmaLogo from "../assets/figma.png";
import shopifyLogo from "../assets/shopify.png";
import zapierLogo from "../assets/zapier.png";

const topPartners = [
	{ id: "microsoft", name: "Microsoft", logo: microsoftLogo, sizeClass: "tech-logo-microsoft" },
	{ id: "apple", name: "Apple", logo: appleLogo, sizeClass: "tech-logo-apple" },
	{ id: "google", name: "Google Partner", logo: googlePartnerLogo, sizeClass: "tech-logo-google" },
	{ id: "meta", name: "Meta", logo: metaLogo, sizeClass: "tech-logo-meta" },
	{ id: "aws", name: "AWS", logo: awsLogo, sizeClass: "tech-logo-aws" },
];

const licensedTools = [
	{ id: "semrush", name: "SEMRUSH", logo: semrushLogo, sizeClass: "tech-logo-semrush" },
	{ id: "ahrefs", name: "Ahrefs", logo: ahrefsLogo, sizeClass: "tech-logo-ahrefs" },
	{ id: "looker", name: "Looker", logo: lookerLogo, sizeClass: "tech-logo-looker" },
	{ id: "meta-tools", name: "Meta", logo: metaToolsLogo, sizeClass: "tech-logo-meta-tools" },
	{ id: "webflow", name: "Webflow", logo: webflowLogo, sizeClass: "tech-logo-webflow" },
	{ id: "figma", name: "Figma", logo: figmaLogo, sizeClass: "tech-logo-figma" },
	{ id: "shopify", name: "Shopify", logo: shopifyLogo, sizeClass: "tech-logo-shopify" },
	{ id: "zapier", name: "Zapier", logo: zapierLogo, sizeClass: "tech-logo-zapier" },
];

export default function OurTechnologyPartners() {
	return (
		<section className="tech-partners-section" aria-label="Our technology partners">
			<div className="tech-top-panel">
				<h2 className="tech-top-title">
					Our <span>Technology</span> Partners
				</h2>

				<div className="tech-top-grid" role="list">
					{topPartners.map((partner) => (
						<article className="tech-card tech-card-top" role="listitem" key={partner.id}>
							<div className="tech-logo-wrap" aria-label={partner.name}>
								<img
									src={partner.logo}
									alt={`${partner.name} logo`}
									className={`tech-logo-image tech-logo-top ${partner.sizeClass}`}
									loading="lazy"
								/>
							</div>
						</article>
					))}
				</div>
			</div>

			<div className="tech-bottom-panel">
				<h3 className="tech-bottom-title">Licensed + Partnered Tools</h3>

				<div className="tech-bottom-grid" role="list">
					{licensedTools.map((tool) => (
						<article className="tech-card tech-card-bottom" role="listitem" key={tool.id}>
							<div className="tech-logo-wrap" aria-label={tool.name}>
								<img
									src={tool.logo}
									alt={`${tool.name} logo`}
									className={`tech-logo-image tech-logo-bottom ${tool.sizeClass}`}
									loading="lazy"
								/>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
