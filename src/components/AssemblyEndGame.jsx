import Language from "./Language";
import { languages } from "../languages";
import React from "react";

export default function AssemblyEndGame() {
  const [currentWord, setCurrentWord] = React.useState("react");
  const word = currentWord.split("").map((letter, index) => {
    return (
      <span key={index} className="letter-box">
        {letter}
      </span>
    );
  });

  const languageChips = languages.map((chip) => {
    return (
      <Language
        key={chip.name}
        name={chip.name}
        backgroundColor={chip.backgroundColor}
        color={chip.color}
      />
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="status-section">
        <h2>You Win!</h2>
        <p>Well done 🎉</p>
      </section>
      <section className="languages-chips">{languageChips}</section>
      <section className="word-letters">{word}</section>
    </main>
  );
}
