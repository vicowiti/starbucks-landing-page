import React from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

import First from "./assets/1.jpg";
import Second from "./assets/1.jpg";
import Third from "./assets/1.jpg";

const App = () => {
  return (
    <div>
      <NavBar />
      <ProductCard
        img={First}
        bgColor="tomato"
        header="Cold brew for two"
        text="Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream."
        order={1}
      />
    </div>
  );
};

export default App;
