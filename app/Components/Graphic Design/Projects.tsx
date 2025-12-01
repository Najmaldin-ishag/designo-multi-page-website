import { GraphicDesignProjects } from "~/constants";

const Projects = () => {
  return (
    <section className="container !mt-[7rem]">
      <div className="grid grid-cols-3 gap-8 items-center justify-center text-center ">
        {GraphicDesignProjects.map(({ id, imgPath, alt, name, description }) => (
          <div key={id} className=" overflow-hidden cursor-pointer rounded-xl ">
            <div>
              <img src={imgPath} alt={alt} className="object-contain w-fit " />
            </div>
            <div className="bg-light-peach/50 p-15  ">
              <h3 className="text-peach text-xl font-medium leading-6 tracking-wider mb-3  ">
                {name}
              </h3>
              <p className="text-lg font-normal leading-6 ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

