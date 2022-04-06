import React, { useEffect } from "react";
import axios from "axios";
import "./home.css";
import { staticCategory, categoryData } from "../../constant/data";
import { mainbanner_1 } from "../../assets";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";

const Home = () => {
  useDocumentTitle("Men's Shop");
  return (
    <>
      <div className="category-container">
        {staticCategory.map((data, index) => {
          return (
            <Link to="/product" key={index} className="category-item">
              <img src={data.img} alt="not found" className="responsive-img" />
            </Link>
          );
        })}
      </div>
      <div className="text-heading-container">
        <h1>
          <span>NEW LAUNCH</span>
        </h1>
      </div>
      {/* poster */}

      <div className="poster-img-container">
        <Link to="/product">
          <img
            src={mainbanner_1}
            alt="banner"
            className="responsive-poster-img"
          />
        </Link>
      </div>
      {/* more items */}
      <div className="more-item">
        {categoryData.map((data, index) => {
          return (
            <div className="card-horizontal" key={index}>
              <div className="card-img">
                <img
                  src={data.img}
                  alt="product-image"
                  className="responsive-img"
                />
              </div>
              <span className="tag-badges">{data.tag}</span>
              <div className="card-horizontal-description">
                <div>
                  <h2 className="card-title">{data.title}</h2>
                  <span className="card-subtitle">{data.subTitle}</span>
                </div>
                <div>
                  <h2 className="card-title">{data.bottomTitle}</h2>
                  <p className="card-info">{data.bottomInfo}</p>
                  <p className="off-rate">{data.offRate}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
