import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  // faBars,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../PrimaryButton";
// import NavLinks from "../NavLinks";
import { Link } from "react-router-dom";
// import Dropdown from "../Dropdown";
import React from "react";
import Navigation from "../Navigation";

const headerLinks = [
  {
    id: 1,
    name: "Wishlist",
    url: "#",
    icon: faHeart,
    count: 8,
  },
  {
    id: 2,
    name: "Cart",
    url: "#",
    icon: faBagShopping,
    count: 8,
  },
  {
    id: 3,
    name: "Account",
    url: "#",
    icon: faUser,
  },
];

//use React.memo() to prevent the navbar from rerendering when a state change
const Navbar = React.memo(() => {
  return (
    <>
      {/* <!-- header --> */}
      <header className="py-4 shadow-sm bg-white lg:px-10">
        <div className="container grid grid-cols-2 w-full gap-4 md:grid-cols-5">
          {/* logo */}
          <a href="" className="md:order-1 md:col-span-1 flex items-center">
            <img src="images/logo.svg" alt="Logo" className="w-32" />
          </a>

          {/* search bar */}
          <div className="w-full max-w-xl mx-[auto] my-0 relative md:text-lg text-[12px] flex order-3 col-span-2 md:order-1 md:col-span-3">
            <span className="absolute left-2 md:top-3 top-[9px] md:text-lg text-gray-400">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary border-r-0 md:pl-12 pl-7 py-[.5rem] md:py-3 pr-3 rounded-l-md focus:outline-none md:flex"
              placeholder="Search"
            />
            <PrimaryButton label="Search" />
          </div>
          {/* search bar end*/}
          {/* links */}
          <div className="w-full flex items-center space-x-4 justify-end md:order-3 md:col-span-1">
            {headerLinks.map((link) => (
              <Link
                to={link.url}
                key={link.id}
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-md md:text-lg">
                  <FontAwesomeIcon icon={link.icon} />
                </div>
                <div className="text-xs leading-3 hidden sm:block">
                  {link.name}
                </div>
                {link.count && (
                  <div className="absolute -right-1 -top-0 sm:-right-1 sm:-top-1 w-2 h-2 sm:w-4 sm:h-4 rounded-full flex items-center justify-center bg-primary text-white text-[10px]">
                    <span className="hidden sm:block">{link.count}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {/* <!-- ./header --> */}

      {/* <!-- navbar --> */}
      <Navigation />
      {/* <!-- ./navbar --> */}
    </>
  );
});

export default Navbar;
