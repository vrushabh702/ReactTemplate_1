import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [topbarData, setTopbarData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/Server/Topbar/topbar.json")
      .then((response) => response.json())
      .then((data) => setTopbarData(data))
      .catch((error) => console.error("Error fetching topbar data:", error));
  }, []);
  if (!topbarData) return <div>Loading...</div>;

  return (
    <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-flex flex-wrap">
            {topbarData.topbar.contactInfo.map((info, index) => {
              return (
                <a
                  key={index}
                  href={info.link}
                  className="text-muted small me-4"
                >
                  <i className={`${info.icon} text-primary me-2`}>
                    {info.label}
                  </i>
                </a>
              );
            })}

            {/* <a href="#" className="text-muted small me-4"></a>
            <a href="tel:+01234567890" className="text-muted small me-4">
              <i className=""></i>
            </a>
            <a
              href="mailto:example@gmail.com"
              className="text-muted small me-0"
            >
              <i className=""></i>
            </a> */}
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center">
            {topbarData.topbar.userActions.map((action, index) => (
              <a key={index} href={action.link}>
                <small className="me-3 text-dark">
                  <i className={`${action.icon} text-primary me-2`}>
                    {action.label}
                  </i>
                </small>
              </a>
            ))}
            <div className="dropdown">
              <a
                href={topbarData.topbar.dashboard.link}
                className="dropdown-toggle text-dark"
                data-bs-toggle="dropdown"
              >
                <small>
                  <i
                    className={`${topbarData.topbar.dashboard.icon} text-primary me-2`}
                  ></i>
                  {topbarData.topbar.dashboard.label}
                </small>
              </a>
              <div className="dropdown-menu rounded">
                {topbarData.topbar.dashboard.dropdown.map((item, index) => (
                  <a key={index} href={item.link} className="dropdown-item">
                    <i className={`${item.icon} me-2`}></i>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
