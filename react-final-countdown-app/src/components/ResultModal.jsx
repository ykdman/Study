import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRamainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The Target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with{' '}
        <strong>{formattedRamainingTime} seconds Left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Cancel</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
