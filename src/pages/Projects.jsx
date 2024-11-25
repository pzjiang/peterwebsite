import React from 'react';
import Footer from '../components/Footer';
import apiFunctions from '../firebase/api';

const Projects = () => {
    apiFunctions.getBlogs();
    return (
        <div> 
            Under Maintenance
            <Footer href="/home" />
        </div>
    );
}

export default Projects;