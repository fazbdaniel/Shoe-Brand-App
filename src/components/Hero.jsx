import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <header className="hero container-fluid" id="hero">
      <div className="row align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 hero-content">
          <h1 className="display-4 font-weight-bold">
            Step into Comfort and Style
          </h1>
          <p className="lead">
            Experience the perfect blend of comfort and fashion with our premium footwear collection. Whether you're running, walking, or jumping, our shoes have you covered.
          </p>

          <div className="btn-group mt-4">
            <button className="btn btn-primary btn-lg">Shop Now</button>
            <button className="btn btn-outline-secondary btn-lg">
              Explore Categories
            </button>
          </div>

          <div className="shopping mt-4">
            <p className="mb-2">Also Available On</p>
            <div className="brand-icons">
              <img
                src="/images/amazon.png"
                alt="Amazon Logo"
                className="mr-2"
              />
              <img
                src="/images/flipkart.png"
                alt="Flipkart Logo"
                className="mr-2"
              />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 hero-image">
          <img
            src="/images/hero-image.png"
            alt="Hero"
            className="img-fluid"
          />
        </div>
        <div className="col-md-1"></div>
      </div>
    </header>
  );
};

export default HeroSection;
