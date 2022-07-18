import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface PassedData {
  data: LinkItem[];
}

interface LinkItem {
  text: string;
  id: number;
}

interface FooterPaneProps {
  text: string;
  data: PassedData;
}

const FooterPane = ({ text, data }: FooterPaneProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <>
      <section
        className="flex  my-6 justify-between items-center"
        onClick={handleToggle}
      >
        <h4 className="text-lg font-semibold">{text}</h4>
        <div className="mr-5">
          {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </section>
      {active &&
        data.data.map((link) => (
          <div
            key={link.id}
            className="text-gray-500 hover:text-black duration-500"
          >
            <a href="#">{link.text}</a>
          </div>
        ))}
    </>
  );
};

export default FooterPane;
