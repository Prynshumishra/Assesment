import React from "react";
import headerBg from "../assets/header.jpg";


const Header = () => {
  const heroBackground = {
    backgroundImage:` url(${headerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="hero" style={heroBackground}>

      <div className="hero-container">

        <div className="hero-left">
          <p className="hero-subtitle">YOUR VISION, OUR EXPERTISE!</p>

          <h1 className="hero-title">
            Award-Winning Digital <br />
            Marketing Agency for <br />
            High-Growth Brands
          </h1>

          <p className="hero-description">
            We help brands in speeding up their growth through strategic marketing,
            brand experiences that are powerful and focused on performance
            execution. Our solutions are designed to deliver real, measurable ROI
            as we build like driving traffic, improving conversions and creating
            digital assets.
          </p>

          <button className="hero-btn">
            Get A Free Quote →
          </button>
        </div>


        <div className="hero-right">
          <div className="award-card">

            <div className="award-users">
              <img src="src\assets\image.png" alt="" />
        
            </div>

            <h2>50+</h2>
            <p>Awards Wining</p>

            <div className="graph">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Header;