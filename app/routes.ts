import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/web-design", "routes/webDesign.tsx"),
] satisfies RouteConfig;
