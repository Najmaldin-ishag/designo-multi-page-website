import { ProjectShowcase } from "~/constants";

const Projects = () => {
  return (
    <section className="container !mt-[7rem]">
      <div className="grid grid-cols-3 gap-8 items-center justify-center text-center">
        {ProjectShowcase.map(({ id, imgPath, alt, name, description }) => (
          <div key={id} className="rounded-xl overflow-hidden ">
            <div className="!rounded-2xl">
              <div>
                <img src={imgPath} alt={alt} className="object-contain " />
              </div>
              <div className="bg-light-peach/50 p-10 ">
                <h3 className="text-peach text-xl font-medium leading-6 tracking-wider mb-5  ">
                  {name}
                </h3>
                <p className="text-lg font-normal leading-6 ">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
