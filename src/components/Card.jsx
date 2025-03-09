import React from "react";
import "../styles/Card.css";

const Card = ({ card, onClick }) => (
  <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={onClick}>
    <div className="card-inner">
      <div className="card-front">❓</div>
      <div className="card-back">{card.symbol}</div>
    </div>
  </div>
);

export default Card;
