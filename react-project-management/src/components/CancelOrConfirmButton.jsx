export default function Button({ isConfirm, children, ...props }) {
  const cancelBtnClasses =
    "px-6 py-2 rounded-md text-stone-900 hover:text-stone-950 hover:bg-stone-100";
  const confirmBtnClasses =
    "px-6 py-2 rounded-md bg-stone-600 text-stone-50 hover:bg-stone-950";
  return (
    <button
      className={isConfirm ? confirmBtnClasses : cancelBtnClasses}
      {...props}
    >
      {children}
    </button>
  );
}
