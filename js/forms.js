// projectname.value
// projectDescription.value

import appData from "./data";
import { renderProjects } from "./lists";

const projectFormSubmit = document.getElementById('createProject');

const createProject = (e) => {
  e.preventDefault();
  const newProject = {
    id: appData.projects.length + 1,
    title: document.querySelector("#projectTitle").value,
    description: document.querySelector("#projectDescription").value
  };
  appData.projects.push(newProject);
  console.log(appData.projects);
  renderProjects();
};

projectFormSubmit.addEventListener('submit', createProject);
