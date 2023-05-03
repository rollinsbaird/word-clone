import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const guessStatus = checkGuess(guess, answer);

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
