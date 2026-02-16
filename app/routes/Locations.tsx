import React from "react";

const locations = [
  {
    id: "1",
    country: "Canada",
    office: "Designo Central Office",
    address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    map: "/assets/locations/desktop/image-map-canada.png",
  },
  {
    id: "2",
    country: "Australia",
    office: "Designo AU Office",
    address: ["19 Balonne Street", "New South Wales 2443"],
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    map: "/assets/locations/desktop/image-map-australia.png",
  },
  {
    id: "3",
    country: "United Kingdom",
    office: "Designo UK Office",
    address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    map: "/assets/locations/desktop/image-map-united-kingdom.png",
  },
];

const Locations = () => {
  return (
    <div className="container !mt-8 mb-40">
      {locations.map((location, index) => {
        const isReversed = index % 2 === 1;
        const desktopGridClass = isReversed
          ? "lg:grid-cols-[350px_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,1fr)_350px]";

        return (
          <div
            key={location.id}
            className={`grid grid-cols-1 ${desktopGridClass} gap-0 lg:gap-[30px] items-stretch ${
              index < locations.length - 1 ? "mb-8 lg:mb-8" : ""
            }`}
          >
            {/* Info Card - light peachy-pink, rounded, subtle circle pattern */}
            <div
              className={`locations-card locations-card-pattern-left ${
                isReversed ? "lg:order-2" : "lg:order-1"
              } order-2 relative overflow-hidden rounded-[0.9375rem] flex flex-col justify-center px-10 py-12 sm:py-16 lg:px-[95px] lg:py-[88px] min-h-[320px]`}
            >
              <h2 className="text-peach text-[2rem] lg:text-[2.5rem] font-medium leading-tight mb-6 lg:mb-8 relative z-10">
                {location.country}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 lg:gap-x-[30px] relative z-10">
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
              } order-1 rounded-[0.9375rem] overflow-hidden h-[320px] lg:h-[326px]`}
            >
              <img
                src={location.map}
                alt={`${location.country} office location map`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Locations;
