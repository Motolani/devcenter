import React from 'react';
import BlogImage from '../../images/readblog.png';

const ReadBlog = () => {
  return (
    <div className='row readBlog'>
        <div className='col-md-10 offset-md-1'>
            <p className='text-start blog-p1'>Read Blog</p>
            <div className='text-center pb-5'>
                <img src={BlogImage} alt='blog-home' className='homeBlogImg'/>
            </div>
            <p className='text-center blog-p2'>
              DevCenter Innovation promotes the growth of its sister firm, Wallx, a fintech application geared at lifestyle, merchant, point-of-sale, and foreign exchange. As the financial firm’s DevCenter Innovation promotes the growth of its sister firm, Wallx, a fintech application geared at lifestyle, 
            </p>
            <button type="button" className="btn btn-outline-dark pl-3 rounded-pill btn-lg fs-6 btnHomeBlog mb-5">Read More</button>
        </div>
    </div>
  )
}

export default ReadBlog