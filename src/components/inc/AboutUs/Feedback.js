import React from 'react';
import FeedbackImg1 from '../../images/feedback1.png';
import FeedbackImg2 from '../../images/feedback2.png';
import FeedbackVector from '../../images/feedbackVector1.png';
import FeedbackImg3 from '../../images/feedback3.png';
import FeedbackImg4 from '../../images/feedback4.png';
import FeedbackImg5 from '../../images/feedback5.png';
import FeedbackImg6 from '../../images/feedback6.png';
import FeedbackImg7 from '../../images/feedback7.png';
import FeedbackImg8 from '../../images/feedback8.png';
import FeedbackStarsImg from '../../images/feedback-stars.png';



const Feedback = () => {
    return (
        <div className='Feedback pt-3 pb-3'>
            <div className='normalView'>
                <div className='row pt-5'>
                    <div className='feedback-heading col-md-12 text-center'>
                        <h2 className='fw-bold'>Our Client Feedback</h2>
                    </div>
                    <div className='feedback-post-heading row text-center mt-5'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <div className='feedback-img' style={{ backgroundImage:`url(${FeedbackImg1})` }}></div>
                        </div>
                        <div className='col-md-6 text-center'>
                            <img className='feedback-vector' src={FeedbackVector} alt='...'/>
                        </div>
                        <div className='col-md-3 justify-content-start'>
                            <div className='feedback-img' style={{ backgroundImage:`url(${FeedbackImg2})` }}></div>
                        </div>
                    </div>
                    <div className='feedback-content row  mt-2'>
                        <div className='col-md-2'>
                            <div className='row'>
                                <div className='col-sm-12 first-man'>
                                    <div className='feedback-img' style={{ backgroundImage:`url(${FeedbackImg3})` }}></div>
                                </div>
                                <div className='col-sm-12 middle-man'>
                                    
                                </div>
                                <div className='col-sm-12 d-flex mt-5 justify-content-end'>
                                    <div className='feedback-img img-7 mt-5' style={{ backgroundImage:`url(${FeedbackImg5})` }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 offset-md-1 d-flex justify-content-center'>
                            <div className='feedback-border-box'>
                                <div className='feedback-border'>
                                    <div className='row mt-2'>
                                        <div className='col-md-2'>
                                            <div className='feedback-border-img' style={{ backgroundImage:`url(${FeedbackImg4})` }}>
                                            </div> 
                                        </div>
                                        <div className='col-md-8 text-center pt-4 mt-4'>
                                            <div className='border-content'>
                                                <p className='feedback-border-p1'>
                                                    DevCenter is a global software development company whose 
                                                    vision is to help companies succeed by helping them build 
                                                    digital solutions that can scale their businesses.
                                                </p>
                                                <div className='feedback-stars mb-3'>
                                                    <img src={FeedbackStarsImg} alt='..' />
                                                </div>
                                                <h3>Mr Richmond</h3>
                                                <p>WallX CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='row'>
                                <div className='col-sm-12 middle-man'>
                                    
                                </div>
                                <div className='col-sm-12 first-man'>
                                    <div className='feedback-img' style={{ backgroundImage:`url(${FeedbackImg6})` }}></div>
                                </div>
                                
                                <div className='col-sm-12 d-flex justify-content-end'>
                                    <div className='feedback-img img-7 mt-5' style={{ backgroundImage:`url(${FeedbackImg7})` }}></div>
                                </div>
                                
                                <div className='col-sm-12 first-man'>
                                    <div className='feedback-img' style={{ backgroundImage:`url(${FeedbackImg8})` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobileView'>
                <div className='row pt-5'>
                    <div className='feedback-heading col-md-12 text-center'>
                        <h2 className='fw-bold'>Our Client Feedback</h2>
                    </div>
                    <div className='feedback-post-heading row text-center mt-5'>
                        <div className='col-md-12 text-center'>
                            <img className='feedback-vector' src={FeedbackVector} alt='...'/>
                        </div>
                    </div>
                    <div className='feedback-content row  mt-2'>
                        <div className='col-md-10 offset-md-1 d-flex justify-content-center'>
                            <div className='feedback-border-box'>
                                <div className='feedback-border'>
                                    <div className='row mt-2'>
                                        {/* <div className='col-sm-2'>
                                            <div className='feedback-border-img' style={{ backgroundImage:`url(${FeedbackImg4})` }}>
                                            </div> 
                                        </div> */}
                                        <div className='col-sm-12 text-center pt-4 mt-4'>
                                            <div className='border-content mt-4'>
                                                <p className='feedback-border-p1'>
                                                    DevCenter is a global software development company whose 
                                                    vision is to help companies succeed by helping them build 
                                                    digital solutions that can scale their businesses.
                                                </p>
                                                <div className='feedback-stars mb-3'>
                                                    <img src={FeedbackStarsImg} alt='..' />
                                                </div>
                                                <h3>Mr Richmond</h3>
                                                <p>WallX CEO</p>
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

export default Feedback
