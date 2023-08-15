import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center vh-100">
            <h2 className="contacts-title">Contact Us</h2>
            <p className="contacts-text">
              Have questions or inquiries? Reach out to us!
            </p>
            <div className="contact-info">
              <p>Email: info@shoeshop.com</p>
              <p>Phone: +xxx xxx xxxxxx</p>
              <p>Address: 123 Shoe Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
