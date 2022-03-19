import React from "react";

const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index}>
            {rating > index ? (
              <i className="fas fa-star fa"></i>
            ) : (
              <i className="far fa-star fa"></i>
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
