import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProduct";
import ReviewCard2 from "../ReviewCard/ReviewCard";
import "../Home/Reviews.css";

const Reviews = () => {
  const [Products, SetProducts] = useProducts();
  const [ProductReview, setProductReview] = useState([]);

  useEffect(() => {
    setProductReview(Products[0]?.Reviews);
    console.log(ProductReview);
  }, [Products]);

  return (
    <div>
      <section className="ReviewBox">
        {ProductReview?.map((Review, index) => (
          <ReviewCard2
            key={index}
            image={Review?.image}
            Username={Review?.Username}
            rate={Review?.rate}
            comment={Review?.comment}
          />
        ))}
      </section>
    </div>
  );
};

export default Reviews;
