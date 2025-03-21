import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid()
      }))
  };

  const [dice, setDice] = React.useState(generateAllNewDice());

  function rollDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map((die, index) => (
    <Die
      key={index}
      value={die.value}
      isHeld={die.isHeld}
    />
  ))

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )

}