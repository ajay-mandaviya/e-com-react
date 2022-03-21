import React, { useState } from "react";
import {
  FILTER_BY_DELIVERY,
  FILTER_BY_RATING,
  FILTER_BY_STOCK,
  FILTER_SORT_BY_PRICE,
  FILTER_BY_PRICE_RANGE,
  CLEAR_FILTER,
  FILTER_BY_CATEGORIES,
} from "../../constant/actionTypes";
import { useStateContext } from "../../context/DataContextProvider";

import "./filter.css";

const Filters = () => {
  const {
    data: { categories },
    filterState: {
      inStock,
      fastDelivery,
      byRating,
      sort,
      priceRange,
      filterByCategories,
    },
    filterDispatch,
  } = useStateContext();
  return (
    <div className="filter-container">
      <div className="sidebar-filters filter-head">
        <h3>Filters</h3>
        <button
          className="clear-button text-bold"
          onClick={() => {
            filterDispatch({
              type: CLEAR_FILTER,
            });
          }}
        >
          Clear
        </button>
      </div>
      <div className="filter-section">
        <p className="text-bold">Category</p>
        {categories.map((category) => {
          // console.log("Names are", category.categoryName);
          return (
            <div key={category._id}>
              <label className="filters">
                <input
                  type="checkbox"
                  checked={filterByCategories.includes(category.categoryName)}
                  onChange={() => {
                    filterDispatch({
                      type: FILTER_BY_CATEGORIES,
                      payload: category.categoryName,
                    });
                  }}
                />
                {category.categoryName}
              </label>
            </div>
          );
        })}
      </div>

      <div className="sidebar-filters">
        <p className="text-bold">Price</p>
        <div className="prices">
          <p>100</p>
          <p className="input-price">{priceRange ? priceRange : 500}</p>
          <p>1500</p>
        </div>
        <input
          type="range"
          min="100"
          max="1500"
          value={priceRange}
          onChange={(e) => {
            console.log(e.target.value);
            filterDispatch({
              type: FILTER_BY_PRICE_RANGE,
              payload: e.target.value,
            });
          }}
        />
      </div>

      <div className="sidebar-filters">
        <p className="text-bold">Sort By</p>
        <div>
          <label>
            <input
              type="radio"
              onChange={() => {
                filterDispatch({
                  type: FILTER_SORT_BY_PRICE,
                  payload: "lowToHigh",
                });
              }}
              checked={sort === "lowToHigh" ? true : false}
            />
            Price-Low to High
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              onChange={() => {
                filterDispatch({
                  type: FILTER_SORT_BY_PRICE,
                  payload: "highToLow",
                });
              }}
              checked={sort === "highToLow" ? true : false}
            />
            Price-High to Low
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value={inStock}
              onChange={() => {
                filterDispatch({
                  type: FILTER_BY_STOCK,
                });
              }}
            />
            In Stock Only
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                filterDispatch({
                  type: FILTER_BY_DELIVERY,
                });
                console.log("radio e vale is ", e.target.value);
              }}
              value={fastDelivery}
            />
            Fast Delivery
          </label>
        </div>
      </div>

      {/* rating */}
      <div className="sidebar-filters">
        <p className="text-bold">Rating</p>
        <div>
          <label>
            <input
              type="radio"
              onChange={(e) => {
                console.log("e value on target", e.target);
                filterDispatch({
                  type: FILTER_BY_RATING,
                  payload: 4,
                });
              }}
              checked={byRating === 4 ? true : false}
            />{" "}
            4 Stars & above
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              onChange={() => {
                filterDispatch({
                  type: FILTER_BY_RATING,
                  payload: 3,
                });
              }}
              checked={byRating === 3 ? true : false}
            />{" "}
            3 Stars & above
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              onChange={() => {
                filterDispatch({
                  type: FILTER_BY_RATING,
                  payload: 2,
                });
              }}
              checked={byRating === 2 ? true : false}
            />{" "}
            2 Stars & above
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              onChange={(e) => {
                filterDispatch({
                  type: FILTER_BY_RATING,
                  payload: 1,
                });
                console.log("radio e vale is ", e);
              }}
              checked={byRating === 1 ? true : false}
            />{" "}
            1 Stars & above
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
