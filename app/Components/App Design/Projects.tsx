import { AppDesignProjects } from "~/constants";

const Projects = () => {
  return (
    <section className="container !mt-24 md:!mt-[7.5rem] px-6 md:px-10 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 items-stretch justify-center text-center">
        {AppDesignProjects.map(({ id, imgPath, alt, name, description }) => (
          <div
            key={id}
            className="overflow-hidden cursor-pointer rounded-[0.9375rem] bg-[#fdf3f0] group md:flex lg:block"
          >
            <div className="md:w-[21.1875rem] md:shrink-0 lg:w-full">
              <img
                src={imgPath}
                alt={alt}
                className="object-cover w-full h-80 md:h-[19.375rem] lg:h-80"
              />
            </div>
            <div className="bg-[#fdf3f0] group-hover:bg-peach transition-colors duration-300 px-8 py-8 md:px-12 md:py-0 lg:px-8 lg:py-8 text-center flex flex-col justify-center md:flex-1">
              <h3 className="text-peach group-hover:text-white transition-colors text-xl font-medium leading-6 tracking-[5px] mb-4 uppercase">
                {name}
              </h3>
              <p className="text-[0.9375rem] md:text-base font-normal leading-[1.625rem] text-dark-gray group-hover:text-white transition-colors">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

