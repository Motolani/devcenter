import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import CarouselImg1 from "../../images/navcarousel1.png";
import CarouselImg2 from "../../images/navcarousel2.jpeg";
import CarouselImg3 from "../../images/navcarousel3.jpeg";
import Logo from "../../images/logo.png";

const HomeNav = () => {
    return(
        <div >
          <nav id="thecaro" className="navbar navbar-expand-lg navcarousel">
            <div className="container-fluid">
              <Link className="navbar-brand Logo-link" to="/">
                <img className="Logo" src={Logo} height="30px" width="145px" alt="logo"/>
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
                        <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link fw-bold" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link fw-bold" to="/offer">What We Offer</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link fw-bold" to="/blog">Blog</Link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="carou">
            
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="overlay pt-5"><h1 className="fw-bold pt-4">Building Scalable Solutions</h1></div>
                <div className="carousel-item active">
                  <img src={CarouselImg1} className="d-block w-100 navCaroImg" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={CarouselImg2} className="d-block w-100 navCaroImg" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={CarouselImg3} className="d-block w-100 navCaroImg" alt="..."/>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
        
    );
    
}

export default HomeNav;