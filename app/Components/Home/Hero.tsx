import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-peach rounded-[0.9375rem] container px-10 !mt-8">
      <div className="grid grid-cols-2 items-center justify-center gap-8">
        <div>
          <h1 className="text-white text-5xl leading-12 font-medium mb-8">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-base font-normal leading-6  mb-8">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <a href="/company">
            <Button className=" cursor-pointer uppercase text-sm leading-normal font-medium  text-dark-gray px-12 py-6 bg-white ">
              Learn more
            </Button>
          </a>
        </div>
        <div className="relative flex flex-col">
          <img
            className="absolute top-3 right-8 left-2  opacity-90 "
            src="/assets/home/desktop/bg-pattern-hero-home.svg"
            alt="image"
          />
          <img
            src="/assets/home/desktop/image-hero-phone.png"
            alt="image"
            className="z-10 max-w-[25.5rem]  self-end"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
