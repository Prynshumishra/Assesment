import React from "react";
import visionProImage from "../assets/visionpro.png";
import intelCeoImage from "../assets/InterlCeo.png";
import polarIdImage from "../assets/polarid.png";
import logo from "../assets/companylogo.png";

const blogPosts = [
  {
    id: 1,
    title: "The One Part of the Vision Pro That Apple Doesn't Want You to See",
    image:
      visionProImage,
    tags: ["Technology"],
  },
  {
    id: 2,
    title: "Intel's CEO Says AI Is the Key to the Company's Comeback",
    image:
      intelCeoImage,
    tags: ["Technology", "Product"],
  },
  {
    id: 3,
    title: "Polar ID Is the Face ID Rival for Android Phones.",
    image:
      polarIdImage,
    tags: ["Security"],
  },
];

const consultPoints = [
  "60+ Team Members",
  "Affordable Pricing Plan",
  "Growth Oriented Strategies",
];


function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5M3 9h4v12H3zM10 9h3.8v1.7h.05A4.15 4.15 0 0 1 17.6 8c3.6 0 4.4 2.37 4.4 5.46V21h-4v-6.64c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V21h-4z" />
      </svg>
    );
  }

  if (type === "discord") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.5 5.5A15.5 15.5 0 0 0 15.7 4l-.2.4a13 13 0 0 0-7 0L8.3 4a15 15 0 0 0-3.8 1.5C2 9.3 1.4 13 1.6 16.6a15 15 0 0 0 4.6 2.3l.9-1.4a9 9 0 0 1-1.5-.7l.4-.3a11 11 0 0 0 11.9 0l.4.3c-.5.3-1 .5-1.5.7l.9 1.4a15 15 0 0 0 4.6-2.3c.4-4.1-.7-7.7-2.8-11.1M8.5 14.3c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8c.9 0 1.6.8 1.6 1.8s-.7 1.8-1.6 1.8m7 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8c.9 0 1.6.8 1.6 1.8s-.7 1.8-1.6 1.8" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 3h4.3l4.3 6.1L17 3h3.7l-7.2 8.2L21.3 21H17l-4.8-6.8L6.3 21H2.6l7.5-8.5z" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.9 4.5 18.7 20a1.2 1.2 0 0 1-1.8.8l-5-3.7-2.6 2.5c-.3.3-.6.5-1 .5l.4-5.2L18.4 6c.4-.3-.1-.5-.6-.2L6.1 13.2 1 11.7c-1.1-.3-1.1-1.1.2-1.6l19.9-7.7c.9-.4 1.7.2 1.4 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3V8.2c0-.9.2-1.5 1.6-1.5h1.7V4a21 21 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.7v8z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export default function LatestBlogAndFooter() {
  return (
    <section className="latest-blog-footer-wrap" aria-label="Latest blog and footer">
      <div className="latest-blog-shell">
        <header className="latest-blog-head">
          <h2>Our Latest Blog and News</h2>

          <div className="latest-blog-head-right">
            <p>
              Delve into real-world examples where our Technology
              <br />
              Solutions, Consulting and Strategy,
            </p>

            <div className="latest-blog-nav" aria-label="Blog navigation">
              <button type="button" aria-label="Previous blog post">
                &larr;
              </button>
              <button type="button" aria-label="Next blog post">
                &rarr;
              </button>
            </div>
          </div>
        </header>

        <div className="latest-blog-grid" role="list">
          {blogPosts.map((post) => (
            <article className="latest-blog-card" key={post.id} role="listitem">
              <div className="latest-blog-media">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="latest-blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <a href="#" className="latest-blog-link">
                Read More -&gt;
              </a>
            </article>
          ))}
        </div>

        <div className="consult-banner">
          <span className="consult-spark consult-spark-left" aria-hidden="true">+</span>
          <span className="consult-spark consult-spark-right" aria-hidden="true">+</span>

          <h3>Do you want truly impressive results?</h3>
          <p>
            Ready to elevate your online presence? Get in touch with us today for personalized
            solutions tailored to your business needs.
          </p>

          <ul className="consult-points" aria-label="Consultation highlights">
            {consultPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <button type="button" className="consult-btn">
            Book a Free Consultation
          </button>
        </div>
      </div>

      <footer className="main-footer">
        <div className="main-footer-shell">
          <div className="footer-brand-block">
                    <a href="/" aria-label="Go to home">
                      <img src={logo} alt="BeOnline logo" className="logo" />
                    </a>
            <p>
              Bee Online takes pride in being a valued partner, providing customized solutions
              designed to help you drive revenue and reach your goals.
            </p>
            <div className="footer-socials" aria-label="Social links">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Discord">
                <SocialIcon type="discord" />
              </a>
              <a href="#" className="footer-social-link" aria-label="X">
                <SocialIcon type="x" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Telegram">
                <SocialIcon type="telegram" />
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h5>Company</h5>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-links-col">
            <h5>Support</h5>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Conditions</a>
          </div>

          <div className="footer-subscribe-col">
            <h5>Subscribe Now</h5>
            <form className="footer-subscribe-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Enter email address" aria-label="Enter email address" />
              <button type="submit" aria-label="Subscribe">
                ↗
              </button>
            </form>

            <label className="footer-consent">
              <span className="footer-consent-check" aria-hidden="true">✓</span>
              <span>by signing up, you agree to receive mail</span>
            </label>
          </div>
        </div>

        <div className="footer-meta-row">
          <span>© Copyright 2024 Beeonline</span>
          <span className="footer-meta-right">
            <i className="footer-location-icon" aria-hidden="true">
              <LocationIcon />
            </i>
            <span>
              #103,Quantum Tower, Off, Swami Vivekananda Rd, Malad West, Mumbai,
              Maharashtra 400064
            </span>
          </span>
        </div>
      </footer>
    </section>
  );
}