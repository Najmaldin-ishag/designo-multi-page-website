import React from "react";

const Locations = () => {
  const locations = [
    {
      id: "1",
      country: "Canada",
      office: "Designo Central Office",
      address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
      phone: "+1 253-863-8967",
      email: "contact@designo.co",
      map: "/assets/locations/desktop/image-map-canada.png",
      illustration: "/assets/shared/desktop/illustration-canada.svg",
    },
    {
      id: "2",
      country: "Australia",
      office: "Designo AU Office",
      address: ["19 Balonne Street", "New South Wales 2443"],
      phone: "(02) 6720 9092",
      email: "contact@designo.au",
      map: "/assets/locations/desktop/image-map-australia.png",
      illustration: "/assets/shared/desktop/illustration-australia.svg",
    },
    {
      id: "3",
      country: "United Kingdom",
      office: "Designo UK Office",
      address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
      phone: "078 3115 1400",
      email: "contact@designo.uk",
      map: "/assets/locations/desktop/image-map-united-kingdom.png",
      illustration: "/assets/shared/desktop/illustration-united-kingdom.svg",
    },
  ];

  return (
    <div className="container !mt-8">
      {locations.map((location, index) => (
        <div
          key={location.id}
          className={`grid grid-cols-2 gap-8 items-center mb-[7rem] ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          {/* Map */}
          <div
            className={`${index % 2 === 1 ? "order-2" : "order-1"} rounded-lg overflow-hidden`}
          >
            <img
              src={location.map}
              alt={`${location.country} map`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Info */}
          <div
            className={`${index % 2 === 1 ? "order-1" : "order-2"} bg-light-peach/50 rounded-lg p-12`}
          >
            <h2 className="text-peach text-5xl font-medium leading-tight mb-6">
              {location.country}
            </h2>
            <div className="mb-6">
              <p className="text-dark-gray text-base font-bold leading-6 mb-2">
                {location.office}
              </p>
              <address className="text-dark-gray text-base font-normal leading-6 not-italic">
                {location.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < location.address.length - 1 && <br />}
                  </span>
                ))}
              </address>
            </div>
            <div>
              <p className="text-dark-gray text-base font-bold leading-6 mb-2">
                Contact
              </p>
              <address className="text-dark-gray text-base font-normal leading-6 not-italic">
                <a href={`tel:${location.phone}`}>P : {location.phone}</a>
                <br />
                <a href={`mailto:${location.email}`}>M : {location.email}</a>
              </address>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;

