import React from 'react'
import { Link } from "react-router-dom";
import "../../../App.css";
import Logo from "../../images/logo2.png";
import ImgAbout from "../../images/imgaboutnav.png"
import NavBG2 from "../../images/AboutBgEdit.png"
// import NavBG3 from "../../images/AboutNavBG2.png"

const AboutNav = () => {
  return (
    <div className='AboutNav ' style={{ backgroundImage:`url(${NavBG2})` }}>
        <nav id="thecaro aboutStyle" className="navbar navbar-expand-lg navcarousel">
            <div className="container-fluid">
              <Link className="navbar-brand Logo-link pt-3" to="/">
                <img className="Logo AboutLogoExtras" src={Logo} height="30px" width="145px" alt="logo"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li> */}
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0 homeNavUl">
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link home-link fw-bold" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link active fw-bold" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-link fw-bold" to="/offer">What We Offer</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link blog-link fw-bold" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-nav-contact fw-bold" to="/contact">Contact Us</Link>
                    </li>
                </ul>
              </div>
            </div>
        </nav>
        <div className='aboutNavBackground'>
            <div className='aboutPostContent'>
                <div className='row pt-3'>
                    <div className='col-lg-6'>
                        <div className='leftContent pt-5'>
                            <h1>Think Innovation, <br />Think DevCenter </h1>
                            <p className='pt-5'>We are a global software development company with<br /> 
                                over a decade of experience in building mobile<br /> 
                                & web digital products for tech founders, start-UPS,<br />
                                and mid & large-sized organisations<br />
                            </p>
                            <Link to="/offer" className="btn btn-outline-info rounded-pill btn-lg mt-4 fs-6 AboutGetStarted">Get Started</Link>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                    <div className='pt-5 ImgNavContainer'>
                        <div className='ImgNav mt-5' style={{ backgroundImage:`url(${ImgAbout})` }}>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutNav
