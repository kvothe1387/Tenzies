import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  };

  const [dice, setDice] = React.useState(generateAllNewDice());

  function rollDice() {
    setDice(generateAllNewDice())
  };

  function hold(id) {
    console.log(id)
  };

  const diceElements = dice.map(dieObj => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );

}