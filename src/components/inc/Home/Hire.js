import React from 'react';
import HireImgOne from '../../images/hire1.png';
import HireBgImg from '../../images/hireBG.png';
import HireImg2 from '../../images/1.png';
import HireImg3 from '../../images/2.png';
import HireImg4 from '../../images/3.png';
import HireImg5 from '../../images/5.png';
import HireImg6 from '../../images/6.png';
import HireImg7 from '../../images/7.png';
import HireImg8 from '../../images/8.png';
import HireImg9 from '../../images/9.png';
import HireImg10 from '../../images/10.png';
import HireImg11 from '../../images/11.png';
import HireImg12 from '../../images/12.png';
import HireImg13 from '../../images/13.png';
import HireImg14 from '../../images/14.png';
import HireImg15 from '../../images/15.png';
import HireImg16 from '../../images/16.png';
import HireImg17 from '../../images/17.png';
import HireImg18 from '../../images/18.png';
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <div className='Hire pt-5 pb-5' style={{ backgroundImage:`url(${HireBgImg})` }}>
      <div className='row'>
        <div className='col-md-6 text-center'>
          <div className='row d-flex justify-content-evenly '>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImgOne})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg2})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg5})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg3})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg4})` }}></div>
            </div>
          </div>
          
          <div className='row d-flex justify-content-evenly pt-1'>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg6})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg7})` }}></div>
            </div>
            
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg8})` }}></div>
            </div>
            
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg9})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg10})` }}></div>
            </div>
          </div>
          
          <div className='row d-flex justify-content-evenly pt-1'>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg11})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg12})` }}></div>
            </div>
            
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg13})` }}></div>
            </div>
            
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg14})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg15})` }}></div>
            </div>
          </div>
          
          <div className='row d-flex justify-content-evenly pt-1'>
            <div className='col-2 offset-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg16})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg17})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ backgroundImage:`url(${HireImg18})` }}></div>
            </div>
            <div className='col-2'>
                <div className='hire-border' style={{ display:'none' }}></div>
            </div>
          </div>
            
          </div>
        <div className='col-md-6 HireOurTalent text-center pt-2 ' >
            <h1 className='pt-2 pb-3' >Hire Our Talent</h1>
            <p  className='pt-2 pb-3'>
              We assist businesses and individuals <br/>
              looking to develop a tech project and <br/>
              build a software development team 
            </p>
            <Link to="/contact" className="btn btn-light rounded-pill btn-lg fs-6 hire-btn mt-3"><span className='small'>Call Us Now</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Hire
