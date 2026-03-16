import { FeaturesSection } from "~/constants";
const Features = () => {
  return (
    <section className="container !mt-24 md:!mt-30 !mb-[18rem] md:!mb-[20rem] px-6 md:px-10 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-[4.5rem]">
        {FeaturesSection.map(({ id, title, imgPath, description, alt }) => (
          <div
            key={id}
            className="text-center md:text-left lg:text-center md:flex md:items-center md:gap-12 lg:block"
          >
            <img src={imgPath} alt={alt} className="mx-auto md:mx-0 lg:mx-auto shrink-0" />
            <div>
              <h4 className="uppercase tracking-[.3125rem] md:tracking-[.5rem] mt-8 md:mt-0 lg:mt-8 text-xl font-medium leading-6 text-dark-gray">
              {title}
              </h4>
              <p className="mt-6 md:mt-4 lg:mt-8 text-[0.9375rem] lg:text-lg font-normal leading-[1.625rem] lg:leading-6 text-dark-gray max-w-[36rem] mx-auto md:mx-0 lg:mx-auto">
              {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
