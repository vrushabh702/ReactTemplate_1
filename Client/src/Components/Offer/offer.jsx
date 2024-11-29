import React, { useEffect, useState } from "react"

const Offer = () => {
  const [offerData, setOfferData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeOfferId, setActiveOfferId] = useState("collapseOne")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/Server/Offer/offer.json"
        )
        const result = await response.json()
        setOfferData(result)
      } catch (error) {
        console.error("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  const { title, subtitle, description, offers } = offerData.offerSection

  return (
    <div className="container-fluid offer-section pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxHeight: "800px" }}
        >
          <h4 className="text-primary">{title}</h4>
          <h1 className="display-5 mb-4">{subtitle}</h1>
          <p className="mb-0">{description}</p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="nav nav-pills bg-light rounded p-5">
              {offers.map((offer) => (
                <a
                  key={offer.id}
                  className={`accordion-link p-4  mb-4 ${
                    activeOfferId === offer.id ? "active" : ""
                  }`}
                  data-bs-toggle="pill"
                  href={`${offer.id}`}
                  onClick={() => setActiveOfferId(offer.id)}
                >
                  <h5 className="mb-0">{offer.title}</h5>
                </a>
              ))}
            </div>
          </div>
          <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="tab-content">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  id={offer.id}
                  // className="tab-pane fade show p-0 active"
                  className={`tab-pane fade p-0 ${
                    activeOfferId == offer.id ? "show active" : ""
                  }`}
                >
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src={offer.image}
                        className="img-fluid w-100 rounded"
                        alt={offer.title}
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">{offer.heading}</h1>
                      <p className="mb-4">{offer.heading}</p>
                      <a
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href={offer.buttonLink}
                      >
                        {offer.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
