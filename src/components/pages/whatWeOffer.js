import React from "react";
import Footer from "../inc/Footer/Footer";
import CoWorkingSpace from "../inc/WhatWeOffer/CoWorkingSpace";
import OfferBlogPosts from "../inc/WhatWeOffer/OfferBlogPosts";
import OfferNav from "../inc/WhatWeOffer/OfferNav";
import Services from "../inc/WhatWeOffer/Services";
import WorkWeDone from "../inc/WhatWeOffer/WorkWeDone";

const WhatWeOffer = () => {
    return(
        <div>
            <OfferNav />
            <WorkWeDone />
            <CoWorkingSpace />
            <Services />
            <OfferBlogPosts />
            <Footer />
        </div>
    );
}

export default WhatWeOffer;