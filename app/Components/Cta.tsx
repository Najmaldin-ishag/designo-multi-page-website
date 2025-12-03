import { Link } from "react-router";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="container relative px-4 md:px-0">
      <div className="bg-peach rounded-[0.9375rem] py-[3.5rem] md:py-[4.5rem] px-6 md:px-24 relative overflow-hidden -mb-[4.5rem] z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left bg-[url('/assets/Cta-bg-img.png')] bg-cover bg-center">
        <div className="max-w-[28rem] lg:max-w-[28rem] xl:max-w-[35rem]">
          <h3 className="text-white text-[2rem] md:text-[2.5rem] leading-[2.5rem] font-medium mb-4">
            Let's talk about <br className="hidden md:block" /> your project
          </h3>
          <p className="text-white text-[0.9375rem] md:text-base font-normal leading-6 mb-8 lg:mb-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link to="/contact">
          <Button className="uppercase py-4 px-6 md:py-6 md:px-8 cursor-pointer bg-white rounded-lg text-sm font-medium text-dark-gray hover:bg-light-gray transition-colors whitespace-nowrap tracking-[1px]">
            Get in touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
