import { useState } from 'react'

import './App.css';

import Board from './components/Board';
import Score from './components/Score';

function App() {

    const WIN_CONDITIONS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const [board,setBoard] = useState(Array(9).fill(null));
    const [xPlaying,setXPlaying] = useState(true);
    const [score,setScore] = useState({xScore:0,oScore:0})

    const boxClick = (boxIndex) => {
        const updatedBoard = board.map((value,indx) => {
            if (indx === boxIndex) {
                return xPlaying === true ? 'X' : 'O';
            }else{
                return value
            }
        });

        const winner = hasWinner(updatedBoard);

        if(winner) {

            if (winner === 'X') {

                let { xScore } = score;
                xScore += 1; 
                setScore({...score,xScore});

            }else{
   
                let { oScore } = score;
                oScore += 1; 
                setScore({...score,oScore});

            }

        };

        setBoard(updatedBoard);

        setXPlaying(!xPlaying);
    };

    const hasWinner = (board) => {
        
        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
            
            const [x,y,z] = WIN_CONDITIONS[i];
            
            if(board[x] && board[x] === board[y] && board[y] === board[z]) {
                return board[x];
            }

        }
    }

    return (
        <div className="App">
            <Score score={score} xPlaying={xPlaying}/>
            <Board board={board} onClick={boxClick}/>
        </div>
    );
}

export default App;
