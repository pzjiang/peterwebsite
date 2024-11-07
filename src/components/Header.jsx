import React from 'react';
import '../style/Header.css';
import Link from './Link';
import logoIcon from '../static/logoIcon.png';
import menuIcon from '../static/menuIcon.jpg';
import resume from '../static/peterJiangResume.pdf';
const Header = () => {
    return (
        <div className="_headerBar">
            <div className="_headerLogo"> <Link href="/"> <img alt="logo" className="_headerIcon" src={logoIcon} /> </Link></div>
            <div className="_headerQuickLinks"> 
                <div className="_headerMenuDiv">
                    <img alt="menu" className="_headerMenu" src={menuIcon} /> 
                    <div className="_dropdownContent">
                        <h5>Quick Links!</h5>
                        <div className="_quickRow"><Link href="/home">Home</Link></div>
                        <div className="_quickRow"><Link href="/blogs">Blog</Link></div>
                        <div className="_quickRow"><Link href="/projects">Projects</Link></div>
                        <div className="_quickRow"><a href="https://www.linkedin.com/in/peter-jiang-9923580bb/" target="_blank">LinkedIn</a></div>
                        <div className="_quickRow"><a href="mailto:pzjiang01@hotmail.com">Email Me</a></div>
                        <div className="_quickRow"><a target="_blank" href={resume}>My Resume</a></div>
                    </div>
                </div>
      
            </div>
        </div>
    );
}

export default Header;