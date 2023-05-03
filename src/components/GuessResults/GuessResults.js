import React from "react";

import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses, answer, numGuesses, setStatus }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          guess={guesses[num]}
          answer={answer}
          setStatus={setStatus}
          guessesLeft={NUM_OF_GUESSES_ALLOWED - numGuesses}
        />
      ))}
    </div>
  );
}

export default GuessResults;
