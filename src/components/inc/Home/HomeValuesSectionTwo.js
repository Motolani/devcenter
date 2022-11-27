import React from 'react';
import Bulb from '../../images/Vectorbulb.png';
import Ribbon from '../../images/Vectorribbon.png';
import Hands from '../../images/Vectorhands.png';
import Star from '../../images/Vectorstar.png';

const HomeValuesSectionTwo = () => {
  return (
    <div className='HomeValuesSectionTwo'>
      <div className="row content text-center">
        <div className="col-lg-3 ">
            <div class='values-border mb-4'>
                <img src={Bulb} alt="bulb" height={40} className='mt-2'/>
                <h4 className='fw-bold'>Result</h4>
                <p class='bulb_ptag'>
                    Our business objective is to conduct research, 
                    develop solutions, boost revenue, and 
                    become a millennial business that 
                    adds value to our customers.
                </p>
            </div>
        </div>
        <div className="col-lg-3">
            <div class='values-border mb-4'>
                <img src={Ribbon} alt="Ribbon" height={40} className='mt-3'/>
                <h4 className='fw-bold'>Trust</h4>
                <p>
                    We enforce trust, openness, teamwork, 
                    and integrity in all of our dealings to  
                    ensure that we can continue to 
                    collaborate with our clients
                </p>
            </div>
        </div>
        <div className="col-lg-3">
            <div class='values-border mb-4'>
                <img src={Hands} alt="Handshake" height={40} className='mt-3'/>
                <h4 className='fw-bold'>Innovation</h4>
                <p>
                    Using the tools and methods that are 
                    highly regarded in the tech industry, 
                    we constantly work to deliver fresh 
                    and innovative business solutions.
                </p>
            </div>
        </div>
        <div className="col-lg-3">
            <div class='values-border mb-4'>
                <img src={Star} alt="Star" height={40} className='mt-3'/>
                <h4 className='fw-bold'>Passion</h4>
                <p>
                    We are passionate about delivering 
                    global excellence results to our 
                    customers, community, and 
                    people consistently.
                </p>
            </div>
        </div>
      </div>
      <div className='row section-two'>
        <div className="col-md-6 relevance">
            <h3 className='fw-bold'>How we’ve gained global relevance</h3>
            <p>
                We have collaborated with brands and companies in a <br/> variety of industries, which has allowed us to broaden <br/> our reach and continuously offer digital capabilities.
            </p>
            <div className='row inner-row'>
                <div className='col-4 text-start'>
                    <h2 className='fw-bolder'>60+</h2>
                    <span>Satisfied Clients</span>
                </div>
                <div className='col-4 text-start'>
                    <h2 className='fw-bolder'>100+</h2>
                    <span>Completed Projects </span>
                </div>
            </div>
        </div>
        <div className="col-md-5">
            <div>
                <div className='d-flex bd-highlight'>
                    <span className='fw-bold me-auto p-2 bd-highlight'>Result Oriented project</span>
                    <span className='fw-bold p-2 bd-highlight'>98%</span>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-primary progressbarone" role="progressbar" label="Success example"  valuenow="98" aria-valuemin="0" valuemax="100"></div>
                </div>
            </div>
            <div className='pt-4'>
                <div className='d-flex bd-highlight'>
                    <span className='fw-bold me-auto p-2 bd-highlight'>Passion For Result</span>
                    <span className='fw-bold p-2 bd-highlight'>100%</span>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-primary progressbartwo" role="progressbar" label="Success example"  valuenow="95" aria-valuemin="0" valuemax="100"></div>
                </div>
            </div>
            <div className='pt-4'>
                <div className='d-flex bd-highlight'>
                    <span className='fw-bold me-auto p-2 bd-highlight'>Passion For Our Customers</span>
                    <span className='fw-bold p-2 bd-highlight'>100%</span>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-primary progressbartwo" role="progressbar" label="Success example"  valuenow="95" aria-valuemin="0" valuemax="100"></div>
                </div>
            </div>
            <div className='pt-4'>
                <div className='d-flex bd-highlight'>
                    <span className='fw-bold me-auto p-2 bd-highlight'>Teamwork Culture</span>
                    <span className='fw-bold p-2 bd-highlight'>95%</span>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-primary progressbarfour" role="progressbar" label="Success example"  valuenow="95" aria-valuemin="0" valuemax="95"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeValuesSectionTwo
