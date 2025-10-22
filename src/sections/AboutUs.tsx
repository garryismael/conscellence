const AboutUs = () => {
  return (
    <section className="bg-blue-gray-900">
      <div className="wrapper py-20 bg-white rounded-b-[40px]">
        <h1 className="h1_large grid grid-cols-2">
          <span>Our</span>
          <img
            src="/icons/arrow.svg"
            width={53}
            height={53}
            className="size-[53px] ml-auto mr-6 overflow-hidden"
          />
          <span className="col-span-2">Approach</span>
        </h1>
        <div className="relative bg-white overflow-hidden">
          <img
            src="/3-removebg.png"
            width={620}
            height={549}
            className="absolute scale-125 left-1/2  -translate-x-1/2 -top-[42px]"
          />
          <p className="sub1 text-blue-gray-500 pt-40">
            Discover our unique consulting methodology that combines in-depth
            industry knowledge, innovative thinking, and a client-centric
            approach.{" "}
            <span className="text-blue-gray-900">
              We partner with you every step of the way to ensure your business
              reaches its full potential.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
