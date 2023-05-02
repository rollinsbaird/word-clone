import React from "react";

function GuessInput({ onGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          onGuess(guess);
          setGuess("");
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          type="text"
          id="guess-input"
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
