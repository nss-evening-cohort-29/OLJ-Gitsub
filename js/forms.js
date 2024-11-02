// projectname.value
// projectDescription.value

import appData from "./data";

const projectFormSubmit = document.getElementById('#createProject');
projectFormSubmit.addEventListener('submit', () => {
  const newProject = {
    id: appData.projects.length + 1,
    title: document.querySelector('#projectTitle').value,
    description: document.querySelector('#projectDescription').value
  }
  appData.projects.push(newProject);
});
