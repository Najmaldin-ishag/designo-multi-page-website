import React from "react";

const locations = [
  {
    id: "1",
    country: "Canada",
    office: "Designo Central Office",
    address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    mapDesktop: "/assets/locations/desktop/image-map-canada.png",
    mapTablet: "/assets/locations/tablet/image-map-canada.png",
  },
  {
    id: "2",
    country: "Australia",
    office: "Designo AU Office",
    address: ["19 Balonne Street", "New South Wales 2443"],
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    mapDesktop: "/assets/locations/desktop/image-map-australia.png",
    mapTablet: "/assets/locations/tablet/image-map-australia.png",
  },
  {
    id: "3",
    country: "United Kingdom",
    office: "Designo UK Office",
    address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    mapDesktop: "/assets/locations/desktop/image-map-united-kingdom.png",
    mapTablet: "/assets/locations/tablet/image-map-uk.png",
  },
];

const Locations = () => {
  return (
    <div className="container !mt-4 md:!mt-8 mb-40 px-0 md:px-10 lg:px-0">
      {locations.map((location, index) => {
        const isReversed = index % 2 === 1;
        const desktopGridClass = isReversed
          ? "lg:grid-cols-[350px_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,1fr)_350px]";
        const patternClass = isReversed
          ? "lg:locations-card-pattern-right locations-card-pattern-left"
          : "locations-card-pattern-left";

        return (
          <div
            key={location.id}
            className={`grid grid-cols-1 ${desktopGridClass} gap-0 md:gap-8 lg:gap-[30px] items-stretch ${
              index < locations.length - 1 ? "mb-10 md:mb-8" : ""
            }`}
          >
            <div
              className={`locations-card ${patternClass} ${
                isReversed ? "lg:order-2" : "lg:order-1"
              } order-2 relative overflow-hidden rounded-none md:rounded-[0.9375rem] flex flex-col justify-center px-6 md:px-14 lg:px-[95px] py-20 md:py-[5.5rem] min-h-[24.375rem] md:min-h-[20.375rem]`}
            >
              <h2 className="text-peach text-[2rem] md:text-[2.5rem] font-medium leading-tight mb-6 md:mb-8 relative z-10 text-center md:text-left">
                {location.country}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 lg:gap-x-[30px] relative z-10 text-center md:text-left">
                <div>
                  <p className="text-dark-gray text-[15px] font-bold leading-[25px] mb-2">
                    {location.office}
                  </p>
                  <address className="text-dark-gray text-[15px] font-normal leading-[25px] not-italic">
                    {location.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < location.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </address>
                </div>
                <div>
                  <p className="text-dark-gray text-[15px] font-bold leading-[25px] mb-2">
                    Contact
                  </p>
                  <address className="text-dark-gray text-[15px] font-normal leading-[25px] not-italic">
                    <a href={`tel:${location.phone}`} className="hover:text-peach transition-colors">
                      P : {location.phone}
                    </a>
                    <br />
                    <a href={`mailto:${location.email}`} className="hover:text-peach transition-colors">
                      M : {location.email}
                    </a>
                  </address>
                </div>
              </div>
            </div>

            {/* Map - rounded corners, full height */}
            <div
              className={`${
                isReversed ? "lg:order-1" : "lg:order-2"
              } order-1 rounded-none md:rounded-[0.9375rem] overflow-hidden h-80 md:h-[20.375rem]`}
            >
              <picture>
                <source media="(min-width: 1024px)" srcSet={location.mapDesktop} />
                <img
                  src={location.mapTablet}
                  alt={`${location.country} office location map`}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Locations;
