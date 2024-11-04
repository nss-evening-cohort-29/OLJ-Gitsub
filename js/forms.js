import appData from "./data.js";
import { renderProjects, renderPackages, renderPinnedRepos, renderRepositories } from "./lists.js";

// Form submit handlers
const newProject = (e) => {
  e.preventDefault();
  const newProject = {
    id: appData.projects.length + 1,
    title: document.querySelector("#projectTitle").value,
    description: document.querySelector("#projectDescription").value
  };
  appData.projects.push(newProject);
  renderProjects();
  e.target.reset();
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
  e.target.reset();
};

const newRepository = (e) => {
  e.preventDefault();
  const newRepositoryObj = {
    repoID: appData.repositories.length + 1,
    repoTitle: document.querySelector("#repoName").value,
    repoDescription: document.querySelector("#repoDescription").value
  };
  appData.repositories.push(newRepositoryObj);
  renderRepositories();
  e.target.reset();
};

const newPackage = (e) => {
  e.preventDefault();
  const newPackage = {
    id: appData.packages.length + 1,
    name: document.querySelector("#packageName").value,
    description: document.querySelector("#packageDescription").value,
    type: document.querySelector("#packageType").value,
    iconColor: "text-primary"
  };
  appData.packages.push(newPackage);
  renderPackages();
  e.target.reset();
};

// Add event listeners only if the elements exist
document.addEventListener('DOMContentLoaded', () => {
  // Project form
  const projectForm = document.getElementById('createProject');
  if (projectForm) {
    projectForm.addEventListener('submit', newProject);
  }

  // Pinned repo form
  const pinnedRepoForm = document.getElementById('pinnedRepoForm');
  if (pinnedRepoForm) {
    pinnedRepoForm.addEventListener('submit', newPinnedRepo);
  }

  // Repository form
  const repoForm = document.getElementById('CreateRepoForm');
  if (repoForm) {
    repoForm.addEventListener('submit', newRepository);
  }

  // Package form
  const packageForm = document.getElementById('createPackage');
  if (packageForm) {
    packageForm.addEventListener('submit', newPackage);
  }
});
