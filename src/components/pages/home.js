import React from "react";
import Footer from "../inc/Footer/Footer.js";
import CodingStack from "../inc/Home/CodingStack.js";
import Hire from "../inc/Home/Hire.js";
import HomeNav from "../inc/Home/HomeNav.js"
import HomeValuesSectionOne from "../inc/Home/HomeValuesSection.js";
import HomeValuesSectionTwo from "../inc/Home/HomeValuesSectionTwo.js";
import ReadBlog from "../inc/Home/ReadBlog.js";
import WorkedFor from "../inc/Home/WorkedFor.js";

const Home = () => {
    return(
        <div>
            <HomeNav />
            <HomeValuesSectionOne />
            <HomeValuesSectionTwo />
            <ReadBlog />
            <WorkedFor />
            <CodingStack />
            <Hire />
            <Footer />
        </div>
        
    );
}

export default Home;