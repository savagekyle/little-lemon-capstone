import React from "react";
import food from "../assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section className="container">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a familiy owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button>Reserve a Table</button>
          </Link>
        </article>
        <div className="img-wrapper">
          <img className="header-img" src={food} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
