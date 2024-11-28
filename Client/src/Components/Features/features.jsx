import React, { useEffect, useState } from "react"

const Features = () => {
  const [featureData, setFeatureData] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3000/server/Features/features.json").then(
      (response) =>
        response
          .json()
          .then((data) => {
            // console.log(data)
            setFeatureData(data)
          })
          .catch((error) => console.error("Fetching data Error", error))
    )
  }, [])

  if (!featureData) {
    return <div>Loading...</div>
  }
  return (
    <div className="container-fluid feature pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">{featureData.title}</h4>
          <h1 className="display-5 mb-4">{featureData.heading}</h1>
          <p className="mb-0">{featureData.description}</p>
        </div>
        <div className="row g-4">
          {featureData.features.map((feature, index) => {
            return (
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
                key={index}
              >
                <div className="feature-item p-4">
                  <div className="feature-icon p-4 mb-4">
                    <i className={`${feature.icon} text-primary`}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p className="mb-4">{feature.description}</p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href={feature.link}
                  >
                    {feature.button}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
