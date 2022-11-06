import React from 'react'

const CompanyProfile = () => {
  return (
    <div className='CompanyProfile pt-4 pb-5'>
        <div className='heading pt-5'>
            <h3 className='fw-bold'>Company Profile</h3>
        </div>
        <div className='row pt-3'>
            <div className='col-sm-6 profileContent1'>
                <p>
                    DevCenter Innovation is a client-focused IT firm that strives 
                    to provide outstanding service delivery at all times. With 
                    a great teamwork culture, we are passionate about our 
                    Customers, People, Community, and Global excellence.
                </p>
                <p>                
                    Software Development, Product Design, Blockchain, Cloud Implementation, Tech-Talent Outsourcing, and many other 
                    areas of expertise are among our specialties.
                </p>
            </div>
            <div className='col-sm-6 profileContent2'>
                <p>
                    Our ambition is to become a leading technology provider that enables businesses and individuals to succeed, and expand into new markets, delivering cutting-edge products,  services, and solutions to our customers. 
                </p>
                <p>
                    Our products include Blacbox, Wallx, The Stage, and DevRecruit. These are the businesses that we offer to better serve clients and customers.
                </p>
            </div>
        </div>
    </div>
  )
}

export default CompanyProfile
