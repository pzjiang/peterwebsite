import React from 'react';


const BlogImage = ({value}) => {

    return (
        <div className="_blogImageDiv">
            <img src={value} className="_blogImage" />
        </div>
    )
}

export default BlogImage