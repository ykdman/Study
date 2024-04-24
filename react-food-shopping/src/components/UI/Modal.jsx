import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  // Modal을 컨트롤하기 위한 Ref
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      // open 속성이 true 일 때만 Modal을 연다.
      dialog.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
