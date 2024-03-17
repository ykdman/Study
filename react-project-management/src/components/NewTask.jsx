import { useState } from "react";

export default function NewTask({ onAdd, onDelete }) {
  const [enterdTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddBtn() {
    onAdd(enterdTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-stone-700"
        onChange={handleChange}
        value={enterdTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddBtn}
      >
        Add Task
      </button>
    </div>
  );
}
