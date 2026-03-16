import Portfolio from "~/Components/Graphic Design/Portfolio";
import Projects from "~/Components/Graphic Design/Projects";

const GraphicDesign = () => {
  return (
    <>
      <section className="container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0">
        <div
          className="bg-peach rounded-[0.9375rem] relative overflow-hidden text-center text-white px-6 py-24 md:px-16 md:py-16 lg:px-[11.875rem]"
          style={{
            backgroundImage: "url(/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem]">
            Graphic Design
          </h1>
          <p className="text-[0.9375rem] md:text-base font-normal mt-6 md:mt-8 leading-[1.625rem] max-w-[26rem] mx-auto">
            We deliver eye-catching branding materials that are tailored
            <br className="hidden md:block" /> to meet your business objectives.
          </p>
        </div>
      </section>
      <Projects />
      <Portfolio />
    </>
  );
};

export default GraphicDesign;

