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
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die :
        { ...die, value: Math.ceil(Math.random() * 6) }
    }))
  };

  function hold(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } : die
    }))
  };

  // check if all dice are held
  const allHeld = dice.every(die => die.isHeld);

  // check if all dice have the same value
  const firstValue = dice[0].value;
  const allSameValue = dice.every(die => die.value === firstValue);

  // if both conditions are tue, log "game won"
  if (allHeld && allSameValue) {
    console.log("Game won!")
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );

}