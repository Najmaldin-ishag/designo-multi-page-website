import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="container !mt-4 md:!mt-8 px-6 md:px-10">
      <div className="bg-peach rounded-[0.9375rem] overflow-hidden px-6 pt-20 md:px-14 md:pt-14 lg:px-10 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 lg:gap-4">
          <div className="text-center lg:text-left max-w-[35rem] mx-auto lg:mx-0">
            <h1 className="text-white text-[2rem] md:text-5xl leading-[2.25rem] md:leading-12 font-medium mb-6 md:mb-8">
            Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-white text-[0.9375rem] md:text-base font-normal leading-6 mb-8">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
            </p>
            <a href="/company">
              <Button className="cursor-pointer uppercase text-sm leading-normal font-medium text-dark-gray px-12 py-6 bg-white">
                Learn more
              </Button>
            </a>
          </div>
          <div className="relative flex justify-center lg:justify-end min-h-[17rem] md:min-h-[26rem] lg:min-h-[32rem]">
            <img
              className="absolute opacity-90 max-w-none w-[40rem] top-[-9rem] right-[-13rem] md:top-[-8rem] md:right-[-7rem] lg:top-3 lg:right-8"
              src="/assets/home/desktop/bg-pattern-hero-home.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              src="/assets/home/desktop/image-hero-phone.png"
              alt="Phone screen preview"
              className="z-10 w-[17.75rem] md:w-[25.5rem] mt-4 md:mt-12 lg:mt-0 lg:self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
