import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/server/Home/home.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCarouselData(data);
      })
      .catch((error) => console.error("Error fetching carousel data:", error));
  }, []);

  useEffect(() => {
    if (window.$ && window.$(".header-carousel").owlCarousel) {
      window.$(".header-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      });
    }
  }, [carouselData]); // Ensure it re-runs after data is set

  if (!carouselData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="header-carousel owl-carousel">
      {carouselData.carouselItems.map((item, index) => (
        <div className="header-carousel-item" key={index}>
          <img src={item.image} className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row gy-0 gx-5">
                <div className="col-lg-0 col-xl-5"></div>
                <div className="col-xl-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-end">
                    <h4 className="text-primary text-uppercase fw-bold mb-4">
                      {item.caption.heading}
                    </h4>
                    <h1 className="display-4 text-uppercase text-white mb-4">
                      {item.caption.subHeading}
                    </h1>
                    <p className="mb-5 fs-5">{item.caption.description}</p>
                    <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                      {item.caption.buttons.map((button, index) => (
                        <a
                          key={index}
                          className={`btn ${
                            button.text === "Learn More"
                              ? "btn-primary"
                              : "btn-light"
                          } rounded-pill py-3 px-4 px-md-5 me-2`}
                          href={button.link}
                        >
                          <i className={`${button.icon} me-2`}></i>{" "}
                          {button.text}
                        </a>
                      ))}
                    </div>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                      <h2 className="text-white me-2">Follow Us:</h2>
                      <div className="d-flex justify-content-end ms-2">
                        {item.caption.socialLinks.map((social, index) => (
                          <a
                            key={index}
                            className="btn btn-md-square btn-light rounded-circle me-2"
                            href={social.link}
                          >
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
