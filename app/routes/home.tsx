import { Button } from "~/Components/ui/button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Designo - Home" },
    { name: "description", content: "Welcome to Designo!" },
  ];
}

export default function Home() {
  return (
    <section className="bg-peach rounded-[0.9375rem] container px-10 !mt-8">
      <div className="grid grid-cols-2 items-center justify-center gap-8">
        <div>
          <h1 className="text-white text-5xl leading-12 font-medium mb-6">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-base font-normal leading-6  mb-6">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button className="text-white cursor-pointer uppercase text-sm leading-normal font-medium  px-12 py-6 bg-light-peach/90 ">
            Learn more
          </Button>
        </div>
        <div className="relative">
          <img
            className="absolute top-2 -right-5 "
            src="/assets/home/desktop/bg-pattern-hero-home.svg"
            alt="image"
          />
          <img
            src="/assets/home/desktop/image-hero-phone.png"
            alt="image"
            className="z-10"
          />
        </div>
      </div>
    </section>
  );
}
