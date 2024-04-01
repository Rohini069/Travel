import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Herosection.css'
const Herosection = () => {
    useEffect(() => {
        let hero_container = document.getElementById("hero_container");
        
      });
  return (
    <>
    <div className="main">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdWlmdWwlMjBwaWN0dXJlcyUyMG9mJTIwbmF0dXJlfGVufDB8fDB8fHww"
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="heading">
                <h1>
                  HUNDREDS OF AMAZING <br />
                  DESTINATIONS
                </h1>
                <i className="bi bi-body-text" />

                <p>
                  We offer a variety of destinations to travel to,
                  <br /> ranging from exotic to some extreme ones. They
                  <br /> include very popular countries and cities like Paris,
                  <br /> Rio de Janeiro, Cairo and a lot of others.
                </p>
                <Link className="Dest" to={"/Destination"}>
                  <i className="bi bi-airplane" />
                  SEARCH FLIGHT
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1709744539319-41d1b975579f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="heading">
                <h1>
                  THE TRIP OF YOUR <br /> DREAM
                </h1>
                <i className="bi bi-body-text" />

                <p>
                  Our travel agency is ready to offer you an exciting <br />
                  vacation that is designed to fit your own needs and <br />
                  wishes. Whether it’s an exotic cruise or a trip to your <br />
                  favorite resort, you will surely have the best <br />
                  experience.
                </p>
                <Link className="Dest" to={"/Destination"}>
                  <i className="bi bi-airplane" />
                  SEARCH FLIGHT
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1654962900838-bd872b71dfa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="heading">
                <h1>UNIQUE TRAVEL INSIGHTS</h1>
                <i className="bi bi-body-text" />

                <p>
                  Our team is ready to provide you with unique
                  <br /> weekly travel insights that include photos, videos,
                  <br /> and articles about untravelled tourist paths. We
                  <br /> know everything about the places you’ve never been to!
                </p>
                <Link className="Dest" to={"/Destination"}>
                  <i className="bi bi-airplane" />
                  SEARCH FLIGHT
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="heading1">
          <h1>OUR SERVICES</h1>
          
        </div>

        <div className="cardrow">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-airplane" />
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Air Tickets
              </h5>
              <hr />
              <p className="card-text">
                At our travel agency, you can book air tickets to any world
                destination. We also provide online ticket booking via our
                website in just a couple of steps.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-book-half"></i>{" "}
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Voyages & Cruises
              </h5>
              <hr />
              <p className="card-text">
                Besides regular tours and excursions, we also offer a variety of
                cruises & sea voyages for different customers looking for
                awesome experiences.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-building"></i>
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Hotel Bookings
              </h5>
              <hr />
              <p className="card-text">
                We offer a wide selection of hotel ranging from 5-star ones to
                small properties located worldwide so that you could book a
                hotel you like.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-umbrella-fill"></i>
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Tailored Summer Tours
              </h5>
              <hr />
              <p className="card-text">
                Our agency provides varied tours <br /> including tailored
                summer <br />
                tours for clients who are searching for an exclusive and
                memorable vacation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection