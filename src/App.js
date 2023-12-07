import { useState } from 'react';
import './App.css';


function Box( {value, onValueClick} ) {

  return <button 
  className="box"
  onClick={onValueClick}> 
  {value}
  </button>;
}

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState( Array(9).fill(null) );
  
  function handleClick (i) {    
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
  return (
    <>
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
