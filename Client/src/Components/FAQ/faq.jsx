import React, { useEffect, useState } from "react"

const FAQ = () => {
  const [faqData, setFaqdata] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/Server/FAQ/faq.json"
        )
        const result = await response.json()
        setFaqdata(result)
      } catch (error) {
        console.error("Fetch Data error", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  const { title, description, heading, questions, image } = faqData.faqSection

  const toggleAccording = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="container-fluid faq-section pb-5">
      <div className="container pb-5 overflow-hidden">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">{heading}</h4>
          <h1 className="display-5 mb-4">{title}</h1>
          <p className="mb-0">{description}</p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div
              className="accordion accordion-flush bg-light rounded p-5"
              id="accordionFlushSection"
            >
              {questions.map((item, index) => (
                <div key={index.id} className="accordion-item rounded-top">
                  <h2 className="accordion-header" id={item.id}>
                    <button
                      className={`accordion-button ${
                        activeIndex === index ? " " : "collapsed"
                      } rounded-top`}
                      type="button"
                      onClick={() => toggleAccording(index)}
                      data-bs-target={`#${item.id}`}
                      aria-expanded={activeIndex === index ? "true" : "false"}
                      aria-controls={item.id}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                    aria-labelledby={item.id}
                    data-bs-parent="#accordionFlushSection"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="bg-primary rounded">
              <img
                src={image.src}
                className="img-fluid w-100"
                alt={image.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FAQ
