import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import '../style/BlogPage.css';
import Header from '../components/Header';
import SingleBlog from './SingleBlog';
import BlogCard from '../components/BlogCard';
import {useLoadBlog} from '../hooks/CustomHook';


const BlogPage = () => {
    const {isLoaded, blogs} = useLoadBlog("blogs");
    const onReturn = () => {
        //setCurrentBlog(-1);
    }

    const blogSelection = (value) => {
        //setCurrentBlog(value);
    }

    return (
        <>
            <div className="_blogLibrary">
                <Header />
                    <div className="_blogLibraryContent">
                        <div className="_blogsDisplay">
                            <div className="_blogsDisplayHeader">Blogs</div>
                            <div className="_blogsDisplayBody">

                            </div>
                        </div>
                        <div className="_blogsDisplay">
                            <div className="_blogsDisplayHeader">Novel/Manhwa Reviews</div> 
                            <div className="_blogsDisplayBody">

                            </div>
                        </div>
                    </div>
                <Footer href="/home#blog" />
            </div>
        </>
    );
}
export default BlogPage;

/**
 * 
 * {isLoaded && <div> 
                    {blogs.map((val) => {
                        return <div>{val.header}</div>;
                    })}
                    </div>}
 * 
 */