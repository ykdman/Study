import { useState } from "react";

import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import GameOver from "./Components/Gameover";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function decisionWinner(curGameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      curGameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      curGameBoard[combination[1].row][combination[1].column];
    const thridSquareSymbol =
      curGameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thridSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
    return winner;
  }
}

export default function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = getActivePlayer(gameTurns);

  let curGameBoard = [...initialGameBoard.map((array) => [...array])]; //완전 깊은 복사
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    curGameBoard[row][col] = player;
  }

  //game 종료
  const winner = decisionWinner(curGameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

  //state 변경 함수
  function handleSelectSquare(rowIndex, colIndex) {
    // player state
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    // turn state
    setGameTurns((prevGameTurn) => {
      let currentPlayer = getActivePlayer(prevGameTurn);

      const updateGameTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurn,
      ];
      return updateGameTurn;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
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
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard board={curGameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
