import React from "react";
import "../styles/StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start-screen">
      <h1 className="game-title">Memory Match Game</h1>
      <p className="subtitle">Test your memory skills! Flip and match the cards.</p>

      <div className="button-container">
        <button className="start-button" onClick={startGame}>Start Game</button>
      </div>

      <div className="instructions">
        <h3>How to Play:</h3>
        <ul>
          <li>🃏 Flip two cards at a time.</li>
          <li>✅ Match all pairs to win.</li>
          <li>⏳ Try to finish as fast as possible.</li>
        </ul>
      </div>
    </div>
  );
};

export default StartScreen;
