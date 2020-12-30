import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
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
    const selected = [...squares];
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (squares[row][col].id === id && squares[row][col].value === '') {
          squares[row][col].value = player;
    // why won't this work? 
    // setPlayer(!player); instead:

        player === PLAYER_1? setPlayer(PLAYER_2) : setPlayer(PLAYER_1)
          // changed below to ternary
          // if (player === PLAYER_1) {
          //   setPlayer(PLAYER_2)}
          //   else {
          //     setPlayer(PLAYER_1)
          //   }; 
          setTurnNumber(turnNumber + 1);
        }
      }
    }


    setSquares(selected);
  
  }

  // return if won or occupied https://www.youtube.com/watch?v=08r9mDQvXpU:
    //if (winner || squares[i]) return;
    //select square:
    // squares[i] = xO

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  }

  const resetGame = () => {
    // Complete in Wave 4
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
