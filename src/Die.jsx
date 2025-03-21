import React from "react"

export default function Die(props) {
  // Add styles based on the isHeld property
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  };

  return (
    <button
      style={styles}
      onClick={props.hold}
      aria-label={`Die with value ${props.value}, 
        ${props.isHeld ? "held" : "not held"}`}
    >{props.value}</button>
  )
};