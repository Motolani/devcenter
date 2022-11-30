import React from 'react'
import { Link } from "react-router-dom";
import "../../../App.css";
import Logo from "../../images/logo.png";
import OfferImgOne from "../../images/offerRight1.png"
import OfferImgTwo from "../../images/offerRight2.png"
import OfferImgThree from "../../images/offerRight3.png"
import OfferImgFive from "../../images/offerRight5.png"
import OfferImgSix from "../../images/offerRight6.png"
import OfferImgSeven from "../../images/offerRight7.png"
import OfferImgEight from "../../images/offerRight8.png"
import OfferImgMobile from "../../images/offerNavImgMobile.png"

const OfferNav = () => {
  return (
    <div className='offerNav'>
        <nav id="thecaro aboutStyle" className="navbar navbar-expand-lg navcarousel">
            <div className="container-fluid">
              <Link className="navbar-brand Logo-link pt-3" to="/">
                <img className="Logo AboutLogoExtras" src={Logo} height="30px" width="145px" alt="logo"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav offer-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li> */}
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0 homeNavUl">
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-nav-home fw-bold" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-nav-about fw-bold" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link active fw-bold" to="/offer">What We Offer</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-nav-blog fw-bold" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item homeNavLi">
                        <Link className="nav-link offer-nav-contact fw-bold" to="/contact">Contact Us</Link>
                    </li>
                </ul>
              </div>
            </div>
        </nav>
        <div className='offerNavBackground'>
            <div className='offerPostContent'>
                <div className='row mt-3'>
                    <div className='col-md-5  mt-3 pt-5'>
                        <div className='offerLeftContent text-start'>
                           <p className='offer-p1'>Service We Offer</p>
                            <h2>DevCenter Innovation</h2>
                            <h3>The new way to achieve <br /> your organisation's goal</h3>
                            <p className='offer-p2'>Devcenter Innovation Limited is a software <br />company that offers various services</p>
                            <Link to="/offer" className="btn btn-outline-primary rounded-pill mt-4 btn-xl OfferGetStartedOffer">Get Started</Link>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='offerRightContent'>
                            <div className='row'>
                                
                                <div className='col-sm-2 pt-5 offerDesktop'>
                                    <img className='mt-5 offerRightImgOne rounded' src={OfferImgOne} alt='...' />
                                </div>
                                <div className='col-10 offerDesktop'>
                                    <div className='row'>
                                        <div className='col-sm-3 mt-5'>
                                            <img className='offerRightImgTwo rounded ' src={OfferImgTwo} alt='...' />
                                            <img className='offerRightImgFour mt-3 rounded ' src={OfferImgFive} alt='...' />
                                        </div>
                                        <div className='col-sm-8'>
                                            <img className='offerRightImgThree rounded' src={OfferImgThree} alt='...' />
                                            
                                            <img className='offerRightImgSix rounded mt-5' src={OfferImgSix} alt='...' />
                                            
                                            <img className='offerRightImgSeven rounded mt-5 float-end' src={OfferImgSeven} alt='...' />
                                            
                                            <img className='offerRightImgEight rounded mt-4' width='219px' src={OfferImgEight} alt='...' />
                                        </div>
                                    </div>
                                </div>
                                
                              
                            </div>
                            <div className='OfferMobile'>
                                    <div className=' col-sm-12'>
                                        <img className='offerRightImgTwoMobile mx-auto d-block rounded img-fluid' src={OfferImgMobile} alt='...' />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OfferNav
