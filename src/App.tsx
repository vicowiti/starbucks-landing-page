import React from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

import First from "./assets/1.jpg";
import Second from "./assets/2.jpg";
import Third from "./assets/3.jpg";

const App = () => {
  return (
    <div>
      <NavBar />
      <ProductCard
        img={First}
        bgColor="#f06464"
        header="Cold brew for two"
        text="Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream."
        order={1}
      />

      <ProductCard
        img={Second}
        bgColor="#fa91aa"
        header="Refresh on repeat"
        text="Our vibrant Strawberry Açaí Lemonade and Mango Dragonfruit Lemonade Starbucks Refreshers® beverages are oh so chill."
        order={1}
        flex="row-reverse"
      />

      <ProductCard
        img={Third}
        bgColor="#007042"
        header="Hooray for cookies and cake"
        text="The new Cookies & Cream Cake Pop is a happy mix of chocolate cake, crumbled cookies and white chocolaty icing."
        order={1}
      />
    </div>
  );
};

export default App;
