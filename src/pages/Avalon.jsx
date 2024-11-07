import React from 'react';
import '../style/ProjectDisplay.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Avalon = () => {
    return (
        <div>
            <Header />
            <div className="_projectDisplay">
                <div className="_projectDesc">
                    <div className="_projectTitle">Avalon: Virtual Edition</div>
                    <div className="_projectBody">


                    </div>
                    <div className="_projectTechTitle">
                        Tech used
                    </div>
                    <div className="_projectBody">

                    </div>

                </div>
                <div className="_projectDemo">
                    <div className="_carousel">

                    </div>
                </div>
            </div>
            <Footer href="/home"/>
        </div>
    );
}

export default Avalon;