import React,{useEffect, useState, useRef} from 'react';
import Footer from '../components/Footer';
import '../style/SnakeGame.css';
import arrowKeys from '../static/arrowKeys.png';
import { useInterval } from '../hooks/UseInterval';

const SnakeGame = () => {
    //1 is play screen, 2 is actual game, 3 is game over
    const [gameState, setGameState] = useState(1);
    const [startCountDown, stopCountDown, countDown] = useInterval(()=>{
        console.log("counting down");
        setDisplayNum(displayNum => displayNum - 1); 
        //proof of concept of using css to animate
        if (testRef.current.style) {
            testRef.current.animate([
                {transform: 'scale(0.5)'},
                {transform: 'scale(1)'}
            ],{duration: 1000, iterations: 1, fillMode: 'forwards'}
        );
        }
    },1000);
    const [startGamePlay, stopGamePlay, gameplay] = useInterval(()=>{}, 1000);
    const [displayNum, setDisplayNum] = useState(3);
    const testRef = useRef();
    
    useEffect(() => {
        if (displayNum == 0) {
            stopCountDown();
            setDisplayNum(3);
            beginGame();
        }
    },[displayNum]);
    const onPlay = () => {
        if (gameState === 1) {
            setGameState(2);
            setDisplayNum(3);
            startCountDown();
        }
    }
    const beginGame = () => {
        //setGameState(1);

    }
    const onCancelClick = () => {
        setDisplayNum(3);
        stopCountDown();
        setGameState(1);
    }
    useEffect(() => {

    },[]);

    const gameLogic = () => {

    }

    return (
        <>
            <div className="_snakeGameDiv">
                { gameState===1 &&
                <>
                <div className="_snakeGameTitle">Snake IO</div>
                <div className="_snakeGamePlayButtonContainer"><button onClick={onPlay} className="_snakeGamePlayButton">Play</button></div>
                <div className="_snakeGameInstructions">
                    <img className="_snakeArrowKeys" src={arrowKeys} ></img>
                    <div>Use arrow keys to move the snake!</div>
                </div>
                <div className="_snakeGameAuxillaryButtons"></div>
                </>
                }
                {gameState === 2 &&
                    <>
                    <button className="_cancelButton" onClick={onCancelClick}>Cancel</button>
                    <div ref={testRef} className="_countDownNumber">{displayNum}</div>
                    </>
                }
            </div>
            <Footer href="/home#projects"/>
        </>
    )
}

export default SnakeGame;