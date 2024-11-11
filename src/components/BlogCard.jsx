import React from 'react';

const BlogCard = ({title, date}) => {
    return (
        <div className="_blogCardDiv">
            <div className="_cardTitle">
                Card title
            </div>
            <div className="_cardDate">
                Card date
            </div>
        </div>
    )
}

export default BlogCard;