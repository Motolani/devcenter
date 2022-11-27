import React from 'react';
import { Link } from "react-router-dom";
import BlogImage from '../../images/readblog.png';

const ReadBlog = () => {
  return (
    <div className='row readBlog'>
        <div className='col-md-10 offset-md-1'>
            <p className='text-start blog-p1'>Read Blog</p>
            <div className='text-center pb-5'>
                <img src={BlogImage} alt='blog-home' className='homeBlogImg'/>
            </div>
            <p className='blog-p2'>
              DevCenter Innovation promotes the growth of its sister firm, Wallx, a fintech application geared at lifestyle, merchant, point-of-sale, and foreign exchange. As the financial firm’s DevCenter Innovation promotes the growth of its sister firm, Wallx, a fintech application geared at lifestyle, 
            </p>
            <Link to="/blog" className="btn btn-outline-dark pl-3 rounded-pill btn-xl btnHomeBlog mb-5">Read More</Link>
        </div>
    </div>
  )
}

export default ReadBlog
