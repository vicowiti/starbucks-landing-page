import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Button = ({ text, bgColor, textColor }: ButtonProps) => {
  return (
    <button
      className="border-[1.5px] border-black p-2 rounded-full text-sm hover:opacity-60"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default Button;
