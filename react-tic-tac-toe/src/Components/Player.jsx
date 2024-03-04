import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function setEditingState() {
    //이전 state의 값을 참조하여 변환시의 정석 !
    setIsEditing((editing) => !editing);
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let playerNameEl = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerNameEl = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangeName}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameEl}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={setEditingState}>{btnCaption}</button>
    </li>
  );
}
