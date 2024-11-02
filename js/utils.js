import { filterPackages, renderPackages } from './lists.js';
import appData from './data.js';

export const formatNumber = (num) => {
    if (num >= 1000) {
        return (num/1000).toFixed(1) + 'k';
    }
    return num.toString();
};

export const createCard = (item) => {
    return `
        <div class="card bg-dark border-secondary mb-3">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `;
};

export const initializePackageSearch = () => {
    const searchInput = document.querySelector('[aria-label="Search packages"]');
    const typeSelect = document.querySelector('[aria-label="Package type"]');

    if (searchInput && typeSelect) {
        searchInput.addEventListener('input', (e) => {
            filterPackages(e.target.value, typeSelect.value.toLowerCase());
        });

        typeSelect.addEventListener('change', (e) => {
            filterPackages(searchInput.value, e.target.value.toLowerCase());
        });
    }
};

export const handlePackageAction = (packageName, action) => {
    switch (action) {
        case 'delete':
            if (confirm(`Are you sure you want to delete ${packageName}?`)) {
                appData.packages = appData.packages.filter(pkg => pkg.name !== packageName);
                renderPackages();
            }
            break;
        // Add more actions as needed
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('packages.html')) {
        initializePackageSearch();
    }
});

// Add these functions to utils.js
export const loadComponent = async (elementId, componentPath) => {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        if (componentPath.includes('navbar')) {
            updateActiveNavLink();
            renderNavbar();
        } else if (componentPath.includes('footer')) {
            renderFooter();
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
};

export const updateActiveNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
};

// Add this function to utils.js
export const renderProfile = () => {
    const profileContainer = document.getElementById('profileSidebar');
    const { user } = appData;

    profileContainer.innerHTML = `
        <div class="profile-header">
            <img src="${user.avatar}" alt="Profile" class="profile-pic">
            <h2 class="h4 mb-2">${user.name}</h2>
            <p class="text-secondary mb-3">${user.username}</p>
            <p class="mb-3">${user.bio}</p>
            <p class="mb-3">${user.role}</p>
        </div>
        
        <div class="d-grid gap-2 mb-3">
            <button class="btn btn-outline-light">Follow</button>
            <button class="btn btn-outline-danger">❤ Sponsor</button>
            <button class="btn btn-outline-secondary">...</button>
        </div>
        
        <div class="profile-stats mb-3">
            <i class="fas fa-users"></i> <strong>${user.followers}</strong> followers · 
            <strong>${user.following}</strong> following · <strong>${user.stars}</strong> ⭐
        </div>
        
        <div class="profile-info mb-4">
            <p><i class="fas fa-map-marker-alt"></i> ${user.location}</p>
            <p><i class="fas fa-link"></i> <a href="${user.website}">${user.website}</a></p>
        </div>

        <div class="highlights-section mb-4">
            <h3 class="h6 mb-2">Highlights</h3>
            ${user.highlights.map(highlight => `
                <div class="highlight-item">
                    <i class="fas fa-${highlight.icon}"></i> ${highlight.text}
                </div>
            `).join('')}
        </div>

        <div class="organizations-section">
            <h3 class="h6 mb-2">Organizations</h3>
            <div class="d-flex flex-wrap gap-2">
                ${user.organizations.map(org => `
                    <img src="${org.avatar}" alt="${org.name}" class="org-avatar">
                `).join('')}
            </div>
        </div>
    `;
};



// Add this function
export const renderNavbar = () => {
    const { siteStats } = appData;
    document.querySelectorAll('.repo-count').forEach(el => {
        el.textContent = siteStats.repoCount;
    });
};

// Add these functions
export const renderFooter = () => {
    const { site } = appData;
    document.getElementById('copyright').textContent = site.copyright;
    
    const footerLinksContainer = document.getElementById('footerLinks');
    footerLinksContainer.innerHTML = site.footerLinks
        .map(link => `<a href="${link.path}">${link.name}</a>`)
        .join('');
};