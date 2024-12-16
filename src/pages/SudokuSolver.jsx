import React,{useEffect, useState} from 'react';
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
    const regex = new RegExp('[1-9]');

    useEffect(() => {
        refreshGrid();
        setLoadState(1);
    },[]);

    const refreshGrid = () => {
        const newGrid = new Array(81);
        const newSolvedGrid = new Array(81);
        for (let i = 0; i < 81; i++) {
            newGrid[i] = '';
            newSolvedGrid[i] = '';
        }
        setSolvedGrid(newSolvedGrid);
        setSudokuGrid(newGrid);
        setLoadState(1);
        enableGrid();
        setWarningMessage('');
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
        const filledSquares = [];
        for (let i = 0; i < sudokuGrid.length; i++) {
            if (sudokuGrid[i] !== '') {
                counter ++;
                solvedGrid[i] = sudokuGrid[i];
                filledSquares.push(i);
            }
        }
        /*
        if (counter < 17) {
            setWarningMessage("Must have at least 17 clues for a unique solution");
            return false;
        }*/
        for (let i = 0; i < counter; i++) {
            if (!verifyPossible(filledSquares[i])) {
                setWarningMessage('The clues do not make up a valid sudoku grid');
                return false;
            }
        }
       
       return true;
    }

    const verifyPossible = (ind) => {
        
        if (!sudokuGrid[ind] === '') {
            return true;
        }
        const x = Math.floor(ind / 9);
        const y = ind % 9;
        if (!verifySquare(x, y)) {
            return false;
        }
        if (!verifyRow(x,y)) {
            return false;
        }

        return true;
    }
    const verifySquare = (x, y) => {
        const cornerX = x - (x % 3);
        const cornerY = y - (y % 3);
    }
    const verifyRow = () => {

    }
    const backtrackSudoku = async () => {

    }
    const solveSudoku = async () => {
        if (!preProcess()) {
            return;
        }

        for (let i = 0; i < solvedGrid.length; i++) {
            solvedGrid[i] = "1";
        }


        setLoadState(3);
    }
    const solvePuzzle = () => {
        //initial start to solving the puzzle
        
        if (loadState === 1) {
            setLoadState(2);
            solveSudoku();
        } 
        disableGrid();
    }
    const disableGrid = () => {
        const inputElements = document.getElementsByName('sudokuEntry');
        inputElements.forEach((element) => {
            element.disabled = true;
        });
    }
    const enableGrid = () => {
        const inputElements = document.getElementsByName('sudokuEntry');

        inputElements.forEach((element) => {
            element.disabled = false;
            element.value = '';
        });
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
                                
                                <input name="sudokuEntry" type="text"  maxLength={1}
                                className={`_sudokuEntryField ${value%3 === 0 ? '_pdBottom' : ""} ${value2%3 === 0 ? '_pdRight' : ""}`} 
                                onInput={(e) => inputChanged(e, value - 1, value2 - 1)}>
                                </input>);
                            })}
                            <br />
                            </ div>);
                        })}
                        <div className="_sudokuWarning">{warningMessage}</div>
                        <button onClick={solvePuzzle} >Solve Puzzle</button>
                        <button onClick={refreshGrid} >Refresh Puzzle</button>
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
                                        <div className={` _displayBorder _sudokuEntryField ${value%3 === 0 ? '_pdBottom' : ""} ${value2%3 === 0 ? '_pdRight' : ""}` }>{solvedGrid[realInd(value - 1, value2 - 1)]}</div>
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


export default SudokuSolver;