import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <>
    <nav
        id="hero_container"
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
          <FaHome />
            
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/Destination"}
                >

                  
                  <MdFlight />
                  SEARCH FLIGHT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/About"}>
                <FcAbout />
                  
                  ABOUT US
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Destination"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header