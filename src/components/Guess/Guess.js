import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer, setStatus, guessesLeft }) {
  const guessStatus = checkGuess(guess, answer);
  let correctLetters = 0;

  if (guess) {
    for (let i = 0; i < 5; i++) {
      if (guessStatus[i].status === "correct") {
        correctLetters++;
      } else break;
    }
  }

  if (correctLetters === 5) {
    setStatus("won");
  }

  if (guessesLeft === 0 && correctLetters < 5) {
    setStatus("lost");
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guessStatus ? guessStatus[num].letter : undefined}
          status={guessStatus ? guessStatus[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
