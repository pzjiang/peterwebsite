import React from 'react';
import '../style/Footer.css';

import githubIcon from '../static/githubIcon.png';
import linkedInIcon from '../static/linkedInIcon.webp';
import emailIcon from '../static/emailIcon.webp';
import resumeIcon from '../static/resumeIcon.webp';
import resume from '../static/peterJiangResume.pdf';
import Link from './Link';

const Footer = ({href}) => {

    return (
        <div className="_footerMainDiv">
            <span className="_footerText"><Link className="_exitLink" href={href}>Go Back</Link></span>
            <span className="_footerButtons">
                
                <a target="_blank" href="https://github.com/pzjiang" className="_footerButton">
                    <img className="_footerImage" src={githubIcon}></img>
                </a>
                <a href="https://www.linkedin.com/in/peter-jiang-9923580bb/" target="_blank" className="_footerButton">
                    <img className="_footerImage" src={linkedInIcon}></img>
                </a>
                <a href="mailto:pzjiang01@hotmail.com" className="_footerButton">
                    <img src={emailIcon} className="_footerImage"></img>
                </a>
                <a download="peterJiangResume" href={resume} className="_footerButton">
                    <img src={resumeIcon} className="_footerImage" ></img>
                </a>

            </span>
        </div>
    );
}

export default Footer;