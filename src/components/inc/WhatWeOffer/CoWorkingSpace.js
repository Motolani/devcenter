import React from 'react'
import BgImg from '../../images/co-workingSpaceBG.png';

const CoWorkingSpace = () => {
    return (
        <div className='CoWorkingSpace' style={{ backgroundImage:`url(${BgImg})` }}>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='CoWorkingSpaceBorder'>
                        <div className='CoWorkingContent pt-5'>
                            <h3>Call us To Use our <br />Co-working Space</h3>
                            <p>A peaceful coworking environment that <br />enables uninterrupted work</p>
                            <button type="button" className="btn btn-outline-primary rounded-pill btn-lg mt-4 fs-6 CoworkGetStarted">Call Us Now</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-8'>
                </div>
            </div>
        </div>
    )
}

export default CoWorkingSpace