import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function onGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        numGuesses={guesses.length}
        setStatus={setStatus}
      />
      <GuessInput
        onGuess={onGuess}
        status={status}
        numGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
