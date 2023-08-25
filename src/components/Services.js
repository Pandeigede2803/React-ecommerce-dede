import React from "react";
import { services } from "../utils/constants";
import "./services.css";

const Services = () => {
  return (
    <div className="section-center">
      <article className="header">
      <h3 className="h3">Produk Custom <br/>Sesuai Keinginan Kamu</h3></article>
      <div className="services-center">
        {services.map((servis) => (
          <article className="service">
            <span className="icon">{servis.icon}</span>
            <h4>
              {servis.title}
            </h4>
            <p>{servis.text}</p>
          </article>
        ))}
      </div>

      {/* {services.map((product) => (
            
          ))} */}
    </div>
  );
};

export default Services;
