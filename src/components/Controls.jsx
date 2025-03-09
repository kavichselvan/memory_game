import React from "react";
import "../styles/Controls.css";

const Controls = ({ setGridSize, gridSize, startGame, isGameStarted, endGame }) => {
  return (
    <div className="controls">
      <label>Grid Size:</label>
      <select value={gridSize} onChange={(e) => setGridSize(parseInt(e.target.value))}>
        <option value={4}>4x4</option>
        <option value={6}>6x6</option>
        <option value={8}>8x8</option>
      </select>
      
      <button onClick={startGame} className="restart-button">
        {isGameStarted ? "Restart Game" : "Start Game"}
      </button>
      <button onClick={endGame} className="end-button">End Game</button>
    </div>
  );
};

export default Controls;
