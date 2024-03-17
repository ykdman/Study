import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import ProjectSidebar from './components/ProjectSidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

export default function App() {
  const [projectState, setProjectState] = useState({
    // undefined = 선택한 프로젝트가 없는상태
    // null = 프로젝트 추가 하려는 상태
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        project: [...prevState.projects],
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,

        id: crypto.randomUUID(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);
  // Project 관련 페이지 설정
  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        cancleAddProject={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartProject}
        projects={projectState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}
