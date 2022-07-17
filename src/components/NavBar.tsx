import React from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";
import NavLink from "./NavLink";
import { GoLocation } from "react-icons/go";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="h-14 md:h-20 shadow-md">
      <section className="w-screen px-10 flex items-center justify-between  my-6">
        <div className=" md:flex align items-center gap-10">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-9 h-9 md:w-14 md:h-14 rounded-full"
            />
          </div>
          <nav className=" hidden md:flex gap-5 font-bold">
            <NavLink text="MENU" url="#" />
            <NavLink text="REWARDS" url="#" />
            <NavLink text="GIFT CARDS" url="#" />
          </nav>
        </div>
        <div className="hidden md:flex align items-center gap-10 font-bold">
          <div className="flex gap-3 items-center cursor-pointer hover:text-green-800">
            <GoLocation size={20} /> Find a store
          </div>
          <Button text="Sign in" />
          <Button text="Join now" bgColor="black" textColor="white" />
        </div>
        <div className="flex md:hidden">
          <FaBars size={25} />
        </div>
      </section>
    </div>
  );
};

export default NavBar;
