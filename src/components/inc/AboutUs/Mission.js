import React from 'react';
import LeftBgImg from '../../images/mission-left-bg.png';
import RightBgImg from '../../images/mission-right-img.png';

const Mission = () => {
    return (
        <div className='Mission mt-4 mb-5'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='Mission-left pt-4'>
                        <div className='mission-left-img' style={{ backgroundImage:`url(${LeftBgImg})` }}>
                            <h2 className='align-middle'>Our Dream</h2>
                        </div>
                        <p className='pt-4'>
                            To become a leading global technology provider, <br />
                            enabling businesses and individuals to <br />
                            succeed, scale, and grow in new market.<br />
                        </p>
                    </div>
                    <div className='Mission-left pt-5'>
                        <div className='mission-left-img' style={{ backgroundImage:`url(${LeftBgImg})` }}>
                            <h2 className='align-middle'>Our Mission</h2>
                        </div>
                        <p className='pt-4'>
                            Offering cutting-edge products, platforms, <br />
                            services, and solutions to our customers <br />
                            while rewarding our stakeholders.<br />
                        </p>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <div className='mission-right-img' style={{ backgroundImage:`url(${RightBgImg})` }}></div>
                </div>
            </div>
        </div>
    )
}

export default Mission
