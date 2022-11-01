import React from 'react';
import ImageOne from '../../images/one.png';
import ImageTwo from '../../images/two.png';
import ImageThree from '../../images/three.png';
import ImageFour from '../../images/four.png';
import ImageFive from '../../images/five.png';
import ImageSix from '../../images/six.png';
import ImageSeven from '../../images/seven.png';
import ImageEight from '../../images/eight.png';

const WorkedFor = () => {
  return (
    <div className='workedFor pb-5'>
      <div className='row section-two text-center justify-content-center'>
        <div className="col-md-6 relevance">
            <h3 className='fw-bold'>Client’s We’ve Worked For</h3>
            <p>
            A fantastic business network to which we have <br/> 
            rendered a range of services, products, and talents
            </p>
            <div className='row justify-content-center inner-row'>
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
        <div className="col-sm-3 pill-carou">
            <div className='borderr d-flex justify-content-center'>
                <div id="carouselExampleSlidesOnly" className="carousel slide workedForCarousel " data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active inner-carou itemm">
                      <img src={ImageOne} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageTwo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageThree} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='borderr mt-4 d-flex justify-content-center'>
                <div id="carouselExampleSlidesOnly stuff" className="carousel slide workedForCarousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active inner-carou itemm">
                      <img src={ImageTwo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageSeven} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageSix} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='borderr mt-4 d-flex justify-content-center'>
                <div id="carouselExampleSlidesOnly stuff" className="carousel slide workedForCarousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active inner-carou itemm">
                      <img src={ImageFour} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageFive} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageTwo} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
        <div className="col-sm-3 pill-carou">
            <div className='borderr d-flex justify-content-center'>
                <div id="carouselExampleSlidesOnly stuff" className="carousel slide workedForCarousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active inner-carou itemm">
                      <img src={ImageOne} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageTwo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageThree} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
            </div>   
            
            <div className='borderr mt-4 d-flex justify-content-center'>
                    <div id="carouselExampleSlidesOnly stuff" className="carousel slide workedForCarousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active inner-carou itemm">
                      <img src={ImageThree} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageSeven} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageSix} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='borderr mt-4 d-flex justify-content-center'>
                <div id="carouselExampleSlidesOnly stuff" className="carousel slide workedForCarousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active inner-carou itemm">
                      <img src={ImageFour} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageFive} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item inner-carou itemm">
                      <img src={ImageTwo} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkedFor
