import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import '../style/SnakeGame.css';

const SnakeGame = () => {
    return (
        <>
            <div className="_snakeGameDiv">
                <div className="_snakeGameTitle">Snake IO</div>
                <div className="_snakeGamePlayButtonContainer"><button className="_snakeGamePlayButton">Play</button></div>
                <div className="_snakeGameAuxillaryButtons"></div>
            </div>
            <Footer href="/home#projects"/>
        </>
    )
}

export default SnakeGame;