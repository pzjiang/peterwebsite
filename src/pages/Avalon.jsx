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
                    <div className="_projectTitle _medievalFont">Avalon: Virtual Edition</div>
                    <div className="_projectBody">
                        A virtual rendition of the board game Avalon. This project was inspired due to complaints during board game nights
                        about how long it took to clean up and set up after each game, and how the cards had become so worn out that if 
                        someone paid close enough attention, they would be able to tell what role each person took, and what each person voted.
                        <br />
                        {'  '}This project aimed to solve these issues allowing a customizable amount of the gameplay to be performed virtually. The app allowed us
                        to play almost entirely online without touching the cards at all, or if we still wanted some physical interaction, we could set it
                        to only use the virtual voting tokens.
                        <br />
                        

                    </div>
                    <div className="_projectTechTitle _medievalFont">
                        Tech used
                    </div>
                    <div className="_projectBody">
                        This project was built using React with a Firebase backend. We chose to create a Web app as there was a rather even split
                        between Apple and Android, and we wanted to avoid having to deal with issues letting the two systems play together.
                    </div>

                </div>
                <div className="_projectDemo">
                    <div className="_projectTechTitle _medievalFont">Gallery</div>
                    <div className="_carousel">

                    </div>
                </div>
            </div>
            <Footer href="/home"/>
        </div>
    );
}

export default Avalon;