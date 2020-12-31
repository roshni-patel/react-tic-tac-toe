import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row ++) {
    squares.push([]);
    for (let col = 0; col < 3; col ++) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [turnNumber, setTurnNumber] = useState(0);
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState(PLAYER_1);

  const onClickCallback = (id) => {
    if (winner === null) {
    const selected = squares;
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (squares[row][col].id === id && squares[row][col].value === '') {
          squares[row][col].value = player;
          player === PLAYER_1? setPlayer(PLAYER_2) : setPlayer(PLAYER_1);
          setTurnNumber(turnNumber + 1);
        }
      }
    }
    setSquares(selected);
    setWinner(checkForWinner());

    // if turnNumber == 9 call on checkForWinner - this means all the squares are now full
  
  }
}

  const checkForWinner = () => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    const [firstRow, secondRow, thirdRow] = squares;
    const board = [ ...firstRow, ...secondRow, ...thirdRow];
    const xOPositions = [];
    
    for (let i = 0; i < winCombos.length; i++) {
      
      const position1 = board[winCombos[i][0]]
      const position2 = board[winCombos[i][1]]
      const position3 = board[winCombos[i][2]]
      xOPositions.push([position1, position2, position3])
    }

    for (let i = 0; i < xOPositions; i++) {
      if (xOPositions[i][0] === 'X' && xOPositions[i][1] === 'X' && xOPositions[i][2] === 'X') {
        setWinner(PLAYER_1)
        return PLAYER_1
      }
      else if (xOPositions[i][0] === 'O' && xOPositions[i][1] === 'O' && xOPositions[i][2] === 'O') {
        setWinner(PLAYER_2)
        return PLAYER_2
      }
    }

    setWinner(null)

  }

  const resetGame = () => {
    // Complete in Wave 4
    // I think we just call on generate squares?
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
        squares={squares} 
        onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
