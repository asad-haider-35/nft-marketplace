import { useState } from "react";
import { CompanyLogo, CartIcon } from "../assets";
import { navLinks } from "../constants/constants";
import RoundedButton from "./RoundedButton";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("Explore");

  return (
    <nav className="flex flex-row justify-between items-center py-6 navbar">
      <img src={CompanyLogo} alt="Cyberx" />

      <div>
        <ul className="list-none items-center flex-1 sm:flex hidden">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-sans cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-12"
              } ${active == nav.title ? "text-secondary" : "text-dimWhite"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <RoundedButton styles="mr-4" />
        <Button
          text="Buy Now"
          styles={"gradient text-white font-semibold transform -skew-x-12"}
          textStyles={"transform skew-x-12"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
