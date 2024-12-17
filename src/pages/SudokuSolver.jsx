import React,{useEffect, useState, useRef} from 'react';
import Footer from '../components/Footer';
import SplitScreen from '../components/SplitScreen';

const SudokuSolver = () => {

    const [sudokuGrid, setSudokuGrid] = useState([]);
    const [solvedGrid, setSolvedGrid] = useState ([]);
    const [warningMessage, setWarningMessage] = useState("");
    const [loadState,setLoadState] = useState(1);
    const arrNine = [1,2,3,4,5,6,7,8,9];
    const codeNine = 57;
    const codeOne = 49;
    const inputRef = useRef(new Array(81));
    const maskX = new Array(10);
    const maskY = new Array(10);
    const maskSquare = new Array(10);
    const maskVals = [1,2,4,8,16,32,64,128,256];
    const maskTotal = 511;
    

    useEffect(() => {
        refreshGrid(true);
        setLoadState(1);
    },[]);

    const refreshGrid = (clearGrid) => {
        if (clearGrid) {
            const newGrid = new Array(81);
            const newSolvedGrid = new Array(81);
            for (let i = 0; i < 81; i++) {
                newGrid[i] = '';
                newSolvedGrid[i] = '';
            }
            setSolvedGrid(newSolvedGrid);
            setSudokuGrid(newGrid);
            for (let i = 0; i < 9; i++) {
                maskX[i] = 0;
                maskY[i] = 0;
                maskSquare[i] = 0;
            }
        }
  
        setLoadState(1);
        enableGrid(clearGrid);
        setWarningMessage('');
    }

    const calcSquareMask = (x, y) => {
        let cornerX = x - (x % 3);
        let cornerY = y - (y % 3);
        return cornerX + Math.floor(cornerY / 3);
    }

    // false means already taken
    const fillMask = (x, y, val) => {
        const maskVal = maskVals[val -1];
        const squareMask = calcSquareMask(x,y);
        if (maskX[x] & maskVal || maskY[y] & maskVal || maskSquare[squareMask] & maskVal) {
            return false;
        }
        maskX[x] = maskX[x] | maskVal;
        maskY[y] = maskY[y] | maskVal;
        maskSquare[squareMask] = maskSquare[squareMask] | maskVal;
        return true;
    }

    const removeMask = (x, y, val) => {
        const maskVal = maskVals[val - 1];
        const squareMask = calcSquareMask(x,y);
        maskX[x] = maskX[x] - maskVal;
        maskY[y] = maskY[y] - maskVal;
        maskSquare[squareMask] = maskSquare[squareMask] - maskVal;
    }

    const countPossibleEntries = (ind) => {
        const x = Math.floor(ind / 9);
        const y = ind % 9;
        let totalPosMask = 0;
        totalPosMask = totalPosMask | maskX[x];
        totalPosMask = totalPosMask | maskY[y];
        totalPosMask = totalPosMask | maskSquare[calcSquareMask(x,y)];
        let counter = 9;
        for (let i = 0; i < 9; i++) {
            if (maskVals[i] & totalPosMask) {
                counter --;
            }
        }
        return counter;
    }

    const inputChanged  = (event, x, y) => {
        const charCode = event.target.value.charCodeAt(0);
        if (charCode < codeOne || charCode > codeNine) {

            event.target.value = '';
        }
        sudokuGrid[realInd(x,y)] = event.target.value;

    }

    const realInd= (x, y) => {
        return 9 * x + y;
    }

    const preProcess = () => {
        //check that there are at least 17 clues
        let counter = 0;

        let x;
        let y;
        for (let i = 0; i < sudokuGrid.length; i++) {
            if (sudokuGrid[i] !== '') {
                counter ++;
                x = Math.floor(i / 9);
                y = i % 9;
                solvedGrid[i] = sudokuGrid[i];
                if (!fillMask(x, y, solvedGrid[i])) {
                    setWarningMessage('The clues do not make up a valid sudoku grid');
                    return false;
                }

            }
        }
        
        if (counter < 17) {
            setWarningMessage("Must have at least 17 clues for a unique solution");
            return false;
        }
        
       
       return true;
    }
    /*
    const verifyPossible = (ind) => {
        
        if (solvedGrid[ind] === '') {
            return true;
        }
        const x = Math.floor(ind / 9);
        const y = ind % 9;
        let val = solvedGrid[ind];
        let maskVal = maskVals[val - 1];
        console.log(maskX[x], maskY[y], maskSquare[calcSquareMask(x,y)], maskVal, x, y);
        if (maskX[x] & maskVal  || maskY[y] & maskVal || maskSquare[calcSquareMask(x, y)] & maskVal) {
            return false;
        }

        return true;
    }
    
    const verifySquare = (x, y) => {
        const cornerX = x - (x % 3);
        const cornerY = y - (y % 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if ((cornerX + i) === x && (cornerY + j) === y) {
                    continue;
                }
                if (solvedGrid[realInd(cornerX + i, cornerY + j)] === solvedGrid[realInd(x, y)]) {
                    console.log("failed square");
                    return false;
                }
            }
        }
        return true;
    }
    const verifyRow = (x, y) => {
        for (let i = 0; i < 9; i++) {
            //check row and column
            
            if (i !==x && solvedGrid[realInd(i,y)] === solvedGrid[realInd(x,y)]) {
                return false;
            }
            if (i !== y && solvedGrid[realInd(x, i)] === solvedGrid[realInd(x,y)]) {
                return false;
            }
        }
        return true;
    }*/
   
    
    const solveSudoku = () => {
        let minInd = -1;
        let minCounter = 10;
        let counter;
        for (let i = 0; i < 81; i++) {
            if (solvedGrid[i] !== '') {
                continue;
            }
            counter = countPossibleEntries(i);
            if (counter === 0) {
                console.log("counter hit 0 for some reason");
                return false;
            }
            if (counter < minCounter) {
                minCounter = counter;
                minInd = i;
            }
        }
        if (minInd === -1) {
            //all squares filled;
            return true;
        }
        const x = Math.floor(minInd / 9);
        const y = minInd % 9;

        for (let i = 1; i < 10; i++) {
            if (fillMask(x,y,i)) {
                solvedGrid[minInd] = i;
                if (solveSudoku()) {
                    return true;
                }
                removeMask(x,y,i);
            }
        }
        solvedGrid[minInd] = '';

        return false;
    }
    const solvePuzzle = () => {
        //initial start to solving the puzzle
        if (!preProcess()) {
            setLoadState(1);
            return;
        }
        //console.log(solvedGrid);
        if (loadState === 1) {
            setLoadState(2);
            setTimeout(()=>{/*
                solveSudoku(0).then((val) => {
                    if (!val) {
                        setWarningMessage("No valid solution was found");
                        setLoadState(1);
                    }else {
                        setLoadState(3);
                    }
                });*/
                const solFound = solveSudoku();
                if (solFound) {
                    setLoadState(3);
                }
                else {
                    setWarningMessage("No valid solution was found");
                    setLoadState(1);
                }
            }, 0);
        } 
        disableGrid();
    }

    const disableGrid = () => {
        const inputElements = document.getElementsByName('sudokuEntry');
        inputElements.forEach((element) => {
            element.disabled = true;
        });
    }
    const enableGrid = (clearGrid) => {
        const inputElements = document.getElementsByName('sudokuEntry');

        inputElements.forEach((element) => {
            element.disabled = false;
            if(clearGrid ) {
                element.value = '';
            }
        });
    }
    const onKeyDownEntry = (key,x,y) => {
        //left, up, right, down
        //37, 38, 39, 40
        //ArrowLeft, ArrowUp, ArrowRight, ArrowDown
        let newX = x;
        let newY = y;
        if (key === 'ArrowLeft') {
            newY -= 1;
        }
        else if (key === 'ArrowUp') {
            newX -= 1;
        }
        else if (key === 'ArrowRight') {
            newY += 1;
        }
        else if (key === 'ArrowDown') {
            newX += 1;
        }
        else {
            return;
        }
        if (newX < 0 || newY < 0 || newX > 8 || newY > 8) {
            //out of bounds
            return;
        }
        inputRef.current[realInd(newX, newY)].focus();
    }

    return (
        <>
            <SplitScreen className="_sudokuBackground" leftWidth={50}>
                <div>
                    <div className="_sudokuTitle">
                        Enter your Sudoku puzzle clues in the grid below
                    </div>
                    <div className="_entryGrid">
                        
                        {arrNine.map((value) => {
                            return(
                            <div>
                            {arrNine.map((value2) => {
                                return (
                                
                                <input ref={(el) => {inputRef.current[realInd(value - 1, value2 - 1)] = el;}} 
                                onKeyDown={(event) => {onKeyDownEntry(event.key, value - 1, value2 - 1)}} 
                                name="sudokuEntry" type="text"  maxLength={1}
                                className={`_sudokuEntryField ${value%3 === 0 ? '_pdBottom' : ""} ${value2%3 === 0 ? '_pdRight' : ""}`} 
                                onInput={(e) => inputChanged(e, value - 1, value2 - 1)}>
                                </input>);
                            })}
                            <br />
                            </ div>);
                        })}
                        <div className="_sudokuWarning">{warningMessage}</div>
                        <button onClick={solvePuzzle} >Solve Puzzle</button>
                        <button onClick={() => {refreshGrid(false)}} >Edit Puzzle</button>
                        <button onClick={() => {refreshGrid(true)}} >Refresh Puzzle</button>
                    </div>
                </div>
                <div className="_sudokuDisplaySolve">
                    { loadState === 1 &&
                        <div>Put in clues into the grid on the left, and click solve! </div> 
                    }
                    {loadState === 2 &&
                        <div className="_loader"></div>
                    }
                    {loadState === 3 &&
                        <>
                        {
                            arrNine.map((value) => {
                                return ( <div className="_sudokuDisplayRow">
                                {arrNine.map((value2) => {
                                    return (
                                        <div className={` _displayBorder _sudokuEntryField ${value%3 === 0 ? '_pdBottom' : ""} ${value2%3 === 0 ? '_pdRight' : ""}` }>
                                            {solvedGrid[realInd(value - 1, value2 - 1)]}</div>
                                    )
                                })}
                            </div>)
                            })
                        }
                        </>
                    }
                </div>
            </SplitScreen>

            <Footer href="/home#projects"/>
        </>
    );
}
//TODO:
/**
 * 1. Modify validation to use bitmask
 * 2. implement function to find square bitmask ind
 * 3. update preprocess to fill out bitmask
 * 4. when using backtracking, find the ind with the least possible options, and start there
 * 
 */

export default SudokuSolver;