const services = [
  {
    id: "01",
    title: "Stagnant Growth?",
    text: "Unleash your business's true potential by identifying growth barriers and implementing strategic solutions.",
  },
  {
    id: "02",
    title: "Operational Inefficiencies?",
    text: "Streamline your operations with our consulting expertise, optimizing processes for enhanced efficiency.",
  },
  {
    id: "03",
    title: "Market Challenges?",
    text: "Overcome market challenges with tailored strategies designed to position your business for success.",
  },
];
const Services = () => {
  return (
    <section className="wrapper">
      <div className="pt-24">
        <h2 className="h2 text-center text-blue-gray-900">
          Are You Running Into These Problems?
        </h2>
        <div className="pt-10 grid grid-cols-1 gap-2">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <span className="font-angry text-xl leading-[140%] text-primary">
                {service.id}
              </span>
              <h3 className="h3 text-blue-gray-900">{service.title}</h3>
              <p className="text-l text-blue-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
