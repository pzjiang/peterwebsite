import React from 'react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../style/MainPage.css';


const MainPage = () => {
    return (
        <div className="_mainPageDiv">
            <Section className="_aboutSection">
                <img className="_aboutSectionImage _mainImgL" ></img>
                <div>About me</div>
            </Section>
            <Section className="_expSection" >
                <img className="_expSectionImage _mainImgR" ></img>
                <div>Experience </div>
            </Section>
            <Section className="_projectSection">
                <img className="_projectSectionImage _mainImgL" ></img>
                <div>Projects</div>
            </Section>
            <Section className="_blogSection">
                <img className="_blogSectionImage _mainImgR" ></img>
                <div>Creative Writing</div>
            </Section>
            <Section className="_contactSection">
                Contact me!
            </Section>
            <Footer />
        </div>
    );
}
export default MainPage;