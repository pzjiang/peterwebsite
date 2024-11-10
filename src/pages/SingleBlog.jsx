import React from 'react';
import '../style/BlogPage.css'; 

const SingleBlog = ({children, date, imgSrc}) => {
    
    const addLineBreak = (str) => {
        return (
            <>
                {str.split('\n').map((str1) => {
                    return (
                        <> 
                            {str1}
                            <br />
                        </>
                    );
                })}
            </>
        )
    }

    return (
        <div className="_singleBlog">
            <div className="_blogImageDiv">
                <img src={imgSrc} className="_blogImage" />
            </div>
            <div className="_blogBodyDiv">
                <div className="_blogTitle">
                    {children[0]}
                </div>
                <div className="_blogContent">
                    {addLineBreak(children[1])}
                    
                </div>
                <div className="_blogAfterword">
                    {children[2]}
                </div>
            </div>
            <div className="_blogFooter">
                Written at {date}
            </div>
            
        </div>
    );
}

export default SingleBlog;