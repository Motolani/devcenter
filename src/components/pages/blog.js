import React from "react";
import BlogContent from "../inc/blog/BlogContent";
import BlogNav from "../inc/blog/BlogNav";
import Footer from "../inc/Footer/Footer";

const Blog = () => {
    return(
        <div>
            <BlogNav />
            <BlogContent />
            <Footer />
        </div>
    );
}

export default Blog;