import Portfolio from "~/Components/Home/Portfolio";
import type { Route } from "./+types/home";
import Hero from "~/Components/Home/Hero";
import Features from "~/Components/Home/Features";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Designo - Home" },
    { name: "description", content: "Welcome to Designo!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Features />
    </>
  );
}
