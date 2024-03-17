import SideButton from "./SideButton.jsx";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <SideButton onClick={onStartAddProject}>+ Add Project</SideButton>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let buttonClasses =
            "w-full text-left px-2 py-1 rounded-sm  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            buttonClasses += " bg-stone-800 text-stone-200";
          } else {
            buttonClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={buttonClasses}
                onClick={() => onSelect(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
