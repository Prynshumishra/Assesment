import React, { useState } from "react";
import candereLogo from "../assets/candere.png";

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
