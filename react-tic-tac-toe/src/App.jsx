import { useState } from "react";

import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    // player state
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    // turn state
    setGameTurns((prevGameTurn) => {
      let currentPlayer = "X";
      if (prevGameTurn.length > 0 && prevGameTurn[0].player === "X") {
        currentPlayer = "O";
      }

      const updateGameTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurn,
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}
