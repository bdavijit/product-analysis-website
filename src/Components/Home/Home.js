import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProduct";
import ReviewCard2 from "../ReviewCard/ReviewCard";

import "./Home.css";
import "./Reviews.css";
import "./Common.css";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const Home = () => {
  const [Products, SetProducts] = useProducts();
  const [ProductReview, setProductReview] = useState([]);

  useEffect(() => {
    setProductReview(Products[0]?.Reviews?.slice(0, 3));
    console.log(ProductReview);
  }, [Products]);

  //   const MoreReview = () =>{
  //     Navigate("/blog");
  // }

  return (
    <>
      <section className="CoverBox">
        <div>
          <img className="My-img-fluid" src={Products[0]?.image} alt="" />
        </div>

        <div>
          <h1 style={{ color: "#2827CC" }}>{Products[0]?.name}</h1>
          <p>{Products[0]?.detail}</p>
        </div>
      </section>
      <h1 style={{ color: "#2827CC" }}>Customer Reviews</h1>
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
      <button className="main-button">
        <Link to="/Reviews" style={{ textDecoration: "none", color: "white" }}>
          More
        </Link>
      </button>
    </>
  );
};

export default Home;
