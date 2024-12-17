import React from 'react';
import '../style/Header.css';
import Link from './Link';
import logoIcon from '../static/logoIcon.png';
import menuIcon from '../static/menuIcon.jpg';
import resume from '../static/peterJiangResume.pdf';
import leftarrow from '../static/leftarrow.webp';

const Header = () => {
    return (
        <div className="_headerBar">
            <div className="_headerLogo"> <Link href="/"> <img alt="logo" className="_headerIcon" src={logoIcon} /> </Link></div>
            <div className="_headerQuickLinks"> 
                <div className="_headerMenuDiv">
                    <img alt="menu" className="_headerMenu" src={menuIcon} /> 
                    <div className="_dropdownContent">
                        <Link className="_quickLink" href="/home"><div className="_quickRow">Home</div></Link>
                        <div className="_quickRow _projectRow"><img alt="left arrow" className="_projectArrow" src={leftarrow} /><a className="_quickLink">Projects Gallery</a>
                            <div className="_projectDropdownContent">
                                <Link href="/avalon" className="_quickLink"><div className="_projectSubRow">Avalon</div></Link>
                                <Link href="/purdueZilla" className="_quickLink"><div className="_projectSubRow">PurdueZilla</div></Link>
                                <Link href="/purdueHang" className="_quickLink"><div className="_projectSubRow">HangMan</div></Link>
                            </div>
                        </div>
                        <a className="_quickLink" href="https://www.linkedin.com/in/peter-jiang-9923580bb/" target="_blank"><div className="_quickRow">LinkedIn</div></a>
                        <a className="_quickLink" href="mailto:pzjiang01@hotmail.com"><div className="_quickRow">Email Me</div></a>
                        <a className="_quickLink" target="_blank" href={resume}><div className="_quickRow">My Resume</div></a>
                        <a className="_quickLink" target="_blank" href="https://github.com/pzjiang"><div className="_quickRow">GitHub</div></a>
                        <Link className="_quickLink" href="/blogs"><div className="_quickRow">Blog</div></Link>
                        <div className="_quickRow _projectRow"><img alt="left arrow" className="_projectArrow" src={leftarrow} /><a className="_quickLink">Embedded Projects</a>
                            <div className="_projectDropdownContent">
                                <Link href="/snake" className="_quickLink"><div className="_projectSubRow">Snake IO</div></Link>
                                <Link href="/sudoku" className="_quickLink"><div className="_projectSubRow">Sudoku Solver</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
      
            </div>
        </div>
    );
}

export default Header;