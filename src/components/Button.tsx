import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  padding?: number | string;
}

const Button = ({
  text,
  bgColor,
  textColor,
  borderColor,
  padding,
}: ButtonProps) => {
  return (
    <button
      className="border-[1.5px] border-black p-1 rounded-full text-sm hover:opacity-60"
      style={{
        color: textColor,
        backgroundColor: bgColor,
        borderColor: borderColor,
        padding: padding,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
