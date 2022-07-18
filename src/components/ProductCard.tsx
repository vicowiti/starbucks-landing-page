import React from "react";
import Button from "./Button";

interface ProductCardProps {
  img: string;
  bgColor: string;
  header: string;
  text: string;
  order: number;
  flex?: string;
}

const ProductCard = ({
  img,
  bgColor,
  header,
  text,
  flex,
}: ProductCardProps) => {
  return (
    <article
      className="my-[5vh] w-full h-[90vh] flex text-white"
      style={{
        backgroundColor: bgColor,
        flexDirection: flex ? "row-reverse" : "row",
      }}
    >
      <div className="w-[50vw] flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          <header className="text-center text-6xl font-bold my-5 w-[400px]">
            {header}
          </header>
          <body className="text-center text-2xl font-mono mb-14 w-[600px]">
            {text}
          </body>
          <footer>
            <Button text="Learn more" borderColor="white" padding={7} />
          </footer>
        </div>
      </div>
      <div className="w-[50vw] ">
        <img src={img} alt="product image" className="h-[90vh] w-[100%]" />
      </div>
    </article>
  );
};

export default ProductCard;
