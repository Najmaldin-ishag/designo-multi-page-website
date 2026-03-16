import Portfolio from "~/Components/App Design/Portfolio";
import Projects from "~/Components/App Design/Projects";

const AppDesign = () => {
  return (
    <>
      <section className="container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0">
        <div
          className="bg-peach rounded-[0.9375rem] relative overflow-hidden text-center text-white px-6 py-24 md:px-16 md:py-16 lg:px-[11.875rem]"
          style={{
            backgroundImage: "url(/assets/app-design/desktop/bg-pattern-intro-app.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem]">
            App Design
          </h1>
          <p className="text-[0.9375rem] md:text-base font-normal mt-6 md:mt-8 leading-[1.625rem] max-w-[26rem] mx-auto">
            Our mobile designs bring intuitive digital solutions
            <br className="hidden md:block" /> to your customers right at their fingertips.
          </p>
        </div>
      </section>
      <Projects />
      <Portfolio />
    </>
  );
};

export default AppDesign;
