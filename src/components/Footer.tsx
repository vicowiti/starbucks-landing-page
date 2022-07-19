import React from "react";
import { ImSpotify } from "react-icons/im";
import { footerData } from "../assets/utils/footerData";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import FooterPane from "./FooterPane";

const moreLinks = {};

const Footer = () => {
  return (
    <footer className="mt-[2vh] border-t-2 px-4 border-gray-400 w-[100vw]">
      <section className="lg:flex lg:justify-evenly">
        <FooterPane text="About Us" data={footerData[0]} />
        <FooterPane text="Careers" data={footerData[1]} />
        <FooterPane text="Social Impact" data={footerData[2]} />
        <FooterPane text="For Business Partners" data={footerData[3]} />
        <FooterPane text="Orders and Pickup" data={footerData[4]} />
      </section>
      <section className="border-t-2 m border-gray-400">
        <div className="flex  items-center justify-center gap-4 py-4">
          <ImSpotify className="text-2xl" />
          <FaFacebook className="text-2xl" />
          <GrPinterest className="text-2xl" />
          <FaInstagramSquare className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
        <div>
          <ul className="lg:flex">
            <li>
              Privacy Policy{" "}
              <span className="hidden lg:inline mx-5 font-thin">|</span>
            </li>
            <li>
              Terms of Use{" "}
              <span className="hidden lg:inline mx-5 font-thin">|</span>
            </li>
            <li>
              CA Supply Chain Act{" "}
              <span className="hidden lg:inline mx-5 font-thin">|</span>
            </li>
            <li>
              Cookie Preferences{" "}
              <span className="hidden lg:inline mx-5 font-thin">|</span>
            </li>
          </ul>
        </div>
        <h6 className="text-gray-400 text-sm lg:text-lg">
          © 2022 Starbucks Coffee Company. All rights reserved.
        </h6>
      </section>
    </footer>
  );
};

export default Footer;
