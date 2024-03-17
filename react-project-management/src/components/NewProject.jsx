import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, cancleAddProject }) {
  const cancelBtnClasses =
    'px-6 py-2 rounded-md text-stone-900 hover:text-stone-950 hover:bg-stone-100';

  const confirmBtnClasses =
    'px-6 py-2 rounded-md bg-stone-600 text-stone-50 hover:bg-stone-950';

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // ...validation
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="font-bold text-xl text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">you forgot to enter some value</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={cancleAddProject} className={cancelBtnClasses}>Cancel</button>
          </li>
          <li>
            <button onClick={handleSave} className={confirmBtnClasses}>
              Confirm
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title"></Input>
          <Input label="Description" ref={descriptionRef} isTextArea></Input>
          <Input type="date" label="Due Date" ref={dueDateRef}></Input>
        </div>
      </div>
    </>
  );
}
