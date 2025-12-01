import { Link } from "react-router";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="section-cta container py-[2.5rem] px-20  rounded-[0.93775rem] absolute -top-[10rem] right-0 left-0 z-10 ">
      <div className=" flex items-center justify-between">
        <div>
          <h3 className="text-white text-[2.5rem] leading-[2.5rem] font-[500] mb-[1rem]">
            Let's talk about <br /> your project
          </h3>
          <p className="text-white text-[1rem] font-[400] leading-[1.625rem] ">
            Ready to take it to the next level? Contact us today and find out
            <br /> how our expertise can help your business grow.
          </p>
        </div>
        <Link to="/contact">
          <Button className="uppercase py-[1.5rem] px-[1rem] cursor-pointer bg-white rounded-[0.5rem] text-[0.9375rem] leading-[0.0625rem] font-[500] not-italic text-dark-gray">
            Get in touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
