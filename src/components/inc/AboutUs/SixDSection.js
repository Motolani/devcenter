import React from 'react';
import BgImg from '../../images/6DBG.png';
import SixDImg from '../../images/6DImg.png';
import DiscoverImg from '../../images/Discover.png';
import DesignImg from '../../images/Design.png';
import DeployImg from '../../images/Deploy.png';
import DefineImg from '../../images/Define.png';
import DevelopImg from '../../images/Develop.png';
import DeliverImg from '../../images/Deliver.png';
import SixDRowImg from '../../images/sixDRowBg.png'

const SixDSection = () => {
  return (
    <div className='SixDSection pt-4 pb-4' style={{ backgroundImage:`url(${BgImg})` }}>
        <div className='row theRowSixD' style={{ backgroundImage:`url(${SixDRowImg})` }}>
            <div className='col-md-4'>
                <div className='first-row mt-2'>
                    <h1 className='fw-bold pt-4 pb-3'>Our 6-D Process</h1>
                    <p>
                    To become a leading global technology <br />
                    provider, enabling businesses <br />
                    and individuals to succeed, scale <br />
                    and grow to new markets. <br />
                    </p>
                    <div className='pt-4'>
                        <img src={SixDImg} alt='..' className='sixDImg pt-4 mt-3'/>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='second-row'>
                    <div className='Discover'>
                        <div className='icon pb-4'>
                            <img src={DiscoverImg} alt='...' />
                        </div>
                        <h1>Discover</h1>
                        <p>
                            We take the time to sit down with you, <br />
                            get to know your needs, and go <br />
                            above and beyond to discover the best <br />
                            solution for your IT requirements <br />
                        </p>
                    </div>
                    <div className='Design pt-4'>
                        <div className='icon pb-4'>
                            <img src={DesignImg} alt='...' />
                        </div>
                        <h1>Design</h1>
                        <p>
                            We design scalable services and products to<br /> 
                            accommodate growth and ever-changing <br />
                            technology and business demands<br />
                        </p>
                    </div>
                    <div className='Deploy pt-4'>
                        <div className='icon pb-4'>
                            <img src={DeployImg} alt='...' />
                        </div>
                        <h1>Deploy</h1>
                        <p>
                            We design scalable services and products to 
                            accommodate growth and ever-changing 
                            technology and business demands
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='third-row'>
                    <div className='Define'>
                        <div className='icon pb-4'>
                            <img src={DefineImg} alt='...' />
                        </div>
                        <h1>Define</h1>
                        <p>
                            For us to define the best solution to improve 
                            and integrate with your business requirements,
                            we work with the best processes and policies.
                        </p>
                    </div>
                    <div className='Develop pt-4'>
                        <div className='icon pb-4'>
                            <img src={DevelopImg} alt='...' />
                        </div>
                        <h1>Develop</h1>
                        <p>
                            Technology development and innovation fostering 
                            are our forte. We ensure that every project is 
                            developed using an AGILE methodology, with the 
                            needs of the client in mind at all times
                        </p>
                    </div>
                    <div className='Deliver pt-4'>
                        <div className='icon pb-4'>
                            <img src={DeliverImg} alt='...' />
                        </div>
                        <h1>Deliver</h1>
                        <p>
                            Timeliness and business needs are essential in
                            ensuring that we complete your projects and
                            enforce your ideas by your scope.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SixDSection
