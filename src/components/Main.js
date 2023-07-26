import React from "react";
import GreekSalad from "../assets/images/greek salad.jpg";
import Bruchetta from "../assets/images/bruchetta.svg";
import LemonDessert from "../assets/images/lemon dessert.jpg";
import Specials from "./Specials";

const Main = () => {
  return (
    <main className="container">
      <section className="specials-header">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className="specials-items">
        <Specials
          img={GreekSalad}
          title="Greek salad"
          content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <Specials
          img={Bruchetta}
          title="Bruchetta"
          content="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <Specials
          img={LemonDessert}
          title="Lemon Dessert"
          content="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </section>
    </main>
  );
};

export default Main;
