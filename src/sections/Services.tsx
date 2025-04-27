import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Customized Strategy Development",
    text: "Tailor-made strategies to address your unique business challenges and opportunities, ensuring sustainable growth and competitive advantage.",
  },
  {
    id: 2,
    title: "Operational Efficiency Optimization",
    text: "Streamline your processes and improve efficiency with our expert guidance, helping you save time and resources.",
  },
  {
    id: 3,
    title: "Market Analysis and Insights",
    text: "Gain valuable market insights and stay ahead of the competition with our comprehensive analysis and data-driven recommendations.",
  },
  {
    id: 4,
    title: "Leadership and Team Building",
    text: "Enhance your leadership capabilities and foster a high-performing team through our specialized training and development programs.",
  },
];

const Services = () => {
  return (
    <section className="wrapper">
      <div className="pt-20">
        <h1 className="h1_large mx-auto">
          What we can do <span className="text-primary">for you?</span>
        </h1>
        <div className="grid grid-cols-1 mt-10 rounded-[40px] bg-blue-gray-900 text-white">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <ArrowDownRight />
              <h2 className="h2">{service.title}</h2>
              <p className="text-l">{service.text}</p>
            </div>
          ))}
          <div className="px-6 py-10 bg-primary rounded-b-[40px]">
            <h2 className="h2">Free consultation</h2>
            <button className="btn-outline-primary border-white text-white w-full mt-6">
              Schedule a free call
              <ArrowUpRight />
            </button>
            <p className="font-poppins text-base leading-normal italic line-through text-center mt-2">
              worth 200 USD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
