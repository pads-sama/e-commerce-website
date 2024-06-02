import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Shop",
    url: "/shop",
  },
  {
    id: 3,
    name: "About us",
    url: "/about",
  },
  {
    id: 4,
    name: "Contact us",
    url: "/contact",
  },
];

const NavLinks = () => {
  return (
    <div className="grid gap-2 sm:flex sm:items-center sm:space-x-6 capitalize">
      {links.map((link) => (
        <Link
          to={link.url}
          key={link.id}
          className="text-gray-200 hover:text-white transition"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
