import noProjectImage from "../assets/no-projects.png";
import SideButton from "./SideButton.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Selected Project or get Started with a new one
      </p>
      <p className="mt-8">
        <SideButton onClick={onStartAddProject}>Create New Project</SideButton>
      </p>
    </div>
  );
}
