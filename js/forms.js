// projectname.value
// projectDescription.value

import appData from "./data.js";
import { renderProjects, renderPackages, renderPinnedRepos, renderRepositories } from "./lists.js";

const projectFormSubmit = document.getElementById('createProject');

const newProject = (e) => {
  e.preventDefault();
  const newProject = {
    id: appData.projects.length + 1,
    title: document.querySelector("#projectTitle").value,
    description: document.querySelector("#projectDescription").value
  };
  appData.projects.push(newProject);
  renderProjects();
  projectFormSubmit.reset();
};

projectFormSubmit.addEventListener('submit', newProject);


const reposFormSubmit = document.getElementById('CreateRepoForm');

const newRepository = (e) => {
  e.preventDefault();
  const newRepositoryObj = {
    repoID: appData.repositories.length + 1,
    repoTitle: document.querySelector("#repoName").value,
    repoDescription: document.querySelector("#repoDescription").value
  };
  appData.repositories.push(newRepositoryObj);
  renderRepositories();
  reposFormSubmit.reset();
};

reposFormSubmit.addEventListener('submit', newRepository);
