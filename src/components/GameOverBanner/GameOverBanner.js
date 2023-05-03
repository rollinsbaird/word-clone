import React from "react";

function GameOverBanner({ status, numGuesses, answer }) {
  return status === "won" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numGuesses} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameOverBanner;
