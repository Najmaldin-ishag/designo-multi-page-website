import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import React, { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);
  const menuTop = 96;
  const menuHeight = 235;
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ jsxs("nav", { className: "relative container h-24 md:h-auto px-6 md:px-10 lg:px-0 md:py-[3.5rem]", children: [
    /* @__PURE__ */ jsxs("div", { className: "h-full md:h-auto flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center justify-center gap-2 md:gap-4", onClick: handleCloseMenu, children: [
        /* @__PURE__ */ jsx("img", { src: "../assets/Logo.svg", alt: "logo", className: "size-[1.5rem]" }),
        /* @__PURE__ */ jsx("span", { className: "uppercase tracking-[0.1875rem] md:tracking-[0.3125rem] text-[1rem] md:text-[1.5rem] font-bold text-dark-gray", children: "Designo" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": isOpen ? "Close menu" : "Open menu",
          "aria-expanded": isOpen,
          className: "md:hidden",
          onClick: () => setIsOpen((prev) => !prev),
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: isOpen ? "/assets/shared/mobile/icon-close.svg" : "/assets/shared/mobile/icon-hamburger.svg",
              alt: "",
              "aria-hidden": "true",
              className: "size-5"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-7 lg:gap-[7rem] uppercase text-[0.875rem] leading-normal text-gray-dark font-[400]", children: [
        /* @__PURE__ */ jsx(Link, { to: "/company", children: "Our Company" }),
        /* @__PURE__ */ jsx(Link, { to: "/locations", children: "Locations" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact" })
      ] })
    ] }),
    isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-x-0 bg-black/50 z-30 md:hidden",
          style: { top: `${menuTop + menuHeight}px`, bottom: 0 },
          onClick: handleCloseMenu,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-x-0 z-40 bg-black md:hidden", style: { top: `${menuTop}px`, height: `${menuHeight}px` }, children: /* @__PURE__ */ jsxs("div", { className: "px-6 pt-12 text-white uppercase tracking-[2px] text-[1.5rem] leading-[25px] space-y-8", children: [
        /* @__PURE__ */ jsx(Link, { to: "/company", className: "block", onClick: handleCloseMenu, children: "Our Company" }),
        /* @__PURE__ */ jsx(Link, { to: "/locations", className: "block", onClick: handleCloseMenu, children: "Locations" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "block", onClick: handleCloseMenu, children: "Contact" })
      ] }) })
    ] })
  ] });
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
const Cta = () => {
  return /* @__PURE__ */ jsx("section", { className: "container relative px-4 md:px-0", children: /* @__PURE__ */ jsxs("div", { className: "bg-peach rounded-[0.9375rem] py-[3.5rem] md:py-[4.5rem] px-6 md:px-24 relative overflow-hidden -mb-[4.5rem] z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left bg-[url('/assets/Cta-bg-img.png')] bg-cover bg-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[28rem] lg:max-w-[28rem] xl:max-w-[35rem]", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-white text-[2rem] md:text-[2.5rem] leading-[2.5rem] font-medium mb-4", children: [
        "Let's talk about ",
        /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
        " your project"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white text-[0.9375rem] md:text-base font-normal leading-6 mb-8 lg:mb-0", children: "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." })
    ] }),
    /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(Button, { className: "uppercase py-4 px-6 md:py-6 md:px-8 cursor-pointer bg-white rounded-lg text-sm font-medium text-dark-gray hover:bg-light-gray transition-colors whitespace-nowrap tracking-[1px]", children: "Get in touch" }) })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-[8rem]", children: [
    /* @__PURE__ */ jsx(Cta, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-black pt-[10rem] pb-[4.5rem]", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center md:justify-between gap-8 mb-10", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center justify-center gap-4 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/assets/Logo.svg",
                  alt: "logo",
                  className: "w-6 h-6"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "uppercase tracking-[5px] text-2xl font-bold text-white", children: "Designo" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-col md:flex-row items-center gap-8 uppercase text-sm tracking-[2px] text-white font-normal", children: [
          /* @__PURE__ */ jsx(Link, { to: "/company", className: "hover:underline", children: "Our Company" }),
          /* @__PURE__ */ jsx(Link, { to: "/locations", className: "hover:underline", children: "Locations" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:underline", children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "border-dark-gray opacity-20 mb-8" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-white/50 text-base font-normal leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-white/50", children: "Designo Central Office" }),
          /* @__PURE__ */ jsxs("address", { className: "not-italic", children: [
            "3886 Wellington Street ",
            /* @__PURE__ */ jsx("br", {}),
            "Toronto, Ontario M9C 3J5"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-white/50 text-base font-normal leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-white/50", children: "Contact Us (Central Office)" }),
          /* @__PURE__ */ jsxs("address", { className: "not-italic", children: [
            /* @__PURE__ */ jsx("a", { href: "tel:+12538638967", className: "hover:text-peach transition-colors", children: "P : +1 253-863-8967" }),
            " ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("a", { href: "mailto:contact@designo.co", className: "hover:text-peach transition-colors", children: "M : contact@designo.co" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 self-center md:self-end", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "Facebook", children: /* @__PURE__ */ jsx(FaFacebookSquare, { className: "text-peach hover:text-white transition-colors", size: 24 }) }),
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "Youtube", children: /* @__PURE__ */ jsx(TfiYoutube, { className: "text-peach hover:text-white transition-colors", size: 24 }) }),
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "Twitter", children: /* @__PURE__ */ jsx(FaSquareXTwitter, { className: "text-peach hover:text-white transition-colors", size: 24 }) }),
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "Pinterest", children: /* @__PURE__ */ jsx(IoLogoPinterest, { className: "text-peach hover:text-white transition-colors", size: 24 }) }),
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "Instagram", children: /* @__PURE__ */ jsx(BsInstagram, { className: "text-peach hover:text-white transition-colors", size: 24 }) })
        ] })
      ] })
    ] }) })
  ] });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/assets/favicon-32x32.png"
      }), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const cards$3 = [
  {
    id: "web",
    to: "/web-design",
    title: "WEB DESIGN",
    desktopImage: "/assets/home/desktop/image-web-design-large.jpg",
    tabletImage: "/assets/home/tablet/image-web-design.jpg",
    mobileImage: "/assets/home/mobile/image-web-design.jpg",
    className: "lg:col-span-2 lg:row-span-2 min-h-[250px] md:min-h-[200px] lg:min-h-[640px]",
    headingClass: "text-[1.75rem] md:text-[2.5rem] lg:text-5xl"
  },
  {
    id: "app",
    to: "/app-design",
    title: "APP DESIGN",
    desktopImage: "/assets/home/desktop/image-app-design.jpg",
    tabletImage: "/assets/home/tablet/image-app-design.jpg",
    mobileImage: "/assets/home/mobile/image-app-design.jpg",
    className: "lg:col-start-3 lg:col-end-5 min-h-[250px] md:min-h-[200px] lg:min-h-[308px]",
    headingClass: "text-[1.75rem] lg:text-4xl"
  },
  {
    id: "graphic",
    to: "/graphic-design",
    title: "GRAPHIC DESIGN",
    desktopImage: "/assets/home/desktop/image-graphic-design.jpg",
    tabletImage: "/assets/home/tablet/image-graphic-design.jpg",
    mobileImage: "/assets/home/mobile/image-graphic-design.jpg",
    className: "lg:col-start-3 lg:col-end-5 min-h-[250px] md:min-h-[200px] lg:min-h-[308px]",
    headingClass: "text-[1.75rem] lg:text-4xl"
  }
];
const Portfolio$3 = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-25 px-6 md:px-10 lg:px-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr max-w-[69rem] mx-auto", children: cards$3.map((card) => /* @__PURE__ */ jsxs(
    Link,
    {
      to: card.to,
      className: `relative group cursor-pointer overflow-hidden rounded-[0.9375rem] ${card.className}`,
      children: [
        /* @__PURE__ */ jsxs("picture", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: card.desktopImage }),
          /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: card.tabletImage }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: card.mobileImage,
              alt: "",
              "aria-hidden": "true",
              className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10 group-hover:bg-peach/70 transition-colors duration-300", children: [
          /* @__PURE__ */ jsx("h2", { className: `${card.headingClass} font-medium text-white mb-3 md:mb-4 tracking-widest`, children: card.title }),
          /* @__PURE__ */ jsxs("span", { className: "text-white text-[0.9375rem] tracking-[5px] uppercase flex items-center justify-center gap-2", children: [
            "View Projects",
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/shared/desktop/icon-right-arrow.svg",
                alt: "",
                "aria-hidden": "true",
                className: "size-2"
              }
            )
          ] })
        ] })
      ]
    },
    card.id
  )) }) });
};
const Hero = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-4 md:!mt-8 px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "bg-peach rounded-[0.9375rem] overflow-hidden px-6 pt-20 md:px-14 md:pt-14 lg:px-10 lg:pt-0", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 lg:gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left max-w-[35rem] mx-auto lg:mx-0", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white text-[2rem] md:text-5xl leading-[2.25rem] md:leading-12 font-medium mb-6 md:mb-8", children: "Award-winning custom designs and digital branding solutions" }),
      /* @__PURE__ */ jsx("p", { className: "text-white text-[0.9375rem] md:text-base font-normal leading-6 mb-8", children: "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services." }),
      /* @__PURE__ */ jsx("a", { href: "/company", children: /* @__PURE__ */ jsx(Button, { className: "cursor-pointer uppercase text-sm leading-normal font-medium text-dark-gray px-12 py-6 bg-white", children: "Learn more" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center lg:justify-end min-h-[17rem] md:min-h-[26rem] lg:min-h-[32rem]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "absolute opacity-90 max-w-none w-[40rem] top-[-9rem] right-[-13rem] md:top-[-8rem] md:right-[-7rem] lg:top-3 lg:right-8",
          src: "/assets/home/desktop/bg-pattern-hero-home.svg",
          alt: "",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/home/desktop/image-hero-phone.png",
          alt: "Phone screen preview",
          className: "z-10 w-[17.75rem] md:w-[25.5rem] mt-4 md:mt-12 lg:mt-0 lg:self-end"
        }
      )
    ] })
  ] }) }) });
};
const FeaturesSection = [
  {
    id: "1",
    imgPath: "/assets/Passionate-image.png",
    alt: "illustration",
    title: "Passionate",
    description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
  },
  {
    id: "2",
    imgPath: "/assets/Resourceful-img.png",
    alt: "illustration",
    title: "Resourceful",
    description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.."
  },
  {
    id: "3",
    imgPath: "/assets/Friendly-img.png",
    alt: "illustration",
    title: "Friendly",
    description: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
  }
];
const ProjectShowcase = [
  {
    id: "1",
    imgPath: "/assets/web-design/desktop/image-express.jpg",
    alt: "project image",
    name: "Express",
    description: "A multi-carrier shipping website for e-commerce businesses"
  },
  {
    id: "2",
    imgPath: "/assets/web-design/desktop/image-transfer.jpg",
    alt: "project image",
    name: "Transfer",
    description: "Site for low-cost money transfers and sending money within seconds"
  },
  {
    id: "3",
    imgPath: "/assets/web-design/desktop/image-photon.jpg",
    alt: "project image",
    name: "PHOTON",
    description: "A state-of-the-art music player with high-resolution audio and DSP effects"
  },
  {
    id: "4",
    imgPath: "/assets/web-design/desktop/image-builder.jpg",
    alt: "project image",
    name: "BUILDER",
    description: "Connects users with local contractors based on their location"
  },
  {
    id: "5",
    imgPath: "/assets/web-design/desktop/image-blogr.jpg",
    alt: "project image",
    name: "BLOGR",
    description: "Blogr is a platform for creating an online blog or publication"
  },
  {
    id: "6",
    imgPath: "/assets/web-design/desktop/image-camp.jpg",
    alt: "project image",
    name: "CAMP",
    description: "Get expert training in coding, data, design, and digital marketing"
  }
];
const AppDesignProjects = [
  {
    id: "1",
    imgPath: "/assets/app-design/desktop/image-airfilter.jpg",
    alt: "project image",
    name: "AIRFILTER",
    description: "Solving the problem of poor indoor air quality by filtering the air"
  },
  {
    id: "2",
    imgPath: "/assets/app-design/desktop/image-eyecam.jpg",
    alt: "project image",
    name: "EYECAM",
    description: "Product that lets you edit your favorite photos and videos at any time"
  },
  {
    id: "3",
    imgPath: "/assets/app-design/desktop/image-faceit.jpg",
    alt: "project image",
    name: "FACEIT",
    description: "Get to meet your favorite internet superstar with the faceit app"
  },
  {
    id: "4",
    imgPath: "/assets/app-design/desktop/image-todo.jpg",
    alt: "project image",
    name: "TODO",
    description: "A todo app that features cloud sync with light and dark mode"
  },
  {
    id: "5",
    imgPath: "/assets/app-design/desktop/image-loopstudios.jpg",
    alt: "project image",
    name: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios"
  }
];
const GraphicDesignProjects = [
  {
    id: "1",
    imgPath: "/assets/graphic-design/desktop/image-change.jpg",
    alt: "project image",
    name: "TIM BROWN",
    description: "A book cover designed for Tim Brown's new release, 'Change'"
  },
  {
    id: "2",
    imgPath: "/assets/graphic-design/desktop/image-boxed-water.jpg",
    alt: "project image",
    name: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water"
  },
  {
    id: "3",
    imgPath: "/assets/graphic-design/desktop/image-science.jpg",
    alt: "project image",
    name: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project"
  }
];
const Features = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-30 !mb-[18rem] md:!mb-[20rem] px-6 md:px-10 lg:px-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-[4.5rem]", children: FeaturesSection.map(({ id, title, imgPath, description, alt }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "text-center md:text-left lg:text-center md:flex md:items-center md:gap-12 lg:block",
      children: [
        /* @__PURE__ */ jsx("img", { src: imgPath, alt, className: "mx-auto md:mx-0 lg:mx-auto shrink-0" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "uppercase tracking-[.3125rem] md:tracking-[.5rem] mt-8 md:mt-0 lg:mt-8 text-xl font-medium leading-6 text-dark-gray", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 md:mt-4 lg:mt-8 text-[0.9375rem] lg:text-lg font-normal leading-[1.625rem] lg:leading-6 text-dark-gray max-w-[36rem] mx-auto md:mx-0 lg:mx-auto", children: description })
        ] })
      ]
    },
    id
  )) }) });
};
function meta({}) {
  return [{
    title: "Designo - Home"
  }, {
    name: "description",
    content: "Welcome to Designo!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(Portfolio$3, {}), /* @__PURE__ */ jsx(Features, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const cards$2 = [
  {
    id: "app",
    to: "/app-design",
    title: "APP DESIGN",
    desktopImage: "/assets/home/desktop/image-app-design.jpg",
    tabletImage: "/assets/home/tablet/image-app-design.jpg",
    mobileImage: "/assets/home/mobile/image-app-design.jpg"
  },
  {
    id: "graphic",
    to: "/graphic-design",
    title: "GRAPHIC DESIGN",
    desktopImage: "/assets/home/desktop/image-graphic-design.jpg",
    tabletImage: "/assets/home/tablet/image-graphic-design.jpg",
    mobileImage: "/assets/home/mobile/image-graphic-design.jpg"
  }
];
const Portfolio$2 = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0 !mb-[17rem]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-fr max-w-[69rem] mx-auto", children: cards$2.map((card) => /* @__PURE__ */ jsxs(
    Link,
    {
      to: card.to,
      className: "relative group cursor-pointer overflow-hidden rounded-[0.9375rem] min-h-[15.625rem] md:min-h-[12.5rem] lg:min-h-[19.25rem]",
      children: [
        /* @__PURE__ */ jsxs("picture", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: card.desktopImage }),
          /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: card.tabletImage }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: card.mobileImage,
              alt: "",
              "aria-hidden": "true",
              className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10 group-hover:bg-peach/70 transition-colors duration-300", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[1.75rem] lg:text-[2.5rem] font-medium text-white mb-3 md:mb-4 tracking-widest", children: card.title }),
          /* @__PURE__ */ jsxs("span", { className: "text-white text-[0.9375rem] tracking-[5px] uppercase flex items-center justify-center gap-2", children: [
            "View Projects",
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/shared/desktop/icon-right-arrow.svg",
                alt: "",
                "aria-hidden": "true",
                className: "size-2"
              }
            )
          ] })
        ] })
      ]
    },
    card.id
  )) }) });
};
const Projects$2 = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 items-stretch justify-center text-center", children: ProjectShowcase.map(({ id, imgPath, alt, name, description }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "overflow-hidden cursor-pointer rounded-[0.9375rem] bg-[#fdf3f0] group md:flex lg:block",
      children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-[21.1875rem] md:shrink-0 lg:w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: imgPath,
            alt,
            className: "object-cover w-full h-80 md:h-[19.375rem] lg:h-80"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#fdf3f0] group-hover:bg-peach transition-colors duration-300 px-8 py-8 md:px-12 md:py-0 lg:px-8 lg:py-8 text-center flex flex-col justify-center md:flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-peach group-hover:text-white transition-colors text-xl font-medium leading-6 tracking-[5px] mb-4 uppercase", children: name }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.9375rem] md:text-base font-normal leading-[1.625rem] text-dark-gray group-hover:text-white transition-colors", children: description })
        ] })
      ]
    },
    id
  )) }) });
};
const WebDesign = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("section", {
      className: "container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0",
      children: /* @__PURE__ */ jsxs("div", {
        className: "bg-peach rounded-[0.9375rem] relative overflow-hidden text-center text-white px-6 py-24 md:px-16 md:py-16 lg:px-[11.875rem]",
        style: {
          backgroundImage: "url(/assets/web-design/desktop/bg-pattern-intro-web.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem]",
          children: "Web Design"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-[0.9375rem] md:text-base font-normal mt-6 md:mt-8 leading-[1.625rem] max-w-[26rem] mx-auto",
          children: ["We build websites that serve as powerful marketing tools", /* @__PURE__ */ jsx("br", {
            className: "hidden md:block"
          }), " and bring memorable brand experiences."]
        })]
      })
    }), /* @__PURE__ */ jsx(Projects$2, {}), /* @__PURE__ */ jsx(Portfolio$2, {})]
  });
};
const WebDesign_default = UNSAFE_withComponentProps(WebDesign);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WebDesign_default
}, Symbol.toStringTag, { value: "Module" }));
const cards$1 = [
  {
    id: "web",
    to: "/web-design",
    title: "WEB DESIGN",
    desktopImage: "/assets/home/desktop/image-web-design-small.jpg",
    tabletImage: "/assets/home/tablet/image-web-design.jpg",
    mobileImage: "/assets/home/mobile/image-web-design.jpg"
  },
  {
    id: "graphic",
    to: "/graphic-design",
    title: "GRAPHIC DESIGN",
    desktopImage: "/assets/home/desktop/image-graphic-design.jpg",
    tabletImage: "/assets/home/tablet/image-graphic-design.jpg",
    mobileImage: "/assets/home/mobile/image-graphic-design.jpg"
  }
];
const Portfolio$1 = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0 !mb-[17rem]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-fr max-w-[69rem] mx-auto", children: cards$1.map((card) => /* @__PURE__ */ jsxs(
    Link,
    {
      to: card.to,
      className: "relative group cursor-pointer overflow-hidden rounded-[0.9375rem] min-h-[15.625rem] md:min-h-[12.5rem] lg:min-h-[19.25rem]",
      children: [
        /* @__PURE__ */ jsxs("picture", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: card.desktopImage }),
          /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: card.tabletImage }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: card.mobileImage,
              alt: "",
              "aria-hidden": "true",
              className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10 group-hover:bg-peach/70 transition-colors duration-300", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[1.75rem] lg:text-[2.5rem] font-medium text-white mb-3 md:mb-4 tracking-widest", children: card.title }),
          /* @__PURE__ */ jsxs("span", { className: "text-white text-[0.9375rem] tracking-[5px] uppercase flex items-center justify-center gap-2", children: [
            "View Projects",
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/shared/desktop/icon-right-arrow.svg",
                alt: "",
                "aria-hidden": "true",
                className: "size-2"
              }
            )
          ] })
        ] })
      ]
    },
    card.id
  )) }) });
};
const Projects$1 = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 items-stretch justify-center text-center", children: AppDesignProjects.map(({ id, imgPath, alt, name, description }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "overflow-hidden cursor-pointer rounded-[0.9375rem] bg-[#fdf3f0] group md:flex lg:block",
      children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-[21.1875rem] md:shrink-0 lg:w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: imgPath,
            alt,
            className: "object-cover w-full h-80 md:h-[19.375rem] lg:h-80"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#fdf3f0] group-hover:bg-peach transition-colors duration-300 px-8 py-8 md:px-12 md:py-0 lg:px-8 lg:py-8 text-center flex flex-col justify-center md:flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-peach group-hover:text-white transition-colors text-xl font-medium leading-6 tracking-[5px] mb-4 uppercase", children: name }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.9375rem] md:text-base font-normal leading-[1.625rem] text-dark-gray group-hover:text-white transition-colors", children: description })
        ] })
      ]
    },
    id
  )) }) });
};
const AppDesign = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("section", {
      className: "container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0",
      children: /* @__PURE__ */ jsxs("div", {
        className: "bg-peach rounded-[0.9375rem] relative overflow-hidden text-center text-white px-6 py-24 md:px-16 md:py-16 lg:px-[11.875rem]",
        style: {
          backgroundImage: "url(/assets/app-design/desktop/bg-pattern-intro-app.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem]",
          children: "App Design"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-[0.9375rem] md:text-base font-normal mt-6 md:mt-8 leading-[1.625rem] max-w-[26rem] mx-auto",
          children: ["Our mobile designs bring intuitive digital solutions", /* @__PURE__ */ jsx("br", {
            className: "hidden md:block"
          }), " to your customers right at their fingertips."]
        })]
      })
    }), /* @__PURE__ */ jsx(Projects$1, {}), /* @__PURE__ */ jsx(Portfolio$1, {})]
  });
};
const AppDesign_default = UNSAFE_withComponentProps(AppDesign);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AppDesign_default
}, Symbol.toStringTag, { value: "Module" }));
const cards = [
  {
    id: "web",
    to: "/web-design",
    title: "WEB DESIGN",
    desktopImage: "/assets/home/desktop/image-web-design-small.jpg",
    tabletImage: "/assets/home/tablet/image-web-design.jpg",
    mobileImage: "/assets/home/mobile/image-web-design.jpg"
  },
  {
    id: "app",
    to: "/app-design",
    title: "APP DESIGN",
    desktopImage: "/assets/home/desktop/image-app-design.jpg",
    tabletImage: "/assets/home/tablet/image-app-design.jpg",
    mobileImage: "/assets/home/mobile/image-app-design.jpg"
  }
];
const Portfolio = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0 !mb-[17rem]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 auto-rows-fr max-w-[69rem] mx-auto", children: cards.map((card) => /* @__PURE__ */ jsxs(
    Link,
    {
      to: card.to,
      className: "relative group cursor-pointer overflow-hidden rounded-[0.9375rem] min-h-[15.625rem] md:min-h-[12.5rem] lg:min-h-[19.25rem]",
      children: [
        /* @__PURE__ */ jsxs("picture", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: card.desktopImage }),
          /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: card.tabletImage }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: card.mobileImage,
              alt: "",
              "aria-hidden": "true",
              className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10 group-hover:bg-peach/70 transition-colors duration-300", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[1.75rem] lg:text-[2.5rem] font-medium text-white mb-3 md:mb-4 tracking-widest", children: card.title }),
          /* @__PURE__ */ jsxs("span", { className: "text-white text-[0.9375rem] tracking-[5px] uppercase flex items-center justify-center gap-2", children: [
            "View Projects",
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/shared/desktop/icon-right-arrow.svg",
                alt: "",
                "aria-hidden": "true",
                className: "size-2"
              }
            )
          ] })
        ] })
      ]
    },
    card.id
  )) }) });
};
const Projects = () => {
  return /* @__PURE__ */ jsx("section", { className: "container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 items-stretch justify-center text-center", children: GraphicDesignProjects.map(({ id, imgPath, alt, name, description }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "overflow-hidden cursor-pointer rounded-[0.9375rem] bg-[#fdf3f0] group md:flex lg:block",
      children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-[21.1875rem] md:shrink-0 lg:w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: imgPath,
            alt,
            className: "object-cover w-full h-80 md:h-[19.375rem] lg:h-80"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#fdf3f0] group-hover:bg-peach transition-colors duration-300 px-8 py-8 md:px-12 md:py-0 lg:px-8 lg:py-8 text-center flex flex-col justify-center md:flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-peach group-hover:text-white transition-colors text-xl font-medium leading-6 tracking-[5px] mb-4 uppercase", children: name }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.9375rem] md:text-base font-normal leading-[1.625rem] text-dark-gray group-hover:text-white transition-colors", children: description })
        ] })
      ]
    },
    id
  )) }) });
};
const GraphicDesign = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("section", {
      className: "container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0",
      children: /* @__PURE__ */ jsxs("div", {
        className: "bg-peach rounded-[0.9375rem] relative overflow-hidden text-center text-white px-6 py-24 md:px-16 md:py-16 lg:px-[11.875rem]",
        style: {
          backgroundImage: "url(/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem]",
          children: "Graphic Design"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-[0.9375rem] md:text-base font-normal mt-6 md:mt-8 leading-[1.625rem] max-w-[26rem] mx-auto",
          children: ["We deliver eye-catching branding materials that are tailored", /* @__PURE__ */ jsx("br", {
            className: "hidden md:block"
          }), " to meet your business objectives."]
        })]
      })
    }), /* @__PURE__ */ jsx(Projects, {}), /* @__PURE__ */ jsx(Portfolio, {})]
  });
};
const GraphicDesign_default = UNSAFE_withComponentProps(GraphicDesign);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GraphicDesign_default
}, Symbol.toStringTag, { value: "Module" }));
const locationCards = [
  {
    id: "canada",
    name: "Canada",
    image: "/assets/shared/desktop/illustration-canada.svg"
  },
  {
    id: "australia",
    name: "Australia",
    image: "/assets/shared/desktop/illustration-australia.svg"
  },
  {
    id: "uk",
    name: "United Kingdom",
    image: "/assets/shared/desktop/illustration-united-kingdom.svg"
  }
];
const AboutContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[320px] left-0 -translate-x-1/2 z-0 hidden xl:block", children: /* @__PURE__ */ jsx("img", { src: "/assets/shared/desktop/bg-pattern-leaf.svg", alt: "" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] right-0 translate-x-1/2 z-0 hidden xl:block", children: /* @__PURE__ */ jsx("img", { src: "/assets/shared/desktop/bg-pattern-leaf.svg", alt: "" }) }),
    /* @__PURE__ */ jsx("section", { className: "container !mt-4 md:!mt-8 px-0 md:px-10 lg:px-0 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 rounded-[0.9375rem] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "relative h-[20rem] md:h-[20rem] lg:h-auto", children: /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: "/assets/about/desktop/image-about-hero.jpg" }),
        /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: "/assets/about/tablet/image-about-hero.jpg" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/about/mobile/image-about-hero.jpg",
            alt: "Team collaboration",
            className: "w-full h-full object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-peach relative overflow-hidden flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-14 lg:px-24 py-20 md:py-16 lg:py-0",
          style: {
            backgroundImage: "url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg), url(/assets/about/desktop/bg-pattern-hero-about-desktop.svg)",
            backgroundPosition: "right center, left center",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "contain, cover"
          },
          children: [
            /* @__PURE__ */ jsx("h1", { className: "text-white text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem] mb-6", children: "About Us" }),
            /* @__PURE__ */ jsx("p", { className: "text-white text-[0.9375rem] md:text-base font-normal leading-[1.625rem] max-w-[35rem]", children: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We have partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We are always looking forward to creating brands, products, and digital experiences that connect with our clients audiences." })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container mt-24 md:mt-32 lg:mt-40 mb-24 md:mb-32 lg:mb-40 px-0 md:px-10 lg:px-0 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 rounded-[0.9375rem] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "relative h-80 md:h-80 lg:h-auto", children: /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: "/assets/about/desktop/image-world-class-talent.jpg" }),
        /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: "/assets/about/tablet/image-world-class-talent.jpg" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/about/mobile/image-world-class-talent.jpg",
            alt: "World class talent",
            className: "w-full h-full object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative overflow-hidden flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-14 lg:px-24 py-20 md:py-16",
          style: {
            backgroundColor: "#fdf3f0",
            backgroundImage: "url(/assets/shared/desktop/bg-pattern-two-circles.svg)",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat"
          },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-peach text-[2rem] md:text-[2.5rem] font-medium leading-tight mb-6", children: "World-class talent" }),
            /* @__PURE__ */ jsx("p", { className: "text-dark-gray text-[0.9375rem] md:text-base leading-[1.625rem] mb-6 max-w-[33rem]", children: "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms." }),
            /* @__PURE__ */ jsx("p", { className: "text-dark-gray text-[0.9375rem] md:text-base leading-[1.625rem] max-w-[33rem]", children: "Our team is multi-disciplinary and we are not merely interested in form. Content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery." })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container mb-24 md:mb-32 lg:mb-40 px-6 md:px-10 lg:px-0 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center", children: locationCards.map((card) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8", children: /* @__PURE__ */ jsx("img", { src: card.image, alt: card.name }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase", children: card.name }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/locations",
          className: "bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors",
          children: "See Location"
        }
      )
    ] }, card.id)) }) }),
    /* @__PURE__ */ jsx("section", { className: "container mb-40 px-0 md:px-10 lg:px-0 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 rounded-[0.9375rem] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "relative h-80 md:h-80 lg:h-auto order-1 lg:order-2", children: /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(min-width: 1024px)", srcSet: "/assets/about/desktop/image-real-deal.jpg" }),
        /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: "/assets/about/tablet/image-real-deal.jpg" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/about/mobile/image-real-deal.jpg",
            alt: "The real deal",
            className: "w-full h-full object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative overflow-hidden flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-14 lg:px-24 py-20 md:py-16 order-2 lg:order-1",
          style: {
            backgroundColor: "#fdf3f0",
            backgroundImage: "url(/assets/shared/desktop/bg-pattern-two-circles.svg)",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat"
          },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-peach text-[2rem] md:text-[2.5rem] font-medium leading-tight mb-6", children: "The real deal" }),
            /* @__PURE__ */ jsx("p", { className: "text-dark-gray text-[0.9375rem] md:text-base leading-[1.625rem] mb-6 max-w-[33rem]", children: "As strategic partners in our clients businesses, we are ready to take on any challenge as our own. Solving real problems requires empathy and collaboration, and we strive to bring a fresh perspective to every opportunity." }),
            /* @__PURE__ */ jsx("p", { className: "text-dark-gray text-[0.9375rem] md:text-base leading-[1.625rem] max-w-[33rem]", children: "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results." })
          ]
        }
      )
    ] }) })
  ] });
};
const AboutUs = () => {
  return /* @__PURE__ */ jsx(AboutContent, {});
};
const AboutUs_default = UNSAFE_withComponentProps(AboutUs);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs_default
}, Symbol.toStringTag, { value: "Module" }));
const locations = [{
  id: "1",
  country: "Canada",
  office: "Designo Central Office",
  address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
  phone: "+1 253-863-8967",
  email: "contact@designo.co",
  mapDesktop: "/assets/locations/desktop/image-map-canada.png",
  mapTablet: "/assets/locations/tablet/image-map-canada.png"
}, {
  id: "2",
  country: "Australia",
  office: "Designo AU Office",
  address: ["19 Balonne Street", "New South Wales 2443"],
  phone: "(02) 6720 9092",
  email: "contact@designo.au",
  mapDesktop: "/assets/locations/desktop/image-map-australia.png",
  mapTablet: "/assets/locations/tablet/image-map-australia.png"
}, {
  id: "3",
  country: "United Kingdom",
  office: "Designo UK Office",
  address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
  phone: "078 3115 1400",
  email: "contact@designo.uk",
  mapDesktop: "/assets/locations/desktop/image-map-united-kingdom.png",
  mapTablet: "/assets/locations/tablet/image-map-uk.png"
}];
const Locations = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "container !mt-4 md:!mt-8 mb-40 px-0 md:px-10 lg:px-0",
    children: locations.map((location, index) => {
      const isReversed = index % 2 === 1;
      const desktopGridClass = isReversed ? "lg:grid-cols-[350px_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_350px]";
      const patternClass = isReversed ? "lg:locations-card-pattern-right locations-card-pattern-left" : "locations-card-pattern-left";
      return /* @__PURE__ */ jsxs("div", {
        className: `grid grid-cols-1 ${desktopGridClass} gap-0 md:gap-8 lg:gap-[30px] items-stretch ${index < locations.length - 1 ? "mb-10 md:mb-8" : ""}`,
        children: [/* @__PURE__ */ jsxs("div", {
          className: `locations-card ${patternClass} ${isReversed ? "lg:order-2" : "lg:order-1"} order-2 relative overflow-hidden rounded-none md:rounded-[0.9375rem] flex flex-col justify-center px-6 md:px-14 lg:px-[95px] py-20 md:py-[5.5rem] min-h-[24.375rem] md:min-h-[20.375rem]`,
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-peach text-[2rem] md:text-[2.5rem] font-medium leading-tight mb-6 md:mb-8 relative z-10 text-center md:text-left",
            children: location.country
          }), /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 lg:gap-x-[30px] relative z-10 text-center md:text-left",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                className: "text-dark-gray text-[15px] font-bold leading-[25px] mb-2",
                children: location.office
              }), /* @__PURE__ */ jsx("address", {
                className: "text-dark-gray text-[15px] font-normal leading-[25px] not-italic",
                children: location.address.map((line, i) => /* @__PURE__ */ jsxs(React.Fragment, {
                  children: [line, i < location.address.length - 1 && /* @__PURE__ */ jsx("br", {})]
                }, i))
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                className: "text-dark-gray text-[15px] font-bold leading-[25px] mb-2",
                children: "Contact"
              }), /* @__PURE__ */ jsxs("address", {
                className: "text-dark-gray text-[15px] font-normal leading-[25px] not-italic",
                children: [/* @__PURE__ */ jsxs("a", {
                  href: `tel:${location.phone}`,
                  className: "hover:text-peach transition-colors",
                  children: ["P : ", location.phone]
                }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("a", {
                  href: `mailto:${location.email}`,
                  className: "hover:text-peach transition-colors",
                  children: ["M : ", location.email]
                })]
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: `${isReversed ? "lg:order-1" : "lg:order-2"} order-1 rounded-none md:rounded-[0.9375rem] overflow-hidden h-80 md:h-[20.375rem]`,
          children: /* @__PURE__ */ jsxs("picture", {
            children: [/* @__PURE__ */ jsx("source", {
              media: "(min-width: 1024px)",
              srcSet: location.mapDesktop
            }), /* @__PURE__ */ jsx("img", {
              src: location.mapTablet,
              alt: `${location.country} office location map`,
              className: "w-full h-full object-cover"
            })]
          })
        })]
      }, location.id);
    })
  });
};
const Locations_default = UNSAFE_withComponentProps(Locations);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Locations_default
}, Symbol.toStringTag, { value: "Module" }));
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("section", {
      className: "container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0",
      children: /* @__PURE__ */ jsx("div", {
        className: "bg-peach rounded-[0.9375rem] overflow-hidden px-6 py-[4.5rem] md:px-14 md:py-16 lg:px-[95px] lg:py-[55px] bg-[url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] md:bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] bg-no-repeat bg-left-top md:bg-left",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-center lg:text-left",
            children: [/* @__PURE__ */ jsx("h1", {
              className: "text-white text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem] mb-6",
              children: "Contact Us"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-white text-[0.9375rem] md:text-base font-normal leading-[1.625rem] max-w-[35rem] mx-auto lg:mx-0",
              children: "Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "relative z-10",
            children: /* @__PURE__ */ jsxs("form", {
              onSubmit: handleSubmit,
              className: "space-y-6",
              children: [/* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsx("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  value: formData.name,
                  onChange: handleChange,
                  className: "w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-[0.9375rem] md:text-base px-3",
                  required: true
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsx("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email Address",
                  value: formData.email,
                  onChange: handleChange,
                  className: "w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-[0.9375rem] md:text-base px-3",
                  required: true
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsx("input", {
                  type: "tel",
                  name: "phone",
                  placeholder: "Phone",
                  value: formData.phone,
                  onChange: handleChange,
                  className: "w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-[0.9375rem] md:text-base px-3",
                  required: true
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsx("textarea", {
                  name: "message",
                  placeholder: "Your Message",
                  value: formData.message,
                  onChange: handleChange,
                  rows: 5,
                  className: "w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none text-[0.9375rem] md:text-base px-3",
                  required: true
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "flex justify-center lg:justify-end pt-4",
                children: /* @__PURE__ */ jsx(Button, {
                  type: "submit",
                  className: "uppercase py-4 px-8 cursor-pointer bg-white rounded-lg text-sm font-medium text-dark-gray hover:bg-light-gray transition-colors",
                  children: "Submit"
                })
              })]
            })
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "container mt-24 md:mt-32 lg:mt-40 mb-[17rem] px-6 md:px-10 lg:px-0",
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-center",
          children: [/* @__PURE__ */ jsx("div", {
            className: "bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8",
            children: /* @__PURE__ */ jsx("img", {
              src: "/assets/shared/desktop/illustration-canada.svg",
              alt: "Canada"
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase",
            children: "Canada"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/locations",
            className: "bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors",
            children: "See Location"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-center",
          children: [/* @__PURE__ */ jsx("div", {
            className: "bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8",
            children: /* @__PURE__ */ jsx("img", {
              src: "/assets/shared/desktop/illustration-australia.svg",
              alt: "Australia"
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase",
            children: "Australia"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/locations",
            className: "bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors",
            children: "See Location"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-center",
          children: [/* @__PURE__ */ jsx("div", {
            className: "bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8",
            children: /* @__PURE__ */ jsx("img", {
              src: "/assets/shared/desktop/illustration-united-kingdom.svg",
              alt: "United Kingdom"
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase",
            children: "United Kingdom"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/locations",
            className: "bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors",
            children: "See Location"
          })]
        })]
      })
    })]
  });
};
const Contact_default = UNSAFE_withComponentProps(Contact);
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact_default
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-oxnhU3z5.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-Dw0NconQ.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js", "/assets/button-DKT9WiSq.js"], "css": ["/assets/root-B2Ma2mq5.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-CektUkG9.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js", "/assets/button-DKT9WiSq.js", "/assets/index-DWBa758G.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/WebDesign": { "id": "routes/WebDesign", "parentId": "root", "path": "/web-design", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/WebDesign-DKs7CVFQ.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js", "/assets/index-DWBa758G.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/AppDesign": { "id": "routes/AppDesign", "parentId": "root", "path": "/app-design", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/AppDesign-Cem1m4tW.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js", "/assets/index-DWBa758G.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/GraphicDesign": { "id": "routes/GraphicDesign", "parentId": "root", "path": "/graphic-design", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/GraphicDesign-Vl-JPqld.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js", "/assets/index-DWBa758G.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/AboutUs": { "id": "routes/AboutUs", "parentId": "root", "path": "/company", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/AboutUs-Dtbg4WW0.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Locations": { "id": "routes/Locations", "parentId": "root", "path": "/locations", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/Locations-By9kGQDx.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Contact": { "id": "routes/Contact", "parentId": "root", "path": "/contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/Contact-Oucz_3FQ.js", "imports": ["/assets/chunk-LFPYN7LY-CifxBOxn.js", "/assets/button-DKT9WiSq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-620a139a.js", "version": "620a139a", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/WebDesign": {
    id: "routes/WebDesign",
    parentId: "root",
    path: "/web-design",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/AppDesign": {
    id: "routes/AppDesign",
    parentId: "root",
    path: "/app-design",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/GraphicDesign": {
    id: "routes/GraphicDesign",
    parentId: "root",
    path: "/graphic-design",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/AboutUs": {
    id: "routes/AboutUs",
    parentId: "root",
    path: "/company",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/Locations": {
    id: "routes/Locations",
    parentId: "root",
    path: "/locations",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/Contact": {
    id: "routes/Contact",
    parentId: "root",
    path: "/contact",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
