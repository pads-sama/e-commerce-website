const featureContent = [
  {
    id: 1,
    title: "Free Shipping",
    image: "images/icons/delivery-van.svg",
    subTitle: "Order over $200",
  },
  {
    id: 2,
    title: "Money Rturns",
    image: "images/icons/money-back.svg",
    subTitle: "30 days money returs",
  },
  {
    id: 3,
    title: "24/7 Support",
    image: "images/icons/service-hours.svg",
    subTitle: "Customer support",
  },
];
const Features = () => {
  return (
    <section className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        {featureContent.map((feature) => (
          <div
            key={feature.id}
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm">{feature.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
