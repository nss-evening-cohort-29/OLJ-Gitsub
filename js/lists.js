import appData from './data.js';
import { getPackageIcon } from './utils.js';

let filteredPackages = [];

export const filterPackages = (searchTerm = '', type = 'all') => {
    filteredPackages = appData.packages.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = type.toLowerCase() === 'all' || pkg.type.toLowerCase() === type.toLowerCase();
        return matchesSearch && matchesType;
    });
    renderPackages();
};


export const renderPackages = () => {
    const container = document.getElementById('content');
    const packagesToRender = filteredPackages.length > 0 ? filteredPackages : appData.packages;
    
    const packagesHTML = packagesToRender
        .map(pkg => `
            <div class="col-md-6 mb-4">
                <div class="card h-100 bg-dark border-secondary">
                    <div class="card-body">
                        <h3 class="h5 mb-1">
                            <a href="#" class="text-primary text-decoration-none">
                                ${getPackageIcon(pkg.type)} ${pkg.name}
                            </a>
                        </h3>
                        <p class="text-secondary mb-3">${pkg.description}</p>
                        <div class="d-flex align-items-center">
                            <span class="badge bg-secondary me-2">${pkg.type}</span>
                        </div>
                    </div>
                </div>
            </div>
        `)
        .join('');
    
    container.innerHTML = packagesToRender.length > 0 ? `
        <div class="row">
            ${packagesHTML}
        </div>
    ` : `
        <div class="text-center py-5">
            <i class="fas fa-box fa-3x mb-3 text-secondary"></i>
            <h3>No packages found</h3>
            <p class="text-secondary">Try adjusting your search or filter criteria</p>
        </div>
    `;
};

export const renderRepositories = () => {
    const reposContainer = document.getElementById('currentRepos');
    const repoCountSpan = document.getElementById('repoCountSpan');
    
    // Update repo count display
    if (repoCountSpan) {
        repoCountSpan.textContent = `(${appData.repositories.length})`;
    }
    
    let domString = "";
    appData.repositories.forEach(repo => {
        domString += `<div class="col-md-12 mb-4">
                <div class="card h-100 bg-dark border-secondary">
                    <div class="card-body">
                        <h3 class="h5 mb-1">
                            <a href="#" class="text-primary text-decoration-none">${repo.repoTitle}</a>
                        </h3>
                        <p class="text-secondary mb-3">${repo.repoDescription}</p>
                    </div>
                </div>
            </div>`
    });
    reposContainer.innerHTML = domString;
}

export const renderProjects = () => {
    const container = document.getElementById('projects');
    let domString = "";
    appData.projects.forEach(project => {
        domString += `<div class="col-md-6 mb-4">
                <div class="card h-100 bg-dark border-secondary">
                    <div class="card-body">
                        <h3 class="h5 mb-1">
                            <a href="#" class="text-primary text-decoration-none">${project.title}</a>
                        </h3>
                        <p class="text-secondary mb-3">${project.description}</p>
                    </div>
                </div>
            </div>`
    });
    container.innerHTML = domString;
}

// Add pinned repos rendering
export const renderPinnedRepos = () => {
    const container = document.getElementById('pinnedRepos');
    if (!container) return;

    const pinnedReposHTML = appData.pinnedRepos
        .map(repo => `
            <div class="col-md-6 mb-4">
                <div class="card h-100 bg-dark border-secondary">
                    <div class="card-body">
                        <h3 class="h5 mb-1">
                            <a href="#" class="text-primary text-decoration-none">${repo.name}</a>
                        </h3>
                        <p class="text-secondary mb-3">${repo.description}</p>
                        <div class="d-flex align-items-center">
                            <span class="me-3">
                                <span class="text-white">${repo.language}</span>
                            </span>
                            <span class="me-3">
                                <span class="text-white">⭐${repo.stars}</span>
                            </span>
                            <span class="me-3">
                                <span class="text-white">🔱 ${repo.forks}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `)
        .join('');
    
    container.innerHTML = pinnedReposHTML;
};

// Initialize list based on current page
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('pages/packages.html')) {
        renderPackages();
    } else if (path.includes('pages/repos.html')) {
        renderRepositories();
    } else if (path.includes('pages/projects.html')) {
        renderProjects();
    } else {
        // Overview page (index.html)
        renderPinnedRepos();
    }
});
