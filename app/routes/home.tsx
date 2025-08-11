import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Designo - Home" },
    { name: "description", content: "Welcome to Designo!" },
  ];
}

export default function Home() {
  return <div>Hello world</div>;
}
