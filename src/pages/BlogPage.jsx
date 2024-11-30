import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import '../style/BlogPage.css';
import Header from '../components/Header';
import SingleBlog from './SingleBlog';
import BlogCard from '../components/BlogCard';



const BlogPage = () => {
    const [displayBlog, setDisplayBlog] = useState(false);
    const [blogHeader, setBlogHeader] = useState("");
    const [blogDate, setBlogDate] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [blogImg, setBlogImg] = useState("");

    const onReturn = () => {

        setDisplayBlog(false);
        setBlogHeader("");
        setBlogDate("");
        setBlogBody("");
        setBlogImg("");
    }

    const blogSelection = (value) => {
        setBlogBody(value.body);
        setBlogHeader(value.header);
        setBlogDate(value.date);
        setBlogImg(value.imgSrc);
        setDisplayBlog(true);
    }

    return (
        <>
            <Header />
            <div className="_blogLibrary">
                
                {
                    displayBlog &&
                    <SingleBlog imgSrc={blogImg} returnCallback={onReturn} >{blogHeader}{blogBody}{blogDate}</SingleBlog>
                }
                {!displayBlog &&
                    <div className="_blogLibraryContent">
                        <BlogCard blogSelection={blogSelection} search="blogs" header="Blogs" />
                        <BlogCard blogSelection={blogSelection} search="reviews" header="Manhwa/Novel reviews"/>
                    </div>
                    }
                
            </div>
            <Footer href="/home#blog" />
        </>
    );
}
export default BlogPage;

