import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import blogImgNav from "../../images/blogNavImg.png";
import blogImgNavBG from "../../images/blogNavImg2.png";

const BlogNav = () => {
    return (
        <div className='BlogName'  >
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
                            <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item homeNavLi">
                            <Link className="nav-link fw-bold" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item homeNavLi">
                            <Link className="nav-link  fw-bold" to="/offer">What We Offer</Link>
                        </li>
                        <li className="nav-item homeNavLi">
                            <Link className="nav-link active fw-bold" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item homeNavLi">
                            <Link className="nav-link fw-bold" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div className='blogImg'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="overlay" >
                            <div className="theOverlay pt-5 ">
                              <h1 className="fw-bold pt-4">Technology</h1>
                            </div>
                            <img className="blogImgNav img-fluid" src={blogImgNav} alt='...' />
                            <img class="blogImgNavBg img-fluid" src={blogImgNavBG} alt='...'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogNav
