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
  const [player, setPlayer] = useState(PLAYER_1);

  const onClickCallback = (id) => {
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

    // if turnNumber == 9 call on checkForWinner - this means all the squares are now full
  
  }

  const checkForWinner = () => {
    // these are all the ways you can win at tic-tac-toe (https://forum.freecodecamp.org/t/logic-for-tic-tac-toe-win/171590)
    const winCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
// maybe not nested? maybe just check that all three values of the row are either all X or all O?
    for (let row = 0; row < winCombos.length; row++) {
      for (let col = 0; col < 3; col++) {
        //psuedocode 
        // if (winCombos[row][col] == "X" for all three values in the row) {then X won}
        // else if (winCombos[row][col] == "O" for all three columns in the row) {then O won} 
        // else it's a draw, no one won
      }
    }

  }

  const resetGame = () => {
    // Complete in Wave 4
    // I think we just call on generate squares?
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
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
