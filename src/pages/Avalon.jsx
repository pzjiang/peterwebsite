import React from 'react';
import '../style/ProjectDisplay.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import avalonHome from '../static/avalonHome.png';
import roomCreation from '../static/roomCreation.png';
import roomLobbyPop from '../static/roomLobbyPopulated.png';
import roleSelection from '../static/roleSelection.png';
import myRole from '../static/myRole.png';
import gameRoom from '../static/gameRoom.png';

const Avalon = () => {
    return (
        <div className="_avalonDivBack">
            <Header />
            <div className="_projectDisplay">
                <div className="_projectDesc">
                    <div className="_projectTitle _medievalFont">Avalon: Virtual Edition</div>
                    <div className="_projectBody">
                        A virtual rendition of the board game Avalon. This project was inspired due to complaints during board game nights
                        about how long it took to clean up and set up after each game, and how the cards had become so worn out that if 
                        someone paid close enough attention, they would be able to tell what role each person took, and what each person voted.
                        <br />
                        <br/>
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
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Role distribution" slide="6" className="_gallerySlide">
                            <img src={myRole} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Game room, where the gameplay happens" slide="5" className="_gallerySlide">
                            <img src={gameRoom} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Select the roles you want to play with" slide="4" className="_gallerySlide">
                            <img src={roleSelection} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="QR code scannable for others to join" slide="3" className="_gallerySlide">
                            <img src={roomLobbyPop} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Choose your name before joining" slide="2" className="_gallerySlide">
                            <img src={roomCreation} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Join an existing game, or make your own" slide="1" className="_gallerySlide">
                            <img src={avalonHome} className="_galleryImage" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer href="/home"/>
        </div>
    );
}

export default Avalon;