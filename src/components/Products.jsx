import React, { useRef } from "react";
import "./products.css";
import productsData from "../assets/products.json";

const Products = () => {
  const carouselRef = useRef(null); // Create a ref for the carousel container
  const handleScroll = (direction) => {
    const scrollDistance = 300; // Adjust as needed
    if (carouselRef.current) {
      if (direction === "left") {
        console.log("Scrolling left");
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft - scrollDistance,
          behavior: "smooth", // Add smooth scrolling behavior
        });
      } else {
        console.log("Scrolling right");
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + scrollDistance,
          behavior: "smooth", // Add smooth scrolling behavior
        });
      }
    }
  };

  return (
    <div className="product-page container" id="products">
      <div className="row align-items-center">
        <div className="col-6">
          <h4 className="sub-title">Best Choices</h4>
          <h3 className="product-title">Best Shoes</h3>
        </div>

        <div className="col-6 d-flex justify-content-end align-items-center">
          {/* Scrolling left icon */}
          <div className="scroll-icon" onClick={() => handleScroll("left")}>
            <i className="fas fa-chevron-left"></i>
          </div>

          {/* Spacing between icons */}
          <div className="scroll-icon-spacing"></div>

          {/* Scrolling right icon */}
          <div className="scroll-icon" onClick={() => handleScroll("right")}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="product-carousel" ref={carouselRef}>
            <div className="product-cards">
              {productsData.map((product) => (
                <div key={product.id} className="product-card card">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${product.image}`}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-primary">Buy Now</button>
                      <p className="text-muted">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;