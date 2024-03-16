import SideButton from "./SideButton.jsx";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <SideButton onClick={onStartAddProject}>+ Add Project</SideButton>
      </div>
      <ul>...</ul>
    </aside>
  );
}
