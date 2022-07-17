import React from "react";

interface NavLinkProps {
  text: string;
  url: string;
}

const NavLink = ({ text, url }: NavLinkProps) => {
  return (
    <a href={url} className="hover:text-green-800 cursor-pointer">
      {text}
    </a>
  );
};

export default NavLink;
