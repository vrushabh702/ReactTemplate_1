import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarData, usesetNavbarData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/server/Navbar/navbar.json")
      .then((response) => response.json())
      .then((data) => usesetNavbarData(data))
      .catch((error) => console.error("error fetching navbar data:", error));
  }, []);

  if (!navbarData) {
    return <div>Loading... </div>;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href={navbarData.navbar.brand.link} className="navbar-brand p-0">
        <h1 className="text-primary">
          <i className={navbarData.navbar.brand.icon}></i>
          {navbarData.navbar.brand.name}
        </h1>
        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          {navbarData.navbar.navLinks.map((link, index) =>
            link.submenu ? (
              <div key={index} className="nav-item dropdown">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">{link.label}</span>
                </a>
                <div className="dropdown-menu m-0">
                  {link.submenu.map((submenuLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={submenuLink.link}
                      className="dropdown-item"
                    >
                      {submenuLink.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={link.link}
                className={`nav-item nav-link ${link.active ? "active" : ""}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>
        <a
          href={navbarData.navbar.ctaButton.link}
          className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
        >
          {navbarData.navbar.ctaButton.label}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
