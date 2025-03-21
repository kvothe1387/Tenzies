import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import "./index.css"

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  // create the gameWon variable
  const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value);

  const diceElements = dice.map(dieObj => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  function generateAllNewDice() {
    console.log("generateAllNewDice was called!")
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  };

  function rollDice() {
    if (gameWon) {
      // reset the game with all new dice when the user has won
      setDice(generateAllNewDice())
    } else {
      // normal dice roll during gameplay
      setDice(oldDice => oldDice.map(die =>
        die.isHeld ?
          die :
          { ...die, value: Math.ceil(Math.random() * 6) }
      ))
    }
  };

  function hold(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  };

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  )
};