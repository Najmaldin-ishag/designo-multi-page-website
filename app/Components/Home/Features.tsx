import { FeaturesSection } from "~/constants";
const Features = () => {
  return (
    <section className="container px-10 !mt-20 !mb-25">
      <div className="grid grid-cols-3 gap-8">
        {FeaturesSection.map(({ id, title, imgPath, description, alt }) => (
          <div key={id} className="text-center">
            <img src={imgPath} alt={alt} className="mx-auto" />
            <h4 className="uppercase tracking-[.5rem] mt-5 text-xl font-medium leading-6 text-dark-gray">
              {title}
            </h4>
            <p className="mt-5 text-xl font-normal leading-6 text-dark-gray">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
