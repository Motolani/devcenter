import React from 'react';
import BgImg from '../../images/contactUsBg.png';
import AddressIcon from '../../images/VectoraddressIcon.png';
import MailIcon from '../../images/VectorMailIcon.png';
import TelIcon from '../../images/VectorTelIcon.png';
import TwitterIcon from '../../images/VectorcontactUsTwitterIcon.png';
import FbIcon from '../../images/VectorcontactUsFbIcon.png';
import IgIcon from '../../images/VectorcontactUsIgIcon.png';
import ImgContact from '../../images/contactAnimi.png';

const ContactUsContent = () => {
  return (
    <div className='ContactUsContent pb-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='BgContactUsContent borderStuff' >
                {/* style={{ backgroundImage:`url(${BgImg})` }} */}
                    <div className='row'>
                        <div className='col-lg-4 contactOverlap'>
                            <div className='contactBorderBlue'>
                                <div className='contactBorderContent'>
                                    <h1>Contact Us</h1>
                                    <div className='ContactUsAddress row pb-4 pt-4'>
                                        <div className='col-sm-1'>
                                            <img src={AddressIcon} alt='..' />
                                        </div>
                                        <div className='col-sm-11'>
                                            <p>
                                                Address: 21 Nyesi Ibrahim Tella, Oral-Estate, <br />Eleganza Bustop, Lekki - Epe Expy, Lagos 
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className='ContactUsMail row pb-4'>
                                        <div className='col-sm-1'>
                                            <img src={MailIcon} alt='..' />
                                        </div>
                                        <div className='col-sm-11'>
                                            <p>
                                                Hello@devcenter.africa
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className='ContactUsTel row pb-4'>
                                        <div className='col-sm-1'>
                                            <img src={TelIcon} alt='..' />
                                        </div>
                                        <div className='col-sm-11'>
                                            <p>
                                                234 1 630 4704
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className='ContactUsTel row pb-4'>
                                        <div className='col-sm-2'>
                                            <a href='https://twitter.com/devcenterafrica?s=11&t=4Z11r4vBfwR9OfTnbUdPEw'>
                                                <img src={TwitterIcon} alt='..' />
                                            </a>
                                        </div>
                                        <div className='col-sm-2'>
                                            <a href=''>
                                                <img src={FbIcon} alt='..' />
                                            </a>
                                        </div>
                                        <div className='col-sm-2'>
                                            <a href='https://instagram.com/devcenter_africa?igshid=YmMyMTA2M2Y='>
                                                <img src={IgIcon} alt='..' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='ContactBottomImg mt-5'>
                                <img className='ImgContactBottom img-fluid' src={ImgContact} alt='..' />
                            </div>
                        </div>
                        <div className='col-lg-6 contactUsForRow'>
                            <div className='contactUsForm'>
                                <div className='contactUsFormHeading'>
                                    <h1>Get In Touch</h1>
                                    <p>
                                        Turn to our experts to perform comprehensive, multi-stage testing <br /> and auditing of your software solutions.
                                    </p>
                                </div>
                                <div className='contactUsForm pt-5'>
                                    <form>
                                        <input class="form-control" type="text" placeholder="Full name" aria-label="default input example" />
                                        <input class="form-control" type="tel" placeholder="Phone number" aria-label="default input example" />
                                        <input class="form-control" type="text" placeholder="Email address" aria-label="default input example" />
                                        <textarea className='form-control'> How can we help you?</textarea>
                                        <div className="valuesOneText">
                                            <button type="submit" className="btn btn-outline-primary rounded-pill btn-xl">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className='col-lg-8 otherBorderView'>
                            <div className='contactUsForm'>
                                <div className='row'>
                                    <div className='contactUsFormHeading col-8'>
                                        <h1>Get In Touch</h1>
                                        <p>
                                            Turn to our experts to perform comprehensive, multi-stage testing <br /> and auditing of your software solutions.
                                        </p>
                                    </div>
                                    <div className='contactUsForm pt-5 col-12'>
                                        <form>
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <input className="form-control" type="text" placeholder="Full name" aria-label="default input example" />
                                                </div>
                                                <div className='col-8'>
                                                    <input className="form-control" type="tel" placeholder="Phone number" aria-label="default input example" />
                                                </div>
                                                <div className='col-8'>
                                                    <input className="form-control" type="text" placeholder="Email address" aria-label="default input example" />
                                                </div>   
                                                <div className='col-8'>
                                                    <textarea className='form-control'> How can we help you?</textarea>
                                                </div>
                                                <div className="valuesOneText col-8">
                                                    <button type="submit" className="contactSubmit btn btn-outline-primary rounded-pill btn-xl">Send Message</button>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    
                                    <div className='contactBorderBlue col-8 mt-5'>
                                        <div className='contactBorderContent'>
                                            <h1>Contact Us</h1>
                                            <div className='ContactUsAddress row'>
                                                <div className='col-1'>
                                                    <img src={AddressIcon} alt='..' />
                                                </div>
                                                <div className='col-11'>
                                                    <p>
                                                        Address: 21 Nyesi Ibrahim Tella, Oral-Estate, <br />Eleganza Bustop, Lekki - Epe Expy, Lagos 
                                                    </p>
                                                </div>
                                                
                                            </div>
                                            
                                            <div className='ContactUsMail row'>
                                                <div className='col-1'>
                                                    <img src={MailIcon} alt='..' />
                                                </div>
                                                <div className='col-11'>
                                                    <p>
                                                        Hello@devcenter.africa
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className='ContactUsTel row'>
                                                <div className='col-1'>
                                                    <img src={TelIcon} alt='..' />
                                                </div>
                                                <div className='col-11'>
                                                    <p>
                                                        234 1 630 4704
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className='ContactUsTel row'>
                                                <div className='col-2'>
                                                    <a href='https://twitter.com/devcenterafrica?s=11&t=4Z11r4vBfwR9OfTnbUdPEw'>
                                                        <img src={TwitterIcon} alt='..' />
                                                    </a>
                                                </div>
                                                <div className='col-2'>
                                                    <a href=''>
                                                        <img src={FbIcon} alt='..' />
                                                    </a>
                                                </div>
                                                <div className='col-2'>
                                                    <a href='https://instagram.com/devcenter_africa?igshid=YmMyMTA2M2Y='>
                                                        <img src={IgIcon} alt='..' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default ContactUsContent
