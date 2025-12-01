import React from "react";
import Header from "~/Components/Header";
import Portfolio from "~/Components/App Design/Portfolio";
import Projects from "~/Components/App Design/Projects";

const AppDesign = () => {
  return (
    <>
      <Header variant="app">
        <h1 className="justify-start text-white text-5xl font-medium ">
          App Design
        </h1>
        <p className="text-white text-base font-normal mt-8 text-center leading-relaxed">
          Our mobile designs bring intuitive digital solutions <br /> to your
          customers right at their fingertips.
        </p>
      </Header>
      <Projects />
      <Portfolio />
    </>
  );
};

export default AppDesign;
