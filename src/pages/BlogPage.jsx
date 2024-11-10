import React from 'react';
import Footer from '../components/Footer';
import '../style/BlogPage.css';
import Header from '../components/Header';

const BlogPage = () => {
    return (
        <div className="_blogLibrary">
            <Header />
                <div className="_blogMainDiv">
                    <div className="_aboutBlogDiv">

                    </div>
                    <div className="_blogLibraryDiv">

                    </div>
                </div>
            <Footer href="/home" />
        </div>
    );
}
export default BlogPage;