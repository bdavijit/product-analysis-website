import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activebtn, setactivebtn] = useState("");

  const activeLink = async () => {
    let Url = window.location.href;
    if (Url.includes("Reviews")) {
      setactivebtn("Reviews");
    } else if (Url.includes("Dashboard")) {
      setactivebtn("Dashboard");
    } else if (Url.includes("Blogs")) {
      setactivebtn("Blogs");
    } else if (Url.includes("Abouts")) {
      setactivebtn("Abouts");
    } else {
      setactivebtn("Home");
    }
    // refreshPage();
  };

  return (
    <>
      <header className="MainBoxofHeder">
        <nav className="nav-box">
          <Link
            className={`headerLink ${activebtn === "Home" ? "" : ""}`}
            onClick={activeLink}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`headerLink ${activebtn === "Reviews" ? "" : ""}`}
            onClick={activeLink}
            to="/Reviews"
          >
            Reviews
          </Link>
          <Link
            className={`headerLink ${activebtn === "Dashboard" ? "" : ""}`}
            onClick={activeLink}
            to="/Dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={`headerLink ${activebtn === "Blogs" ? "" : ""}`}
            onClick={activeLink}
            to="/Blogs"
          >
            Blogs
          </Link>
          <Link
            className={`headerLink ${activebtn === "Abouts" ? "" : ""}`}
            onClick={activeLink}
            to="/About"
          >
            About
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
