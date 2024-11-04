import { filterPackages, renderPackages } from './lists.js';
import appData from './data.js';

// Core utility functions
//Loads HTML components dynamically and initializes their functionality
export const loadComponent = async (elementId, componentPath) => {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        const element = document.getElementById(elementId);
        
        if (element) {
            element.innerHTML = html;

            // Footer specific setup
            if (componentPath.includes('footer')) {
                renderFooter();
            }

            // Navbar specific setup
            if (componentPath.includes('navbar')) {
                updateActiveNavLink();
                renderNavbar();
            }
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
};


// Returns an icon based on package type
export const getPackageIcon = (type) => {
    const icons = {
        container: '🐳',
        maven: '☕',
        npm: '📦',
        nuget: '🔷',
        RubyGems: '💎'
    };
    return icons[type.toLowerCase()] || '📦';
};

// Creates HTML card markup for a package item
export const createCard = (item) => {
    const icon = getPackageIcon(item.type);
    return `
        <div class="card bg-dark border-secondary mb-3">
            <div class="card-body">
                <h5 class="card-title">${icon} ${item.name}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `;
};

// Event handlers and initializers
// Initializes package search functionality
export const initializePackageSearch = () => {
    const searchInput = document.getElementById('package-search');
    const typeSelect = document.getElementById('package-type');

    if (searchInput && typeSelect) {
        // Handle search input changes
        searchInput.addEventListener('input', (e) => {
            filterPackages(e.target.value, typeSelect.value.toLowerCase());
        });

        // Handle type selection changes
        typeSelect.addEventListener('change', (e) => {
            filterPackages(searchInput.value, e.target.value.toLowerCase());
        });
    }
};

// Updates the active state of navigation links based on current page
export const updateActiveNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'pages/index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
};

// UI Component Renderers
// Renders the navigation bar stats
export const renderNavbar = () => {
    const { siteStats } = appData;
    document.querySelectorAll('.repo-count').forEach(el => {
        el.textContent = siteStats.repoCount;
    });
};

// Renders the footer content
export const renderFooter = () => {
    const { site } = appData;
    document.getElementById('copyright').textContent = site.copyright;
    
    const footerLinksContainer = document.getElementById('footerLinks');
    footerLinksContainer.innerHTML = site.footerLinks
        .map(link => `<a href="${link.path}">${link.name}</a>`)
        .join('');
};

// Renders the user profile sidebar
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

// Initialize package search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('pages/packages.html')) {
        initializePackageSearch();
    }
});