import React, { useState } from "react";

const services = [
  {
    key: "seo",
    title: "SEO",
    description:
      "We improve your website's ranking, increase organic traffic, and build long-term visibility through technical excellence, strategic content, and continuous optimization.",
    areaClass: "service-card-seo",
    iconType: "seo",
  },
  {
    key: "performance",
    title: "Performance Marketing",
    description:
      "Our team increases your ROI by creating results-based paid advertising campaigns on Google, Meta, and other platforms.",
    areaClass: "service-card-performance",
    iconType: "performance",
  },
  {
    key: "development",
    title: "Website Development",
    description:
      "At Bee Online, we offer customised website development options that are suitable for your business needs and goals.",
    areaClass: "service-card-web",
    iconType: "web",
  },
  {
    key: "maintenance",
    title: "Website Maintenance",
    description:
      "We take care of security updates, backups, monitoring, and fixes in order to maintain your online presence that operates without interruption at all 24/7.",
    areaClass: "service-card-maintenance",
    iconType: "maintenance",
  },
  {
    key: "uiux",
    title: "UI/UX Design",
    description:
      "We deliver user-centered design that transforms customer journeys, improves engagement, and improves conversion rates across your entire digital ecosystem.",
    areaClass: "service-card-uiux",
    iconType: "uiux",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="service-arrow"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

function ServiceIcon({ type }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "service-glyph",
    "aria-hidden": true,
  };

  if (type === "seo") {
    return (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="5.5" />
        <path d="M21 21l-4.2-4.2" />
        <path d="M8.9 9.5h4.2M8.9 11.6h5M8.9 13.7h3.5" />
      </svg>
    );
  }

  if (type === "performance") {
    return (
      <svg {...iconProps}>
        <path d="M4 20h16" />
        <path d="M6 20v-7M11 20v-10M16 20v-5" />
        <path d="m5.5 12.5 5-3 3.5 2 4-3" />
      </svg>
    );
  }

  if (type === "web") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="13" rx="2" />
        <path d="M3 9h18M9 13l-2.5 2.5M9 13l-2.5-2.5M15 10.5 17.5 13 15 15.5" />
      </svg>
    );
  }

  if (type === "maintenance") {
    return (
      <svg {...iconProps}>
        <path d="M14 6a4 4 0 0 0 0 8 4 4 0 0 0 0-8Z" />
        <path d="M3 18h5M3 6h5M2 12h4M19 12h3" />
        <path d="m15.2 9.1 1.4 1.4M12.8 12.2l1.4 1.4" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 18v2M16 18v2M10.2 14.8l2-2 2.7 2.7" />
    </svg>
  );
}

export default function ServicesSection() {
  const [activeServiceKey, setActiveServiceKey] = useState(null);

  const handleCardActivate = (key) => {
    setActiveServiceKey(key);
  };

  return (
    <section className="services-section" aria-label="What we offer">
      <div className="services-shell">
        <div className="services-intro">
          <h2 className="services-title">What We Offer</h2>
          <p className="services-intro-copy">
            "Bee Online delivers tailored digital marketing, MLM strategies,
            website development and AI/ML-driven campaigns for your business."
          </p>
          <button type="button" className="talk-btn">
            <span>Let's Talk</span>
            <ArrowIcon />
          </button>
        </div>

        {services.map((service) => (
          <article
  key={service.key}
  className={`service-card ${service.areaClass} ${
    activeServiceKey === service.key ? "service-card-highlight" : ""
  }`}
  onMouseEnter={() => handleCardActivate(service.key)}
  onMouseLeave={() => handleCardActivate(null)}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardActivate(service.key);
    }
  }}
  role="button"
  tabIndex={0}
>
  <div className="service-head">
    <span className="service-icon-wrap">
      <ServiceIcon type={service.iconType} />
    </span>

    <h3>{service.title}</h3>
  </div>

  <p>{service.description}</p>

  <span className="service-link">
    <span>Learn More</span>
    <ArrowIcon />
  </span>
</article>
        ))}
      </div>
    </section>
  );
}