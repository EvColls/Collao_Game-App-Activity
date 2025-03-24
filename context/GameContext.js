import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playRound = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a tie!";

    const winConditions = {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    };

    if (winConditions[userChoice] === computerChoice) {
      setUserScore((prev) => prev + 1);
      return "You win!";
    } else {
      setComputerScore((prev) => prev + 1);
      return "Computer wins!";
    }
  };

  return (
    <GameContext.Provider value={{ userScore, computerScore, playRound }}>
      {children}
    </GameContext.Provider>
  );
};
