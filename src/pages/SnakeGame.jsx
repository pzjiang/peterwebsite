import React,{useEffect, useState, useRef} from 'react';
import Footer from '../components/Footer';
import '../style/SnakeGame.css';
import arrowKeys from '../static/arrowKeys.png';
import { useInterval } from '../hooks/UseInterval';


const styleSheet = {
    moveUp: [{transform: 'translateY(0)'},{transform: 'translateY(-20px)'}],
    moveDown: [{transform: 'translateY(0)'},{transform: 'translateY(20px)'}],
    moveLeft: [{transform: 'translateX(0)'},{transform: 'translateX(-20px)'}],
    moveRight: [{transform: 'translateX(0)'},{transform: 'translateX(20px)'}],
    snakeHeadClass: '_snakeHead',
    snakeBodyClass: '_snakeBody',
    animProps: {duration: 400, iterations: 1, fill: 'forwards'}
}
/**
 * snake object properties:
 * prev:
 * x:
 * y:
 * animation:
 * direction: 1 = right, 2 = left, 3 = up, 4 = down
 * 
 */

const SnakeGame = () => {
    //1 is play screen, 2 is actual game, 3 is game over
    const [gameState, setGameState] = useState(1);
    const [startCountDown, stopCountDown, countDown] = useInterval(()=>{
        gameGrid[0] = 12;
        console.log(styleSheet['moveRight']);
        setDisplayNum(displayNum => displayNum - 1); 
        //proof of concept of using css to animate
        if (testRef.current.style) {
            testRef.current.animate([
                {transform: 'scale(0.5)'},
                {transform: 'scale(1)'}
            ],{duration: 1000, iterations: 1}
        );
        }
    },1000);
    const [startGamePlay, stopGamePlay, gameplay] = useInterval(()=>{gameLogic();}, 400);
    const [displayNum, setDisplayNum] = useState(3);
    const testRef = useRef();
    const gridRef = useRef();
    const [snakeHead, setSnakeHead] = useState({});
    // undefined is empty, 1 is snake head, 2 is snake body, 3 is food
    const [gameGrid, setGameGrid] = useState([]);
    const curDirection = useRef('moveRight');
    
    useEffect(() => {
        if (displayNum === 0) {
            stopCountDown();
            setDisplayNum(3);
            beginGame();
        }
    },[displayNum]);
    useEffect(() => {
        //add event listeners for key
        document.addEventListener("keydown",handleKeyDown);
        return (() => {document.removeEventListener("keydown",handleKeyDown)});
    },[]);
    const handleKeyDown = (event) => {

        if (event.keyCode === 38) {
            //up
            curDirection.current = "moveUp";
        }
        else if (event.keyCode === 37) {
            //left
            curDirection.current = "moveLeft";
        }
        else if (event.keyCode === 39) {
            curDirection.current = "moveRight";
        }
        else if (event.keyCode === 40) {
            //down
            curDirection.current = "moveDown";
        }
    }
    const onPlay = () => {
        if (gameState === 1) {
            setGameState(2);
            setDisplayNum(3);
            initializeGrid();
            startCountDown();
        }
    }
    const initializeGrid = () => {
        setGameGrid(new Array(800));
        let snakeRef = snakeHead.elem;
        if (!snakeRef) {
            snakeRef = document.createElement('div');
            snakeRef.classList.add(styleSheet.snakeHeadClass);
            gridRef.current.appendChild(snakeRef);
        }
        const newSnakeHead = {
            x: 20, 
            y: 10, 
            direction: 'moveRight',
            elem: snakeRef,
            next: undefined,
        }
        newSnakeHead.currentTail = newSnakeHead;
        setSnakeHead(newSnakeHead);
        //set grid state to 1
        snakeRef.style.left = '400px';
        snakeRef.style.top = '200px';


    }
    const calculateInd = (x, y) => {
        return x * 40 + y;
    }
    
    const beginGame = () => {
        setGameState(3);
        gridRef.current.style.display = 'inline-block';
        snakeHead.elem.animate(styleSheet[snakeHead.direction], styleSheet.animProps);
    }
    const onCancelClick = () => {
        setDisplayNum(3);
        stopCountDown();
        setGameState(1);
    }
    useEffect(() => {

    },[]);
    const onFoodEaten = () => {
        const newSnakeBody = {};
        const snakeRef = document.createElement('div');
        snakeRef.classList.add(styleSheet.snakeBodyClass);
        snakeRef.classList.add(styleSheet.snakeHeadClass);
        gridRef.current.appendChild(snakeRef);
        //set props of new snake body
        newSnakeBody.x = snakeHead.currentTail.x;
        newSnakeBody.y = snakeHead.currentTail.y;
        newSnakeBody.elem = snakeRef;
        newSnakeBody.direction = '';
        console.log(newSnakeBody.x, newSnakeBody.y);
        setElemPosition(newSnakeBody, '');

        //change tail references
        snakeHead.currentTail.next = newSnakeBody;
        snakeHead.currentTail = newSnakeBody;

    }

    const gameLogic = () => {

        //move all snake 1 over.
        let snakeRef = snakeHead.next;
        let prevDirection = snakeHead.direction;
        let newDirection;
        setElemPosition(snakeHead,curDirection.current);
        let foodEaten = false;
        const newInd = calculateInd(snakeHead.x, snakeHead.y);
        if (gameGrid[newInd] === 2) {
            foodEaten = true;
        }
        gameGrid[newInd] = 1;
        const tailInd = calculateInd(snakeHead.currentTail.x, snakeHead.currentTail.y);
        while (snakeRef !== undefined) {
            newDirection = snakeRef.direction;
            setElemPosition(snakeRef,prevDirection);
            prevDirection = newDirection;
            snakeRef = snakeRef.next;
        }
        //check if landed on food
        if (foodEaten) {
            onFoodEaten();
        }
    }

    const setElemPosition = (obj, newDirection) => {
        const direct = obj.direction;
        switch (direct) {
            case 'moveUp':
                obj.y -= 1;
                break;
            case 'moveDown':
                obj.y += 1;
                break;
            case 'moveLeft':
                obj.x -= 1;
                break;
            case 'moveRight':
                obj.x += 1;
                break;
            default:
        }
        //set new offsets
        obj.elem.style.left=`${20 * obj.x}px`;
        obj.elem.style.top =`${20 * obj.y}px`;
        //create animation
        obj.direction = newDirection;
        if (obj.direction !== '') {
            obj.elem.animate(styleSheet[obj.direction], styleSheet.animProps);
        }
        
    }

    return (
        <>
            <div className="_snakeGameDiv">
                { gameState===1 && // game state for when you're on the title page
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
                {//gamestate for when counting down to start game
                    gameState === 2 &&
                    <>
                    <button className="_cancelButton" onClick={onCancelClick}>Cancel</button>
                    <div ref={testRef} className="_countDownNumber">{displayNum}</div>
                    </>
                }
         
                    <>
                        <div ref={gridRef} className="_snakeGameGrid">
                            <button onClick={startGamePlay}>Run Game Test</button>
                            <button onClick={stopGamePlay}>Stop game test</button>
                            <button onClick={onFoodEaten}>feedSnake</button>
                        </div>
                        
                    </>
                
                {//this is the gamestate for game over / ff 
                    gameState ===4 &&
                    <>
                    </>
                }
            </div>
            <Footer href="/home#projects"/>
        </>
    )
}

export default SnakeGame;