import React from 'react';
import '../style/BlogPage.css'; 

import BlogImage from '../components/BlogImage';

const SingleBlog = ({children, imgSrc, returnCallback}) => {
    
    const addLineBreak = (str) => {
        return (
            <>
                {str.split("\\n").map((str1) => {
                    return (
                        <> 
                            &emsp; {str1}
                            <br />
                        </>
                    );
                })}
            </>
        )
    }

    return (
        <div className="_singleBlog">
            <BlogImage value={imgSrc} />
            <div className="_blogBodyDiv">
                <div className="_blogTitle">
                    {children[0]}
                </div>
                <div className="_blogContent">
                    {addLineBreak(children[1])}
                    
                </div>
                <div className="_blogAfterword">
                    <button  onClick={returnCallback} className="_blogBrowseMore">Browse More</button>
                </div>
            </div>
            <div className="_blogFooter">
                Written at {children[2]}
            </div>
            
        </div>
    );
}

export default SingleBlog;