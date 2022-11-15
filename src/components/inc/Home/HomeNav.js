import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import CarouselImg1 from "../../images/navcarousel1.png";
import CarouselImg4 from "../../images/HomeBg2.png";
import CarouselImg5 from "../../images/HomeBg3.png";
import OverlayImg from "../../images/altView.png";
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
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-nav-contact fw-bold" to="/contact">Contact Us</Link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="carou">
            
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="overlay">
                <div className="row homeOverlayWeb">
                  <div className="col-md-6 one">
                    <h1>Seamless Innovation</h1>
                    <p>
                      As a global software development company Innovation sits <br />
                      at the nexus  of business value creation and digitalization. <br />
                      We want mid-sized and large-sized businesses, start-ups, <br />and tech entrepreneurs to have better experience developing <br />
                      mobile and online digital goods.
                    </p>
                  </div>
                  <div className="col-md-6 two">
                    <img className='overlayimg' src={OverlayImg} alt=".." />
                  </div>
                </div>
                
                <div className="homeOverlayTab">
                  <h1 className="fw-bold pt-4">Collaboration</h1>
                  <p>
                    To ensure that every project is built utilizing an AGILE methodology, <br />
                    we collaborate with the finest procedures and policies <br />
                    to identify the best solution to enhance and <br />
                    integrate with your business requirements.
                  </p>
                </div>
                <div className="homeOverlayMobile  pt-5">
                  <h1 className="fw-bold pt-4">Building Scalable Solutions</h1>
                </div>
              </div>
                <div className="carousel-item active">
                  <img src={CarouselImg1} className="d-block w-100 navCaroImg" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={CarouselImg4} className="d-block w-100 navCaroImg" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={CarouselImg5} className="d-block w-100 navCaroImg" alt="..."/>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
        
    );
    
}

export default HomeNav;