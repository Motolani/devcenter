import React from "react";
import ContactUsContent from "../inc/ContactUs/ContactUsContent";
import ContactUsNav from "../inc/ContactUs/ContactUsNav";
import Footer from "../inc/Footer/Footer";

const ContactUs = () => {
    return(
        <div className="contactUsContainer">
            <ContactUsNav />
            <ContactUsContent />
            <Footer />
        </div>
    );
}

export default ContactUs;