import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="container">
        <div class="hero">
          <div class="hero__image">
            <div class="hero__image--overlay"></div>
            <div class="hero__child hero__child--primary animation--floating"></div>
            <div class="hero__child hero__child--secondary animation--floating"></div>
            <p class="hero__title animation--title-in">
              The most visited places in Jordan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
