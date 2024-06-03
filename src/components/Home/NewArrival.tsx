import {
  faHeart,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const newArrival = [
  {
    id: 1,
    productName: "Guyer Chair",
    image: "images/products/product1.jpg",
    srp: "$55.90",
    price: "$45.00",
  },
  {
    id: 2,
    productName: "BED KING SIZE",
    image: "images/products/product2.jpg",
    srp: "$55.90",
    price: "$45.00",
  },
  {
    id: 3,
    productName: "COUPLE SOFA",
    image: "images/products/product3.jpg",
    srp: "$55.90",
    price: "$45.00",
  },
  {
    id: 4,
    productName: "MATTRASS X",
    image: "images/products/product4.jpg",
    srp: "$55.90",
    price: "$45.00",
  },
];

const NewArrival = () => {
  return (
    <>
      {/* <!-- new arrival --> */}
      <div className="container pb-16 lg:px-10">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          top new arrival
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrival.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    {product.productName}
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    {product.srp}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- ./new arrival --> */}
    </>
  );
};

export default NewArrival;
