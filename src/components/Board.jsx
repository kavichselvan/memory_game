import React, { useState, useEffect } from "react";
import "../styles/Board.css";

const symbols = [
  "🍎", "🍌", "🍇", "🍉", "🍒", "🥝", "🍍", "🥥", "🍊", "🍓", "🥑", "🍋", 
  "🍈", "🥕", "🌽", "🍆", "🍔", "🍕", "🍩", "🍪", "🍫", "🥨", "🧀", "🍗", 
  "🥩", "🍣", "🍤", "🥗", "🥖", "🍞", "🥐", "🥓"
];

// Function to shuffle cards
const shuffleCards = (size) => {
  const totalPairs = (size * size) / 2;
  const selectedSymbols = symbols.slice(0, totalPairs);
  const shuffled = [...selectedSymbols, ...selectedSymbols]
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
      isMatched: false,
    }));
  return shuffled;
};

const Board = ({ gridSize, setIsGameWon, moves, setMoves, matches, setMatches }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  // Initialize board
  useEffect(() => {
    setCards(shuffleCards(gridSize));
    setMoves(0);
    setMatches(0);
  }, [gridSize, setMoves, setMatches]);

  // Check if all cards are matched (Win Condition)
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setIsGameWon(true);  // ✅ This will trigger the win screen in App.jsx
    }
  }, [cards, setIsGameWon]);

  const handleCardClick = (index) => {
    if (cards[index].isFlipped || flippedCards.length === 2) return;

    const newCards = cards.map((card, i) =>
      i === index ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setFlippedCards([...flippedCards, index]);
    setMoves((prev) => prev + 1);

    if (flippedCards.length === 1) {
      setTimeout(() => checkMatch(flippedCards[0], index), 600);
    }
  };

  const checkMatch = (firstIndex, secondIndex) => {
    if (cards[firstIndex].symbol === cards[secondIndex].symbol) {
      setCards((prev) =>
        prev.map((card, i) =>
          i === firstIndex || i === secondIndex ? { ...card, isMatched: true } : card
        )
      );
      setMatches((prev) => prev + 1);
    } else {
      setCards((prev) =>
        prev.map((card, i) =>
          i === firstIndex || i === secondIndex ? { ...card, isFlipped: false } : card
        )
      );
    }
    setFlippedCards([]);
  };

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
          onClick={() => handleCardClick(index)}
        >
          {card.isFlipped || card.isMatched ? card.symbol : "❓"}
        </div>
      ))}
    </div>
  );
};

export default Board;
