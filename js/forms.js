// projectname.value
// projectDescription.value

import appData from "./data.js";
import { renderProjects, renderPackages, renderPinnedRepos, renderRepositories } from "./lists.js";

const projectFormSubmit = document.getElementById('createProject');
const pinnedReposFormSubmit = document.getElementById('pinnedRepoForm');

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

const newPinnedRepo = (e) => {
  e.preventDefault();
  const newPinnedRepo = {
    id: appData.pinnedRepos.length + 1,
    name: document.querySelector("#repoName").value,
    description: document.querySelector("#repoDescription").value,
    language: document.querySelector("#repoLanguage").value,
    stars: parseInt(document.querySelector("#repoStars").value, 10),
    forks: parseInt(document.querySelector("#repoForks").value, 10)
  };
  appData.pinnedRepos.push(newPinnedRepo);
  renderPinnedRepos();
  pinnedReposFormSubmit.reset();
}

pinnedReposFormSubmit.addEventListener('submit', newPinnedRepo);
projectFormSubmit.addEventListener('submit', newProject);
