import React from 'react';
import ImgOne from '../../images/serviceImgOne.png';
import ImgFour from '../../images/serviceImgFour.png';
import ImgTwo from '../../images/serviceImgTwo.png';
import ImgFive from '../../images/serviceImgFive.png';
import ImgThree from '../../images/serviceImgThree.png';
import ImgSix from '../../images/serviceImgSix.png';
import BgImg from '../../images/serviceBg.png';

const Services = () => {
    return (
        <div className='Services pt-5  pb-2'  style={{ backgroundImage:`url(${BgImg})` }}>
            <div className='row this ' style={{ backgroundImage:`url(${BgImg})` }}>
                <div className='col-12 text-center pb-5'>
                    <h2>Our Services</h2>
                </div>
                <div className='col-lg-4'>
                    <div className='service-box-one mb-5'>
                        <div className='service-box-content'>
                            <img src={ImgOne} alt='...' />
                            <h3 className='pt-4'>Web/Mobile Development</h3>
                            <p className='pt-4'>
                                We build mobile and web applications <br /> using Agile Methodology
                            </p>
                        </div>
                    </div>
                    <div className='service-box-one mb-4'>
                        <div className='service-box-content'>
                            <img src={ImgFour} alt='...' />
                            <h3 className='pt-4'>Tech-Talent Outsourcing</h3>
                            <p className='pt-4'>
                                We can help you set up a dedicated team <br />
                                to work on your projects on-prem or remotely
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-4'>
                    <div className='service-box-one mb-5'>
                        <div className='service-box-content'>
                            <img src={ImgTwo} alt='...' />
                            <h3 className='pt-4'>Product UI/UX</h3>
                            <p className='pt-4'>
                                Our experienced UI/UX designers will help <br />
                                you with prototypes to drive your <br />
                                development roadmap
                            </p>
                        </div>
                    </div>
                    <div className='service-box-one mb-4'>
                        <div className='service-box-content'>
                            <img src={ImgFive} alt='...' />
                            <h3 className='pt-4'>IT Consulting</h3>
                            <p className='pt-4'>
                                Trust our top minds to eliminate workflow <br />
                                pain points, implement new tech, propose <br />
                                cloud computing and consolidate apps.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-4'>
                    <div className='service-box-one mb-5'>
                        <div className='service-box-content'>
                            <img src={ImgThree} alt='...' />
                            <h3 className='pt-4'>QA & Testing</h3>
                            <p className='pt-4'>
                                Turn to our experts to perform comprehensive, <br />
                                multi-stage testing and auditing of your <br />
                                software solutions.
                            </p>
                        </div>
                    </div>
                    <div className='service-box-one mb-4'>
                        <div className='service-box-content'>
                            <img src={ImgSix} alt='...' />
                            <h3 className='pt-4'>Blockchain/Cloud Implementation</h3>
                            <p className='pt-4'>
                                We develop block chain solutions and help <br />
                                companies migrate their on-premise <br />
                                infrastructure to cloud
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
