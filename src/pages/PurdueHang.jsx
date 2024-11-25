import React from 'react';
import '../style/ProjectDisplay.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import hangTitle from '../static/hangtitle.png';
import hangGame from '../static/hangmanGameplay.png';
import highScores from '../static/highscores.png';
import losing from '../static/losescreen.png';


const PurdueHang = () => {
    return (
        <>
        <Header />
        <div className="_avalonDivBack">

            <div className="_projectDisplay">
                <div className="_projectDesc">
                    <div className="_projectTitle _hangManFont">Purdue HangMan</div>
                    <div className="_projectBody">
                        A Purdue-themed variation of the classic word game hangman. As you make incorrect guesses or as time runes out, the blocks of the Purdue 
                        logo fall off, until the game ends. You can choose to skip a word or ask for a hint, in which case you will lose lives but get letters.
                        High scores are saved between sessions, and displayed through window that slowly scrolls through all the saved scores.
                        <br /> 
                        <br />
                        This game was created due to my past interest in game development. Computer games were one of the initial reasons behind my 
                        computer science major.
                        

                    </div>
                    <div className="_projectTechTitle _hangManFont">
                        Tech used
                    </div>
                    <div className="_projectBody">
                        This game was built entirely using Python, and a graphics library. All animation and shapes were mapped out by the pixel. I used 
                        Python for this project mostly because I was learning Python at the time, and wanted to do something interesting with the knowledge I had.
                    </div>

                </div>
                <div className="_projectDemo">
                    <div className="_projectTechTitle _hangManFont">Gallery</div>
                    <div className="_carousel">
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Check out others' high scores" slide="4" className="_gallerySlide">
                            <img src={highScores} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Loss screen" slide="3" className="_gallerySlide">
                            <img src={losing} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Hangman gameplay" slide="2" className="_gallerySlide">
                            <img src={hangGame} className="_galleryImage" />
                        </div>
                        <input type="checkbox" className="_galleryCheck" />
                        <div annot="Title Screen" slide="1" className="_gallerySlide">
                            <img src={hangTitle} className="_galleryImage" />
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
        <Footer href="/home#projects"/>
        </>
    );
}

export default PurdueHang;