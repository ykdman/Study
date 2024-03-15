import { useRef, useState } from 'react';

export default function Player() {
  const currentPlayerName = useRef();
  const [playerName, setPlayerName] = useState('');

  function handleClick() {
    console.log(currentPlayerName.current.value);
    setPlayerName(currentPlayerName.current.value);
    currentPlayerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={currentPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
