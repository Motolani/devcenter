import React from 'react';
import BgImg from '../../images/contactUsBg.png';

const ContactUsContent = () => {
  return (
    <div className='ContactUsContent' >
        <div className='BgContactUsContent' style={{ backgroundImage:`url(${BgImg})` }}>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='contactBorderBlue text-center'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsContent
