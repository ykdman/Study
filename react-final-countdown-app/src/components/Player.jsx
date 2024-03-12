import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  function handleNameChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
