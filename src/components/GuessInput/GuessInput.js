import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.info({ guess });
          event.target.reset();
          setGuess("");
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          defaultValue={""}
          maxLength={5}
          minLength={5}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
