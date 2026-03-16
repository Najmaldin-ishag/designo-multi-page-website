import { Link } from "react-router";

const cards = [
  {
    id: "web",
    to: "/web-design",
    title: "WEB DESIGN",
    desktopImage: "/assets/home/desktop/image-web-design-large.jpg",
    tabletImage: "/assets/home/tablet/image-web-design.jpg",
    mobileImage: "/assets/home/mobile/image-web-design.jpg",
    className:
      "lg:col-span-2 lg:row-span-2 min-h-[250px] md:min-h-[200px] lg:min-h-[640px]",
    headingClass: "text-[1.75rem] md:text-[2.5rem] lg:text-5xl",
  },
  {
    id: "app",
    to: "/app-design",
    title: "APP DESIGN",
    desktopImage: "/assets/home/desktop/image-app-design.jpg",
    tabletImage: "/assets/home/tablet/image-app-design.jpg",
    mobileImage: "/assets/home/mobile/image-app-design.jpg",
    className: "lg:col-start-3 lg:col-end-5 min-h-[250px] md:min-h-[200px] lg:min-h-[308px]",
    headingClass: "text-[1.75rem] lg:text-4xl",
  },
  {
    id: "graphic",
    to: "/graphic-design",
    title: "GRAPHIC DESIGN",
    desktopImage: "/assets/home/desktop/image-graphic-design.jpg",
    tabletImage: "/assets/home/tablet/image-graphic-design.jpg",
    mobileImage: "/assets/home/mobile/image-graphic-design.jpg",
    className: "lg:col-start-3 lg:col-end-5 min-h-[250px] md:min-h-[200px] lg:min-h-[308px]",
    headingClass: "text-[1.75rem] lg:text-4xl",
  },
];

const Portfolio = () => {
  return (
    <section className="container !mt-25 px-6 md:px-10 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr max-w-[69rem] mx-auto">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.to}
            className={`relative group cursor-pointer overflow-hidden rounded-[0.9375rem] ${card.className}`}
          >
            <picture className="absolute inset-0">
              <source media="(min-width: 1024px)" srcSet={card.desktopImage} />
              <source media="(min-width: 768px)" srcSet={card.tabletImage} />
              <img
                src={card.mobileImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </picture>
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10 group-hover:bg-peach/70 transition-colors duration-300">
              <h2 className={`${card.headingClass} font-medium text-white mb-3 md:mb-4 tracking-widest`}>
                {card.title}
              </h2>
              <span className="text-white text-[0.9375rem] tracking-[5px] uppercase flex items-center justify-center gap-2">
                View Projects
                <img
                  src="/assets/shared/desktop/icon-right-arrow.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-2"
                />
              </span>
            </div>
          </Link>
        ))}
        </div>
    </section>
  );
};

export default Portfolio;
