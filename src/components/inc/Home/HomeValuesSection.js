import React from 'react';
import { Link } from "react-router-dom";
import "../../../App.css";
import Image from '../../images/img1.png'
import BgImg from '../../images/sectiononebackground.png'

const HomeValuesSectionOne = () => {
    return (
        <div className='homeValuesSectionOne' style={{ backgroundImage:`url(${BgImg})` }}>
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center valuesOneText">
                    <Link to="/offer" className="btn btn-outline-primary rounded-pill btn-xl">Get Started</Link>
                </div>
            </div>
            <div className='row row-two'>
                <div className="col-md-4 offset-md-4 text-center values-text">
                    <h1 className='align-center'>Values that Holds us <br/> True and Accountable</h1>
                </div>
                <div className="col-md-4 float-right values-img">
                    <img src={Image} alt="..."/>
                </div>
            </div>
        </div>
        
    );
};

export default HomeValuesSectionOne
