import React from "react";
import "../styles/WinningScreen.css";

const WinningScreen = ({ restartGame, moves, time }) => {
  return (
    <div className="winning-screen">
      <h1>🎉 Congratulations! 🎉</h1>
      <p>You completed the game!</p>
      <p><strong>Moves Taken:</strong> {moves}</p>
      <p><strong>Time Taken:</strong> {time} seconds</p>

      <button className="restart-button" onClick={restartGame}>Play Again</button>
    </div>
  );
};

export default WinningScreen;
