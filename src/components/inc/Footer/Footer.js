import React from 'react';
import FooterImg from '../../images/FooterImg.png';
import FooterShape from '../../images/FootShape.png';
import FooterShape2 from '../../images/FootShape2.png';
import FooterLogo from '../../images/DevC.png';
import IgImg from '../../images/IG.png';
import FbImg from '../../images/fb.png';
import LinkedInImg from '../../images/linkedIn.png';
import TwitterImg from '../../images/twitter.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <div className='Footer' style={{ backgroundImage:`url(${FooterImg})` }}>
            <div className='row'>
                <div className='col-lg-12 FooterTop'>
                
                </div>
            </div>
            <div className='row ' >
            <div className='col-4'></div>
            <div className='col-8 FooterBottom pt-5' style={{ backgroundImage:`url(${FooterShape2})` }}>
                <div className='row'>
                    <div className='col-3 offset-1 FootSecOne'>
                        <img src={FooterLogo} alt='...'  className='pt-3 FooterLogo' />
                        <p className='pt-5'>Copyright © 2022 Devcenter Innovation
                            Powered by Devcenter Innovation</p>
                    </div>
                    <div className='col-4 pt-3'>
                        <div className='FooterNav'> 
                            <ul>
                                <li><Link className="footerNav" to="/">Home</Link></li>
                                <li><Link className="footerNav" to="/about">About</Link></li>
                                <li><Link className="footerNav" to="/offer">We Offer</Link></li>
                                <li><Link className="footerNav" to="/blog">Blog</Link></li>
                                <li><Link className="footerNav" to="/contact">Contact</Link></li>
                            </ul>
                            <div className='row pt-5 contactsFooter'>
                                <div className='col-8 text-center'>
                                    <p>Address: 21 Nyesi Ibrahim Tella, Oral-Estate, Eleganza Bustop, Lekki - Epe Expy, Lagos </p>
                                </div>
                                <div className='col-4 text-center'>
                                    <p>Call: <br /> +234 1 630 4704</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='col-2 offset-1 pt-2'>
                        <div className='SocialFoot'>
                            <div className='socialsFooter text-center justify-content-center'>
                                <a href='https://instagram.com/devcenter_africa?igshid=YmMyMTA2M2Y=' target="_blank"><img src={IgImg} alt='IG' className='pt-1' width={16} /></a>
                            </div>
                            <div className='socialsFooter text-center justify-content-center'>
                                <a href='https://www.facebook.com/devcenter.africa' target="_blank"><img src={FbImg} alt='FbImg' className='pt-1' width={16} /></a>
                            </div>
                            <div className='socialsFooter text-center justify-content-center'>
                                <a href='https://www.linkedin.com/company/devcenterafrica/' target="_blank"><img src={LinkedInImg} alt='LinkedInImg' className='pt-1' width={16}  /></a>
                            </div>
                            <div className='socialsFooter text-center justify-content-center'>
                                <a href='https://twitter.com/devcenterafrica?s=11&t=4Z11r4vBfwR9OfTnbUdPEw' target="_blank"><img src={TwitterImg} alt='TwitterImg' className='pt-1' width={16} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            </div>
        </div>
        
        <div className='queryHeader'>
            <div className='row'>
                <div className='col-sm-12 FooterTwo pt-5' style={{ backgroundImage:`url(${FooterShape})` }}>
                    <div className='row'>
                        <div className='col-sm-3 offset-1 FootSecOne'>
                            <img src={FooterLogo} alt='...'  className='pt-3 FooterLogo' />
                            <p className='pt-5'>Copyright © 2022 Devcenter Innovation
                                Powered by Devcenter Innovation</p>
                        </div>
                        <div className='col-sm-4 pt-3'>
                            <div className='FooterNav'> 
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Blog</li>
                                    {/* <li>FAQ</li> */}
                                </ul>
                                <div className='row pt-5 contactsFooter'>
                                    <div className='col-8 text-center'>
                                        <p>Address: 21 Nyesi Ibrahim Tella, Oral-Estate, Eleganza Bustop, Lekki - Epe Expy, Lagos </p>
                                    </div>
                                    <div className='col-4 text-center'>
                                        <p>Call: <br /> 01 630 4704</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='col-sm-2 offset-sm-1 pt-2'>
                            <div className='SocialFoot'>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://instagram.com/devcenter_africa?igshid=YmMyMTA2M2Y=' target="_blank"><img src={IgImg} alt='IG' className='pt-1' width={16} /></a>
                                </div>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://www.facebook.com/devcenter.africa' target="_blank"><img src={FbImg} alt='FbImg' className='pt-1' width={16} /></a>
                                </div>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://www.linkedin.com/company/devcenterafrica/' target="_blank"><img src={LinkedInImg} alt='LinkedInImg' className='pt-1' width={16}  /></a>
                                </div>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://twitter.com/devcenterafrica?s=11&t=4Z11r4vBfwR9OfTnbUdPEw' target="_blank"><img src={TwitterImg} alt='TwitterImg' className='pt-1' width={16} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className='mobileHeader'>
            <div className='row' style={{ backgroundImage:`url(${FooterShape})` }}>
                <div className='col-6 pt-1 text-center' >
                    <div className='row'>
                        <div className='FootSecOne'>
                            <img src={FooterLogo} alt='...'  className='pt-3 FooterLogo' />
                        </div>
                        
                        <div className=' pt-2'>
                            <div className='SocialFoot text-center justify-content-center pt-2'>
                                <div className='socialsFooter '>
                                <a href='https://instagram.com/devcenter_africa?igshid=YmMyMTA2M2Y=' target="_blank"><img src={IgImg} alt='IG' className='pt-1' width={16} /></a>
                                </div>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://www.facebook.com/devcenter.africa' target="_blank"><img src={FbImg} alt='FbImg' className='pt-1' width={16} /></a>
                                </div>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://www.linkedin.com/company/devcenterafrica/' target="_blank"><img src={LinkedInImg} alt='LinkedInImg' className='pt-1' width={16}  /></a>
                                </div>
                                <div className='socialsFooter text-center justify-content-center'>
                                    <a href='https://twitter.com/devcenterafrica?s=11&t=4Z11r4vBfwR9OfTnbUdPEw' target="_blank"><img src={TwitterImg} alt='TwitterImg' className='pt-1' width={16} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mobileHeaderFont'>
                        <p>Address: 21 Nyesi Ibrahim Tella, Oral-Estate, <br/>Eleganza Bustop, Lekki - Epe Expy, Lagos </p>
                    </div>
                    <div className='mobileHeaderFont copyright'>
                        <p>Copyright © 2022 Devcenter Innovation Powered by <br/>Devcenter Innovation</p>
                    </div>
                    <div className='footerCall'>
                        <p>Tel: +234 1 630 4704</p>
                    </div>
                    
                </div>
                <div className='col-6'>
                    <div className='mobileFooterNav text-center'> 
                        <ul>
                            <li><Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link></li>
                            <li><Link className="nav-link fw-bold" to="/about">About</Link></li>
                            <li><Link className="nav-link fw-bold" to="/offer">Services</Link></li>
                            <li><Link className="nav-link fw-bold" to="/blog">Blog</Link></li>
                            <li><Link className="nav-link fw-bold" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
