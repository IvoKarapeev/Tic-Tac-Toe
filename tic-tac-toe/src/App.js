import { useState } from 'react'

import './App.css';
import Board from './components/Board';

function App() {

    const [board,setBoard] = useState(Array(9).fill(null));
    const [xPlaying,setXPlaying] = useState(true);

    const boxClick = (boxIndex) => {
        const updatedBoard = board.map((value,indx) => {
            if (indx === boxIndex) {
                return xPlaying === true ? 'X' : 'O';
            }else{
                return value
            }
        });


        setBoard(updatedBoard);

        setXPlaying(!xPlaying);
    }


    return (
        <div className="App">
            <Board board={board} onClick={boxClick}/>
        </div>
    );
}

export default App;
