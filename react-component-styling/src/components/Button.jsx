export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase text-stone-900 rounded bg-amber-400 hover:bg-amber-900"
      {...props}
    >
      {children}
    </button>
  );
}
