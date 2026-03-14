import React from "react";
import headerBg from "../assets/header.jpg";
import img from "../assets/img.png";
import image from "../assets/image.png";
import logoipsum from "../assets/logoipsum.png";

const partnerLogos = [
  "logo-1",
  "logo-2",
  "logo-3",
  "logo-4",
  "logo-5",
  "logo-6",
];

const Header = () => {
  const heroBackground = {
    backgroundImage: `linear-gradient(260.46deg, rgba(27, 44, 37, 0) 4.01%, #11163B 70.24%), url(${headerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section className="hero" style={heroBackground}>
        <div className="hero-container">
          <div className="hero-left">
            <p className="hero-subtitle">YOUR VISION, OUR EXPERTISE!</p>

            <h1 className="hero-title">
              Award-Winning Digital <br />
              Marketing Agency for <br />
              High-Growth Brands
            </h1>

            <p className="hero-description hero-description-desktop">
              We help brands in speeding up their growth through strategic
              marketing, brand experiences that are powerful and focused on
              performance execution. Our solutions are designed to deliver real,
              measurable ROI as we build like driving traffic, improving
              conversions and creating digital assets.
            </p>

            <p className="hero-description hero-description-mobile">
              Empowering bold ideas, we guide startups from concept to market
              leadership, propelling them toward success with expert support and
              strategic direction.
            </p>

            <div className="hero-actions">
              <button className="hero-btn hero-btn-primary" type="button">
                Get A Free Quote
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <line
                    x1="7"
                    y1="17"
                    x2="17"
                    y2="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="7 7 17 7 17 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>

              <button className="hero-btn hero-btn-secondary" type="button">
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <line
                    x1="7"
                    y1="17"
                    x2="17"
                    y2="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="7 7 17 7 17 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            <p className="hero-partner-note">
              Join 5,000+ companies already growing
            </p>
          </div>

          <div className="hero-right">
            <div className="award-card">
              <div className="award-users">
                <img src={image} alt="Users" />
              </div>

              <h2 className="award-number">50+</h2>
              <p className="award-text">Awards Wining</p>

              <div className="graph">
                <img src={img} alt="Graph" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Partner logos">
        <p className="partner-strip-note">
          Join 5,000+ companies already growing
        </p>
        <div className="partner-strip-container" role="list">
          {partnerLogos.map((logoId) => (
            <div className="partner-logo-item" role="listitem" key={logoId}>
              <img
                src={logoipsum}
                alt=""
                className="partner-logo"
                loading="lazy"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Header;
