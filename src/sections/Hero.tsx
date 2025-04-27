import { ArrowUpRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="wrapper bg-hero rounded-b-[40px] overflow-x-clip">
      <div className="relative pt-36 pb-28">
        <div>
          <h1 className="h1">
            <span className="text-primary">Unlock Your Potential </span>
            <br />
            with Strategic Consulting
          </h1>
          <p className="text-blue-gray-600 sub1 mt-4">
            Guiding Your Success Journey Through Expertise and Innovation
          </p>
          <form className="flex flex-col gap-4">
            <div className="relative w-full mt-10">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-gray-500" />
              <input
                className="input-field w-full"
                placeholder="Enter your email to get started"
              />
            </div>
            <button className="btn-primary w-fit">
              <span>Get started</span>
              <span className="bg-white size-8 rounded-full flex items-center justify-center">
                <ArrowUpRight size={20} className="text-blue-gray-900" />
              </span>
            </button>
          </form>
        </div>
        <div className="hero-img-container">
          <img
            src="/background.png"
            alt="Hero"
            width={2729}
            height={4096}
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
