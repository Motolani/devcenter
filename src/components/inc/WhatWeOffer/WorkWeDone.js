import React from 'react'
import WorkDoneBgImg from '../../images/hireBG.png';
import work11 from '../../images/work11.jpg';
import work12 from '../../images/work12.jpg';
import work13 from '../../images/work13.jpg';
import work14 from '../../images/work14.jpg';
import work15 from '../../images/work15.jpg';
import work16 from '../../images/work16.png';
import work17 from '../../images/work17.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../../../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "../../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../../node_modules/swiper/modules/navigation/navigation.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";
import { Link } from "react-router-dom";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const WorkWeDone = () => {
    
    return (
        <div className='WorkWeDone pb-5' style={{ backgroundImage:`url(${WorkDoneBgImg})` }}>
            <div className='row pt-5'>
                <div className='col-sm-12'>
                    <div className='WorkDoneSectionOne'>
                        <div className=''>
                            <h2 className='pb-3 someWeDone'> Some Work We’ve Done</h2>
                            <p> 
                                We consistently deliver on contracts to stakeholders and <br/>ensure that every assignment we undertake meets the <br />needs of the client, thereby providing the solution <br />necessary for the business to grow
                            </p>
                            <Link to="/contact" className="btn btn-outline-primary rounded-pill btn-lg mt-4 fs-6 OfferGetStartedOffer ">Contact Us</Link>
                        </div>
                    </div>
                    <div className='col-sm-12 pt-2'>
                        <div className='container'>
                                <Swiper
                                    navigation={true}
                                    effect={"coverflow"}
                                    centeredSlides={true}
                                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                                    loop={true}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true
                                    }}
                                    pagination={{
                                        clickable: true
                                    }}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src={work14} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={work13} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={work11} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={work12} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={work15} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={work16} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={work17} alt="img1" className='rounded'/>
                                    </SwiperSlide>
                                </Swiper>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWeDone
