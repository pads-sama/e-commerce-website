const categories = [
  {
    id: 1,
    categoryName: "Bedroom",
    image: "images/category/category-1.jpg",
  },
  {
    id: 2,
    categoryName: "Mattrass",
    image: "images/category/category-2.jpg",
  },
  {
    id: 3,
    categoryName: "Outdoor",
    image: "images/category/category-3.jpg",
  },
  {
    id: 4,
    categoryName: "Sofa",
    image: "images/category/category-4.jpg",
  },
  {
    id: 5,
    categoryName: "Living Room",
    image: "images/category/category-5.jpg",
  },
  {
    id: 6,
    categoryName: "Kitchen",
    image: "images/category/category-6.jpg",
  },
];
const Categories = () => {
  return (
    <div className="container lg:px-11 ">
      <h2 className="text-xl sm:text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-sm overflow-hidden group"
          >
            <img
              src={category.image}
              alt={category.categoryName}
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {category.categoryName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
