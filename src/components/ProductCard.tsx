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
      className="my-[5vh] rounded w-full h-[130vh] md:h-[90vh] md:flex  text-white flex-row-reverse md:flex-row"
      style={{
        backgroundColor: bgColor,
        // flexDirection: flex ? "row-reverse" : "row",
      }}
    >
      <div className="h-[65vh] w-[100%] lg:w-[50vw] flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          <header className="text-center px-3 text-5xl lg:text-6xl  font-bold my-5 w-[100%] lg:w-[400px]">
            {header}
          </header>
          <main className="text-center text-xl lg:text-2xl font-light mb-14 w-[100%] lg:w-[600px]">
            {text}
          </main>
          <footer className="mb-3">
            <Button text="Learn more" borderColor="white" padding={7} />
          </footer>
        </div>
      </div>
      <div className=" h-[65vh] w-[100%] lg:w-[50vw] ">
        <img
          src={img}
          alt="product image"
          className=" h-[65vh]  lg:h-[90vh] w-[100%]"
        />
      </div>
    </article>
  );
};

export default ProductCard;
