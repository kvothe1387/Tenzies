import React from "react";
import Die from "./Die";


export default function App() {

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
  };

  const [dice, setDice] = React.useState(generateAllNewDice());

  function rollDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map((value, index) => (
    <Die key={index} value={value} />
  ));

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )

}