import React from 'react';
import ImgOne from '../../images/latestPostOne.png'
import ImgTwo from '../../images/latestPostTwo.png'
import ImgThree from '../../images/latestPostThree.png'

const OfferBlogPosts = () => {
    return (
    <div className='OfferBlogPosts pt-5 pb-5'>
        <div className='row'>
            <div className='col-lg-12 pb-5'>
                <div className='offerHeadingContent text-center'>
                    <h2>Latest Post</h2>
                    <p> 
                        a leading technology provider <br />
                        enabling businesses and individuals to
                    </p>
                </div>
            </div>
            <div className='col-lg-4 pb-2'>
                <div className='offerBlogContent'>
                    <img src={ImgOne} alt='...' className='mx-auto d-block offerBlogImg' />
                    <div className='blog-span d-flex pt-3'>
                        <span>
                            <h4>
                                Fintech
                            </h4>
                        </span>
                        <span>
                            <p>
                                Nov 12, 2022
                            </p>
                        </span>
                    </div>
                    <h1>
                        Pomoting the growth of <br />
                        its sister firm, Wallx
                    </h1>
                    <p className='offerBlogContent-p pb-3'>
                        DevCenter Innovation promotes the growth <br />
                        of its sister firm.Wallx, a fintech <br />
                        application geared at 
                    </p>
                </div>
            </div>
            
            <div className='col-lg-4 pb-2'>
                <div className='offerBlogContent'>
                    <img src={ImgTwo} alt='...' className='mx-auto d-block offerBlogImg' />
                    <div className='blog-span d-flex pt-3'>
                        <span>
                            <h4>
                                Fintech
                            </h4>
                        </span>
                        <span>
                            <p>
                                Nov 12, 2022
                            </p>
                        </span>
                    </div>
                    <h1>
                        Must-Have Knowledge <br />
                        Before an Interview
                    </h1>
                    <p className='offerBlogContent-p pb-3'>
                        DevCenter Innovation promotes the growth <br />
                        of its sister firm.Wallx, a fintech <br />
                        application geared at 
                    </p>
                </div>
            </div>
            
            <div className='col-lg-4 pb-2'>
                <div className='offerBlogContent'>
                    <img src={ImgThree} alt='...' className='mx-auto d-block offerBlogImg' />
                    <div className='blog-span d-flex pt-3'>
                        <span>
                            <h4>
                                Fintech
                            </h4>
                        </span>
                        <span>
                            <p>
                                Nov 12, 2022
                            </p>
                        </span>
                    </div>
                    <h1>
                        Oui Capital Completes the First <br />
                        Closure of a $30 Million Fund
                    </h1>
                    <p className='offerBlogContent-p pb-3'>
                        DevCenter Innovation promotes the growth <br />
                        of its sister firm.Wallx, a fintech <br />
                        application geared at 
                    </p>
                </div>
            </div>
            
            <div className='col-lg-12 text-center pb-4'>
                <button type="button" className="btn btn-outline-primary rounded-pill btn-lg mt-4 fs-6 OfferGetStartedOffer">  See all  </button>
            </div>
        </div>
    </div>
    )
}

export default OfferBlogPosts
