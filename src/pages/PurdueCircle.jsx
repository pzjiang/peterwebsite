import React from 'react';
import '../style/ProjectDisplay.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import login from '../static/zillaLogin.png';
import signup from '../static/zillaSignup.png';
import tasks from '../static/zillaTasks.png';
import work from '../static/zillaWork.png';

const PurdueCircle = () => {
    return (
        <>
        <Header />
            <div className="_avalonDivBack">
                
                <div className="_projectDisplay">
                    <div className="_projectDesc">
                        <div className="_projectTitle _ethnoFont">PurdueZilla</div>
                        <div className="_projectBody">
                            A Purdue-themed work planner, modeled off of the existing application Jira. This project was made with a group of rather broke college students
                            that wanted a tool for ticket management similar to what is used in the workforce, but did not want to pay the fee for having our own Jira account.

                            <br /> <br />
                            This project began during a discussion about internships compared to college classes, and how college classes did not teach us how to properly integrate into 
                            the software development workforce. And thus, we built a ticket management system for use in our classes, to feel a bit more like real working adults.

                        </div>
                        <div className="_projectTechTitle _ethnoFont">
                            Tech used
                        </div>
                        <div className="_projectBody">
                            This project was build using React and Firebase. We used email authentication to make sure that accounts made were owned by real people, and based most 
                            of the design off of existing ticket management apps. Due to copy-right issues, we chose to never pursue any form of monetization, and only used this application
                            internally.
                        </div>

                    </div>
                    <div className="_projectDemo">
                        <div className="_projectTechTitle _ethnoFont">Gallery</div>
                        <div className="_carousel">
                            <input type="checkbox" className="_galleryCheck" />
                            <div annot="Task detail page" slide="4" className="_gallerySlide">
                                <img src={work} className="_galleryImage" />
                            </div>
                            <input type="checkbox" className="_galleryCheck" />
                            <div annot="Tasks page" slide="3" className="_gallerySlide">
                                <img src={tasks} className="_galleryImage" />
                            </div>
                            <input type="checkbox" className="_galleryCheck" />
                            <div annot="Signup page" slide="2" className="_gallerySlide">
                                <img src={signup} className="_galleryImage" />
                            </div>
                            <input type="checkbox" className="_galleryCheck" />
                            <div annot="Login page" slide="1" className="_gallerySlide">
                                <img src={login} className="_galleryImage" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        <Footer href="/home#projects"/>
        </>
    );
}

export default PurdueCircle;