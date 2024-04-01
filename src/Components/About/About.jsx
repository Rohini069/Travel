import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <>
    <div className="mainc">
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <h1>About Me</h1>
          </label>
        </div>
        <div className="card">
          
          <div className="card-body">
            <h5 className="card-title">Rohini</h5>
            <p className="card-text">
              Welcome to my React Frontend Project! This project was
              crafted with
              <br /> the power of React, Bootstrap, HTML, and CSS,
              <br />
              bringing together a seamless and engaging user experience.
            </p>
            <Link to={"/"} className="btn btn-secondary">
               HomePage
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About