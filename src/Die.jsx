import React from "react"

export default function Die(props) {
  // Add styles based on the isHeld property
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <button
      className="die"
      style={styles}
    >
      {props.value}
    </button>
  );
}