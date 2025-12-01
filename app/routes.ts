import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/web-design", "routes/WebDesign.tsx"),
  route("/app-design", "routes/AppDesign.tsx"),
  route("/graphic-design", "routes/GraphicDesign.tsx"),
  route("/company", "routes/AboutUs.tsx"),
  route("/locations", "routes/Locations.tsx"),
  route("/contact", "routes/Contact.tsx"),
] satisfies RouteConfig;
