import React from "react";

const impactCards = [
	{
		key: "traffic",
		title: "Traffic Growth",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
	},
	{
		key: "lead",
		title: "Lead quality",
		image:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
	},
	{
		key: "cpa",
		title: "Cost per acquisition",
		image:
			"https://images.unsplash.com/photo-1553484771-898ed465e931?auto=format&fit=crop&w=900&q=80",
	},
	{
		key: "conversion",
		title: "Conversion rate improvement",
		image:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
	},
	{
		key: "engagement",
		title: "Customer engagement",
		image:
			"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
	},
];

export default function ImpactOnClients() {
	return (
		<section className="impact-clients-section" aria-label="Impact on clients">
			<div className="impact-shell">
				<span className="impact-left-chevrons" aria-hidden="true"></span>

				<div className="impact-head">
					<h2 className="impact-title">Impact On Clients</h2>
					<p className="impact-subtitle">Your Growth. Your KPIs. Our Commitment.</p>
				</div>

				<div className="impact-cards-scroll" role="list">
					{impactCards.map((card) => (
						<article className="impact-card" key={card.key} role="listitem">
							<div className="impact-card-media">
								<img src={card.image} alt={card.title} loading="lazy" />
							</div>

							<div className="impact-card-body">
								<span className="impact-card-dot" aria-hidden="true"></span>
								<h3>{card.title}</h3>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
