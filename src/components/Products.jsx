import React, { useRef } from "react";
import "./products.css";
import productsData from "../assets/products.json";

const Products = () => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollDistance = 300;
    if (carouselRef.current) {
      if (direction === "left") {
        console.log("Scrolling left");
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft - scrollDistance,
          behavior: "smooth",
        });
      } else {
        console.log("Scrolling right");
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="product-page container mt-4" id="products">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h4 className="sub-title">Best Choices</h4>
          <h3 className="product-title">Best Shoes</h3>
        </div>

        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <div className="scroll-icon mr-2" onClick={() => handleScroll("left")}>
            <i className="fas fa-chevron-left"></i>
          </div>

          <div className="scroll-icon-spacing"></div>

          <div className="scroll-icon ml-2" onClick={() => handleScroll("right")}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="product-cards mt-4" ref={carouselRef}>
            {productsData.map((product) => (
              <div
                key={product.id}
                className="product-card card"
              >
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
  );
};

export default Products;
