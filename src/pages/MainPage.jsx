import React from 'react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../style/MainPage.css';
import closedBook from '../static/closedBook.png';
import Link from '../components/Link';


const MainPage = () => {
    return (
        <div className="_mainPageDiv">
            <Section className="_aboutSection">
                <img className="_aboutSectionImage _mainImgL" ></img>
                <div>About me</div>
            </Section>
            <Section className="_expSection" >
                <img className="_expSectionImage _mainImgR" ></img>
                <div>Technologies I've worked with: </div>
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
                    <Link href="blogs" className=""><img src={closedBook} className="_blogSectionImage" ></img></Link>
                </div>
                
            </Section>
           
            <Footer />
        </div>
    );
}
export default MainPage;