import React, { useState } from "react";
import candereLogo from "../assets/candere.png";
import awardOne from "../assets/award1.png";
import awardTwo from "../assets/award2.png";

const testimonialAwards = [
	{ id: "award-1", image: awardTwo, alt: "Top 100 companies Clutch Global 2022 badge" },
	{ id: "award-2", image: awardOne, alt: "Clutch award badge" },
	{ id: "award-3", image: awardTwo, alt: "Top 100 companies Clutch Global 2022 badge" },
];

const testimonials = [
	{
		id: 1,
		heading: "Superb Work! Amazing Performance!",
		body:
			"Explore BO's behind-the-scenes impact when we lowered the CAC from INR 9,960 to INR 4,500 through strategic digital marketing.",
		company: "Candere | Kalyan Jewellers",
		subCompany: "A Kalyan Jewellers Company",
		logoImage: candereLogo,
	},
	
];

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrevious = () => {
		setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
	};

	const handleNext = () => {
		setActiveIndex((current) => (current + 1) % testimonials.length);
	};

	const activeTestimonial = testimonials[activeIndex];

	return (
		<section className="testimonials-section" aria-label="Testimonials">
			<div className="testimonials-shell">
				<aside className="testimonials-left">
					<h2>Our Testimonial</h2>
					<p>A SYMPHONY OF SATISFIED VOICES!</p>

					<div className="testimonials-awards" aria-label="Our awards">
						<h3 className="testimonials-awards-title">Our Awards:</h3>
						<div className="testimonials-awards-row" role="list">
							{testimonialAwards.map((award) => (
								<div className="testimonials-award-item" role="listitem" key={award.id}>
									<img src={award.image} alt={award.alt} className="testimonials-award-image" />
								</div>
							))}
						</div>
						<p className="testimonials-award-description">Embark on an inspiring journey through the harmonious <br /> echoes of client satisfaction.</p>
					</div>
				</aside>

				<article className="testimonial-card">
					<span className="testimonial-quote-open" aria-hidden="true">
						&ldquo;
					</span>

					<h3>{activeTestimonial.heading}</h3>

					<p className="testimonial-copy">{activeTestimonial.body}</p>

					<span className="testimonial-quote-close" aria-hidden="true">
						&rdquo;
					</span>

					<div className="testimonial-divider"></div>

					<div className="testimonial-brand-row">
						<div className="testimonial-brand-logos" aria-label="Brand logos">
							<img
								src={activeTestimonial.logoImage}
								alt="Candere logo"
								className="testimonial-logo-image"
							/>
						</div>

						<div className="testimonial-brand-copy-block">
							<strong>{activeTestimonial.company}</strong>
							<span>{activeTestimonial.subCompany}</span>
						</div>
					</div>

					<div className="testimonial-controls">
						<button type="button" onClick={handlePrevious} aria-label="Previous testimonial">
							&larr;
						</button>
						<span>
							{activeIndex + 1} / {testimonials.length}
						</span>
						<button type="button" onClick={handleNext} aria-label="Next testimonial">
							&rarr;
						</button>
					</div>
				</article>
			</div>
		</section>
	);
}
