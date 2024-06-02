import { useState } from "react";
import NavLinks from "./NavLinks";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  console.log("rendered multiple times");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("clicked");
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-gray-800 lg:px-10">
      <div className="w-full flex justify-end px-3 py-2 sm:hidden">
        <button className="text-white p-1 text-xl" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* lg screen size */}
      <div className="container sm:flex text-sm md:text-[16px] bg-gray-800 hidden">
        <Dropdown />
        <div className="sm:flex items-center justify-between flex-grow md:pl-12 py-5 hidden">
          <NavLinks />
          <Link
            to="/login"
            className="text-gray-200 hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>
      {/* small screen size */}
      <div
        className={`container flex flex-col text-sm md:text-[16px] bg-gray-800 sm:hidden ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <Dropdown />
        <div className="grid gap-2 sm:flex sm:items-center sm:justify-between sm:flex-grow sm:md:pl-12 py-5">
          <NavLinks />
          <Link
            to="/login"
            className="text-gray-200 hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
