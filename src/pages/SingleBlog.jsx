import React from 'react';
import '../style/BlogPage.css'; 

import BlogImage from '../components/BlogImage';

const SingleBlog = ({children, date, returnCallback, value}) => {
    
    const addLineBreak = (str) => {
        return (
            <>
                {str.split('\n').map((str1) => {
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
            <BlogImage value={value} />
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
                Written at {date}
            </div>
            
        </div>
    );
}

export default SingleBlog;