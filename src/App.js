import { useState } from 'react';
import './App.css';


function Box( {value, onValueClick} ) {

  return <button 
  className="box"
  onClick={onValueClick}> 
  {value}
  </button>;
}

export default function App( xIsNext, squares, onPlay ) {
  
    function handleClick (i) {   
    if (squares[i] || calculateWinner(squares) ) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "A";
    } 
     else{
      nextSquares[i] = "C";
    }
      
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext); 
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }


  return (
    <>
      <div className='status'> {status} </div>
      <div className="board-row">
        <Box value={squares[0]} onValueClick={() => handleClick(0)} ></Box>
        <Box value={squares[1]} onValueClick={() => handleClick(1)}></Box>
        <Box value={squares[2]} onValueClick={() => handleClick(2)} ></Box>
      </div>

      <div className="board-row">
        <Box value={squares[3]} onValueClick={() => handleClick(3)} ></Box>
        <Box value={squares[4]} onValueClick={() => handleClick(4)} ></Box>
        <Box value={squares[5]} onValueClick={() => handleClick(5)} ></Box>
        
      </div>

      <div className="board-row">
        <Box value={squares[6]} onValueClick={() => handleClick(6)} ></Box>
        <Box value={squares[7]} onValueClick={() => handleClick(7)} ></Box>
        <Box value={squares[8]} onValueClick={() => handleClick(8)} ></Box>
        
      </div>
    </>
  );
}

  
  
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
       <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}  />   
      </div>
      <div className="game-info">
        <ol> {} </ol>
      </div>
    </div>
  );
}
  

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] 
      && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
