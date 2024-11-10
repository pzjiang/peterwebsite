import React from 'react';
import Footer from '../components/Footer';
import '../style/BlogPage.css';
import Header from '../components/Header';
import SingleBlog from './SingleBlog';
import corgi from '../static/corgi.png';

const BlogPage = () => {
    return (
        <div className="_blogLibrary">
            <Header />
                <div className="_blogMainDiv">
                    
                    <SingleBlog date="10/21/2024" imgSrc={corgi}>
                        {/* */"title"}
                        {/**/"body \n \n \n \n \n \n \n  test"}
                        {/**/"afterword"}
                    </SingleBlog>
                    
                </div>
            <Footer href="/home#blog" />
        </div>
    );
}
export default BlogPage;