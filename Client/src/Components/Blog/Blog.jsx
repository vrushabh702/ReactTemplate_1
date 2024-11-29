import React, { useEffect, useState } from "react"
import $ from "jquery" // Import jQuery
import "owl.carousel/dist/assets/owl.carousel.min.css" // Import Owl Carousel styles
// import "owl.carousel/dist/owl.theme.default.min.css" // Optional theme for Owl Carousel
import "owl.carousel" // Import Owl Carousel JavaScript

const Blog = () => {
  const [offerData, setOfferData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data
    fetch("http://localhost:3000/Server/Blog/blog.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        return response.json()
      })
      .then((data) => {
        setOfferData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })

    // Initialize Owl Carousel after component has mounted
    const initializeCarousel = () => {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
      })
    }

    // Initialize carousel when offerData is set
    if (offerData) {
      initializeCarousel()
    }

    // Cleanup function to destroy Owl Carousel on unmount
    return () => {
      $(".owl-carousel").owlCarousel("destroy")
    }
  }, [offerData]) // The effect depends on offerData

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">{offerData.title}</h4>
          <h1 className="display-5 mb-4">{offerData.heading}</h1>
          <p className="mb-0">{offerData.description}</p>
        </div>

        <div
          className="owl-carousel blog-carousel wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {offerData.offers.map((offer, index) => (
            <div key={index} className="blog-item p-4">
              <div className="blog-img mb-4">
                <img
                  src={offer.image}
                  className="img-fluid w-100 rounded"
                  alt={offer.title}
                />
                <div className="blog-title">
                  <a href={offer.link} className="btn">
                    {offer.title}
                  </a>
                </div>
              </div>
              <a href={offer.link} className="h4 d-inline-block mb-3">
                {offer.heading}
              </a>
              <p className="mb-4">{offer.content.substring(0, 100)}...</p>
              <div className="d-flex align-items-center">
                <img
                  src="img/testimonial-1.jpg"
                  className="img-fluid rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                  alt="Admin"
                />
                <div className="ms-3">
                  <h5>Admin</h5>
                  <p className="mb-0">October 9, 2025</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
