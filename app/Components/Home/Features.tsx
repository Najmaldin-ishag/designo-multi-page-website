import { FeaturesSection } from "~/constants";
const Features = () => {
  return (
    <section className="container !mt-25 !mb-[20rem]">
      <div className="grid grid-cols-3 gap-[4.5rem]">
        {FeaturesSection.map(({ id, title, imgPath, description, alt }) => (
          <div key={id} className="text-center">
            <img src={imgPath} alt={alt} className="mx-auto" />
            <h4 className="uppercase tracking-[.5rem] mt-8 text-xl font-medium leading-6 text-dark-gray">
              {title}
            </h4>
            <p className="mt-8 text-lg font-normal leading-6 text-dark-gray">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
