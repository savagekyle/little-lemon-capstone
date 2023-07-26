import React from "react";

const Specials = (props) => {
  return (
    <div className="specials">
      <section className="specials-img">
        <img src={props.img} alt="" />
      </section>
      <section className="specials-info">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <h5>Order a delivery </h5>
      </section>
    </div>
  );
};

export default Specials;
