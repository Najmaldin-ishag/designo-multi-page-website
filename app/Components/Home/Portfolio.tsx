const Portfolio = () => {
  return (
    <div className="min-h-screen !mt-25 p-5 ">
      <section className="  px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 auto-rows-fr max-w-[69rem] mx-auto">
          {/* Web Design - Large Left Section spanning 2 columns and 2 rows */}
          <div className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-lg  min-h-[320px] lg:min-h-[640px]  ">
            <div className="absolute inset-0 bg-[url(/assets/home/desktop/image-web-design-large.jpg)] bg-cover bg-center transition-transform  duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10">
              <h2 className="text-3xl lg:text-5xl font-medium text-white mb-4 tracking-widest">
                WEB DESIGN
              </h2>
              <button className="text-white text-sm tracking-widest  pb-1 transition-colors uppercase flex items-center justify-center gap-2 ">
                VIEW PROJECTS{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-peach"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* App Design - Top Right */}
          <div className="lg:col-start-3 lg:col-end-5 relative group cursor-pointer overflow-hidden rounded-lg min-h-[320px]">
            <div className="absolute inset-0 bg-[url(/assets/home/desktop/image-app-design.jpg)] bg-cover bg-center transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10">
              <h2 className="text-2xl lg:text-4xl font-medium text-white mb-3 tracking-widest">
                APP DESIGN
              </h2>
              <button className="text-white text-sm tracking-widest  pb-1 transition-colors uppercase flex items-center justify-center gap-2">
                VIEW PROJECTS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-peach"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Graphic Design - Bottom Right */}
          <div className="lg:col-start-3 lg:col-end-5 relative group cursor-pointer overflow-hidden rounded-lg min-h-[320px]">
            <div className="absolute inset-0 bg-[url(/assets/home/desktop/image-graphic-design.jpg)] bg-cover bg-center transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center z-10">
              <h2 className="text-2xl lg:text-4xl font-medium text-white mb-3 tracking-widest">
                GRAPHIC DESIGN
              </h2>
              <button className="text-white text-sm tracking-widest  pb-1 transition-colors uppercase flex items-center justify-center gap-2">
                VIEW PROJECTS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-peach"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
