// src/components/Banner.tsx
import React from "react";
import "../styles/Banner.css";
import "../assets/banner.png";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Data for Sustainability</h1>
          <h3>Building Resilient Cities and Food Systems</h3>
          <p>
            Welcome to this year's DataThon! Leverage your data science
            expertise to develop innovative solutions that support sustainable
            development goals, including <b>zero hunger</b> and{" "}
            <b>sustainable cities and communities</b>. By analyzing data trends
            and patterns, you can identify opportunities for improvement,
            optimize resource allocation, and create impactful strategies that
            drive progress towards a more sustainable and equitable future for
            all.
          </p>
          <button>Learn more</button>
        </div>
        <div className="banner-image">
          <img src="banner.png" alt="Sustainability" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
