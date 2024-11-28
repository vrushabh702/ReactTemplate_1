import React, { useEffect, useState } from "react";

const Services = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/server/Services/services.json")
      .then((response) => response.json())
      .then((data) => setServiceData(data))
      .catch((error) => console.error("Error fetching services data:", error));
  }, []);

  // Handle loading state while serviceData is not available
  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid service pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">{serviceData.title}</h4>
          <h1 className="display-5 mb-4">{serviceData.heading}</h1>
          <p className="mb-0">{serviceData.description}</p>
        </div>

        {/* Render services if available */}
        {serviceData.services && serviceData.services.length > 0 && (
          <div className="row g-4">
            {serviceData.services.map((service, index) => (
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
                key={index}
              >
                <div className="service-item">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded-top w-100"
                  />
                  <div className="rounded-bottom p-4">
                    <h4 className="d-inline-block mb-4">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    {service.button && (
                      <a href={service.link} className="btn btn-primary">
                        {service.button || "Learn More"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
