import React from 'react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../style/MainPage.css';
import closedBook from '../static/closedBook.png';
import Link from '../components/Link';
import pixelComputer from '../static/pixelComputer.png';
import rubyIcon from '../static/rubyRailsIcon.png';
import cppIcon from '../static/cppIcon.png';
import netIcon from '../static/vbIcon.png';
import reactIcon from '../static/reactIcon.png';
import javaIcon from '../static/javaIcon.png';
import pythonIcon from '../static/pythonIcon.png';
import nodeIcon from '../static/nodeIcon.jpg';
import sqlIcon from '../static/sqlIcon.jpg';
import volleyball from '../static/pixelvolleyball.png';

const MainPage = () => {
    return (
        <div className="_mainPageDiv">
            <Section className="_aboutSection">
                <div className="_aboutText">
                    <div className="_typewriterContainer">
                        <div className="_wrapper"> <div className="_aboutTextTitle">Hello, my name is Peter Jiang</div></div>
                        <div className="_wrapper"><div className="_aboutTextDesc">Full-stack software developer based in the USA</div></div>
                        <div className="_wrapperFooter"><div className="_aboutTextFooter">Part-time Hu-Lu-Si tutor, and amateur volleyball enthusiast</div></div>
                    </div>

                </div>
                <div className="_imageDiv">
                    <div>
                        <img src={pixelComputer} alt="pixel computer" className="_aboutSectionImage" ></img>
                    </div>
                    <div>
                        <img src={volleyball} alt="pixel volleyball" className="_aboutSectionBall" />
                    </div>
                </div>
                
            </Section>
            <Section className="_expSection" >

                <div className="_expSectionContent">
                    <div className="_expSectionTitle"> Technologies I am most proficient with</div>
                    <div className="_expSectionIcons">
                        <img title="Ruby, Ruby on Rails" className="_expIcon" src={rubyIcon}/> 
                        <img title="C#/.NET" className="_expIcon" src={netIcon} /> 
                        <img title="React" className="_expIcon" src={reactIcon}/>
                        <img title="SQL" className="_expIcon" src={sqlIcon} />
                    </div>
                    <div className="_expSectionIcons">
                        <img title="C++" className="_expIcon" src={cppIcon} />
                        <img title="Java" className="_expIcon" src={javaIcon} />
                        <img title="Python" className="_expIcon" src={pythonIcon} />
                        <img title="NodeJS" className="_expIcon" src={nodeIcon} />
                    </div>
                </div>
            </Section>
            {/*
            <Section className="_projectSection">
                <img className="_projectSectionImage _mainImgL" ></img>
                <div>Projects</div>
            </Section>
            */}
            <Section className="_blogSection">
                <div className="_blogCaption">
                    <div className="_blogCaptionTitle">Check out my blog</div>
                    <div className="_blogCaptionBody">I put weekly rants, thoughts, or random stories within. Open the book to read more!</div>
                    <Link href="blogs" className=""><img alt="pixel book" src={closedBook} className="_blogSectionImage" ></img></Link>
                </div>
                
            </Section>
           
            <Footer />
        </div>
    );
}
export default MainPage;