import React from "react";

interface ProductCardProps {
  img: string;
  bgColor: string;
  header: string;
  text: string;
  order: number;
}

const ProductCard = ({ img, bgColor, header, text }: ProductCardProps) => {
  return (
    <article className="my-5 w-full h-[80vh] bg-[tomato] flex text-white">
      <div className="w-[50vw] h-"></div>
      <div className="w-[50vw] ">
        <img src={img} alt="product image" className="h-[80vh] w-[100%]" />
      </div>
    </article>
  );
};

export default ProductCard;
