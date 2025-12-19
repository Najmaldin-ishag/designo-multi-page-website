import React from "react";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Leaf 1 - Left side */}
      <div className="absolute top-[320px] left-0 -translate-x-1/2 z-0 hidden xl:block">
        <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
      </div>

      {/* Background Leaf 2 - Right side */}
      <div className="absolute top-[60%] right-0 translate-x-1/2 z-0 hidden xl:block">
        <img src="/assets/shared/desktop/bg-pattern-leaf.svg" alt="" />
      </div>

      {/* Hero Section - About Us */}
      <section className="container !mt-8 relative z-10">
        <div className="grid grid-cols-[1fr_1fr] rounded-[0.9375rem] overflow-hidden min-h-[480px]">
          {/* Left side - Text content with peach background */}
          <div 
            className="bg-peach relative overflow-hidden flex flex-col justify-center px-16 py-12"
            style={{
              backgroundImage: `url(/assets/about/desktop/bg-pattern-hero-about-desktop.svg)`,
              backgroundPosition: 'bottom left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-white text-5xl font-medium mb-6">
              About Us
            </h1>
            <p className="text-white text-base font-normal leading-relaxed max-w-[460px]">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We've partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We're always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
          {/* Right side - Hero image */}
          <div className="relative">
            <img
              src="/assets/about/desktop/image-about-hero.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* World-class talent section */}
      <section className="container mt-40 mb-40 relative z-10">
        <div className="grid grid-cols-[1fr_1fr] rounded-[0.9375rem] overflow-hidden min-h-[640px]">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="/assets/about/desktop/image-world-class-talent.jpg"
              alt="World-class talent"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right side - Text content */}
          <div 
            className="relative overflow-hidden flex flex-col justify-center px-24 py-12"
            style={{ backgroundColor: 'rgba(253, 241, 239, 1)' }}
          >
            {/* Decorative circle - positioned on left side */}
            <div 
              className="absolute top-0 left-0 w-[640px] h-[640px] rounded-full"
              style={{ 
                backgroundColor: 'rgba(255, 173, 155, 0.15)',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
            <h2 className="text-peach text-[40px] font-medium leading-tight mb-6 relative z-10">
              World-class talent
            </h2>
            <p className="text-dark-gray text-base leading-[26px] mb-6 relative z-10 max-w-[445px]">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="text-dark-gray text-base leading-[26px] relative z-10 max-w-[445px]">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand's story and mission.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mb-40 relative z-10">
        <div className="grid grid-cols-3 gap-8 text-center">
          {/* Canada */}
          <div className="flex flex-col items-center">
            <div className="bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8">
              <img src="/assets/shared/desktop/illustration-canada.svg" alt="Canada" />
            </div>
            <h3 className="text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase">Canada</h3>
            <button className="bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors">
              See Location
            </button>
          </div>

          {/* Australia */}
          <div className="flex flex-col items-center">
            <div className="bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8">
              <img src="/assets/shared/desktop/illustration-australia.svg" alt="Australia" />
            </div>
            <h3 className="text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase">Australia</h3>
            <button className="bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors">
              See Location
            </button>
          </div>

          {/* United Kingdom */}
          <div className="flex flex-col items-center">
            <div className="bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8">
              <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="United Kingdom" />
            </div>
            <h3 className="text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase">United Kingdom</h3>
            <button className="bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors">
              See Location
            </button>
          </div>
        </div>
      </section>

      {/* The real deal section */}
      <section className="container mb-40 relative z-10">
        <div className="grid grid-cols-[1fr_1fr] rounded-[0.9375rem] overflow-hidden min-h-[640px]">
          {/* Left side - Text content */}
          <div 
            className="relative overflow-hidden flex flex-col justify-center px-24 py-12"
            style={{ backgroundColor: 'rgba(253, 241, 239, 1)' }}
          >
            {/* Decorative circle - positioned in bottom-left area */}
            <div 
              className="absolute bottom-0 left-0 w-[640px] h-[640px] rounded-full"
              style={{ 
                backgroundColor: 'rgba(255, 173, 155, 0.15)',
                transform: 'translate(-30%, 30%)'
              }}
            ></div>
            <h2 className="text-peach text-[40px] font-medium leading-tight mb-6 relative z-10">
              The real deal
            </h2>
            <p className="text-dark-gray text-base leading-[26px] mb-6 relative z-10 max-w-[445px]">
              As strategic partners in our clients' businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p className="text-dark-gray text-base leading-[26px] relative z-10 max-w-[445px]">
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences to
              take action and drive real results.
            </p>
          </div>
          {/* Right side - Image */}
          <div className="relative">
            <img
              src="/assets/about/desktop/image-real-deal.jpg"
              alt="The real deal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
