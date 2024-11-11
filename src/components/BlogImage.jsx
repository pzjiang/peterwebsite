import React from 'react';


const BlogImage = ({value}) => {

    const returnedImage = (val) => {
        //image bank
        if (value === 1 ) {
            return <img className="_blogImage" />
        }
        
    }

    return (
        <div className="_blogImageDiv">
            {returnedImage(value)}
        </div>
    )
}

export default BlogImage