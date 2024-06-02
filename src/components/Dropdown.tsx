import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dropdownItems = [
  { id: 1, name: "Sofa", image: "images/icons/sofa.svg" },
  { id: 2, name: "Terrace", image: "images/icons/terrace.svg" },
  { id: 3, name: "Bed", image: "images/icons/bed.svg" },
  { id: 4, name: "Office", image: "images/icons/office.svg" },
  { id: 5, name: "Outdoors", image: "images/icons/outdoor-cafe.svg" },
  { id: 6, name: "Mattress", image: "images/icons/bed-2.svg" },
];

const Dropdown = () => {
  return (
    <div className="px-8 py-4 bg-primary sm:flex items-center cursor-pointer relative group">
      <span className="text-white">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className="capitalize ml-2 text-white">All Categories</span>

      {/* <!-- dropdown --> */}
      <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
        {dropdownItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src={item.image}
              alt="sofa"
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
