import React from "react";
import Header from "~/Components/Header";
import Portfolio from "~/Components/Graphic Design/Portfolio";
import Projects from "~/Components/Graphic Design/Projects";

const GraphicDesign = () => {
  return (
    <>
      <Header variant="graphic">
        <h1 className="justify-start text-white text-5xl font-medium ">
          Graphic Design
        </h1>
        <p className="text-white text-base font-normal mt-8 text-center leading-relaxed">
          We deliver eye-catching branding materials that are tailored <br /> to
          meet your business objectives.
        </p>
      </Header>
      <Projects />
      <Portfolio />
    </>
  );
};

export default GraphicDesign;

