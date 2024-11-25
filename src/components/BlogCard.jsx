import React from 'react';
import '../style/BlogPage.css';
import { useLoadBlog } from '../hooks/CustomHook';

const BlogCard = ({search, header}) => {
    const {isLoaded, blogs} = useLoadBlog(search);
    return (
        <div className="_blogsDisplay">
                            <div className="_blogsDisplayHeader">{header}</div>
                            <div className="_blogsDisplayBody">
                                {!isLoaded && <div className="_loader"></div>}
                                {isLoaded && <div className="_blogsDisplayBlogContainer">
                                    {blogs.map((blog) => {
                                        console.log(blog);
                                        return (
                                        <div className="_blogLinkContainer">
                                            <button className="_blogLink">{blog.header}</button> <br />
                                            <span className="_blogDate">{blog.date}</span>
                                        </div>);
                                    })}
                                    </div>}
                            </div>
                        </div>
    )
}

export default BlogCard;