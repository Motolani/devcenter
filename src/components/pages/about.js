import React from "react";
import AboutNav from "../inc/AboutUs/AboutNav";
import CompanyProfile from "../inc/AboutUs/CompanyProfile";
import Feedback from "../inc/AboutUs/Feedback";
import Mission from "../inc/AboutUs/Mission";
import SixDSection from "../inc/AboutUs/SixDSection";
import Footer from "../inc/Footer/Footer";
import BgImg from "../images/DEVCENTERABOUTBG.png";

const About = () => {
    return(
        <div>
            <div className="About-Profile-BG " style={{ backgroundImage:`url(${BgImg})` }}>
                <AboutNav />
                <CompanyProfile />
            </div>
            <SixDSection />
            <Mission />
            <Feedback />
            <Footer />
        </div>
    );
}

export default About;