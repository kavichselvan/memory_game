import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import Board from "./components/Board";
import Controls from "./components/Controls";
import "./styles/App.css";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gridSize, setGridSize] = useState(4);
  const [gameKey, setGameKey] = useState(0);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  // Timer Logic
  useEffect(() => {
    let interval;
    if (isGameStarted && !isGameWon) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameStarted, isGameWon]);

  const startGame = () => {
    setIsGameStarted(true);
    setGameKey((prev) => prev + 1);
    setMoves(0);
    setMatches(0);
    setTimer(0);
    setIsGameWon(false);
  };

  const endGame = () => {
    setIsGameStarted(false);
    setTimer(0);
  };

  return (
    <div className="app">
      {!isGameStarted ? (
        <StartScreen startGame={startGame} />
      ) : isGameWon ? (
        <div className="win-screen">
          <h1>🎉 You Won! 🎉</h1>
          <p>Time Taken: {timer} seconds</p>
          <p>Total Moves: {moves}</p>
          <button onClick={startGame}>Play Again</button>
          <button onClick={endGame}>Exit</button>
        </div>
      ) : (
        <>
          <h1>Memory Game</h1>
          <Controls 
            setGridSize={setGridSize} 
            gridSize={gridSize} 
            startGame={startGame}
            isGameStarted={isGameStarted} 
            endGame={endGame}
          />
          <h2>Moves: {moves} | Matches: {matches} | Time: {timer}s</h2>
          <Board key={gameKey} gridSize={gridSize} moves={moves} setMoves={setMoves} matches={matches} setMatches={setMatches} setIsGameWon={setIsGameWon} />
        </>
      )}
    </div>
  );
};

export default App;
