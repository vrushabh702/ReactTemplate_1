import React, { useEffect, useState } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/about.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching About data:", error));
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-xl-7">
            <h4 className="text-primary">{aboutData.title}</h4>
            <h1 className="display-5 mb-4">{aboutData.heading}</h1>
            <p className="mb-4">{aboutData.description}</p>
            <div className="row g-4">
              {aboutData.features.map((feature, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex">
                    <i className={`${feature.icon} fa-3x text-primary`}></i>
                    <div className="ms-4">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-sm-6">
                <a
                  href={aboutData.ctaButton.link}
                  className="btn btn-primary rounded-pill py-3 px-5"
                >
                  {aboutData.ctaButton.label}
                </a>
              </div>
              <div className="col-sm-6">
                <div className="d-flex">
                  <i
                    className={`${aboutData.contact.icon} fa-2x text-primary me-4`}
                  ></i>
                  <div>
                    <h4>{aboutData.contact.title}</h4>
                    <p className="fs-5">{aboutData.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="bg-primary rounded position-relative overflow-hidden">
              <img
                src={aboutData.images.main}
                className="img-fluid rounded w-100"
                alt="Main"
              />
              <img
                src={aboutData.images.overlay1}
                className="position-absolute"
                style={{
                  top: "-15px",
                  right: "-15px",
                  width: "150px",
                  opacity: 0.7,
                }}
                alt="Overlay 1"
              />
              <img
                src={aboutData.images.overlay2}
                className="position-absolute"
                style={{
                  top: "-20px",
                  left: "10px",
                  width: "100px",
                  transform: "rotate(90deg)",
                  opacity: 0.9,
                }}
                alt="Overlay 2"
              />
              <img
                src={aboutData.images.bottom}
                className="img-fluid rounded-bottom w-100"
                alt="Bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
fetch("http://localhost:3000/Server/Topbar/topbar.json");
