import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
              <h2 className="section-heading">About</h2>
              <p className="about-text">
                Welcome to our Shoe Shop! We're passionate about providing you with the best in footwear fashion. Our carefully curated collection features a diverse range of shoes that combine style, comfort, and quality. With a keen eye for trends and an unwavering commitment to customer satisfaction, we aim to be your go-to destination for finding the perfect pair of shoes for every occasion. Whether you're seeking the latest in athletic performance or a chic addition to your wardrobe, our team is dedicated to helping you put your best foot forward. Join us on this exciting journey and step into a world of fashionable possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
