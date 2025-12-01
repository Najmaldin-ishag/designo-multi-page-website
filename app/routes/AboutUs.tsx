import React from "react";
import Header from "~/Components/Header";

const AboutUs = () => {
  return (
    <>
      <Header variant="about">
        <h1 className="justify-start text-white text-5xl font-medium ">
          About Us
        </h1>
        <p className="text-white text-base font-normal mt-8 text-center leading-relaxed">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We've partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We're always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </Header>

      {/* World-class talent section */}
      <section className="container !mt-[7rem] mb-[7rem]">
        <div className="grid grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-[0.9375rem] overflow-hidden">
            <img
              src="/assets/about/desktop/image-world-class-talent.jpg"
              alt="World-class talent"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div 
            className="rounded-[0.9375rem] p-12 flex flex-col justify-center"
            style={{ backgroundColor: 'rgba(255, 173, 155, 0.3)' }}
          >
            <h2 className="text-peach text-5xl font-medium leading-tight mb-6">
              World-class talent
            </h2>
            <p className="text-dark-gray text-base leading-6 mb-6">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="text-dark-gray text-base leading-6">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand's story and mission.
            </p>
          </div>
        </div>
      </section>

      {/* The real deal section */}
      <section className="container mb-[7rem]">
        <div className="grid grid-cols-2 gap-8 items-stretch">
          <div 
            className="rounded-[0.9375rem] p-12 flex flex-col justify-center"
            style={{ backgroundColor: 'rgba(255, 173, 155, 0.3)' }}
          >
            <h2 className="text-peach text-5xl font-medium leading-tight mb-6">
              The real deal
            </h2>
            <p className="text-dark-gray text-base leading-6 mb-6">
              As strategic partners in our clients' businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p className="text-dark-gray text-base leading-6">
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences to
              take action and drive real results.
            </p>
          </div>
          <div className="relative rounded-[0.9375rem] overflow-hidden">
            <img
              src="/assets/about/desktop/image-real-deal.jpg"
              alt="The real deal"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

