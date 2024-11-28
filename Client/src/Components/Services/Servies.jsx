import React, { useEffect, useState } from "react";

const Services = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/server/Services/services.json")
      .then((response) => response.json())
      .then((data) => setServiceData(data))
      .catch((error) => console.error("Error fetching services data:", error));
  }, []);
  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid service pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxwidth: "800px" }}
        >
          <h4 className="text-primary">{serviceData.title}</h4>
          <h1 className="display-5 mb-4">{serviceData.heading}</h1>
          <p className="mb-0">{serviceData.description}</p>
        </div>
        <div className="row g-4">
          {serviceData.services.map((service, index) => {
            return (
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
                key={index}
              >
                <div className="service-item">
                  <div className="service-img">
                    <img
                      src={service.image}
                      className="img-fluid rounded-top w-100"
                      alt={service.title}
                    />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href={service.link} className="h4 d-inline-block mb-4">
                      {service.title}
                    </a>
                    <p className="mb-4">{service.description}</p>
                    <a
                      className="btn btn-primary rounded-pill py-2 px-4"
                      href={service.link}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
