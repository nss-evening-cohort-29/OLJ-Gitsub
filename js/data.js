const appData = {
    user: {
        name: "Justin Landon Ozzy",
        username: "JLO",
        bio: "Tech junkies.",
        role: "Developers",
        location: "USA",
        website: "https://github.com/nss-evening-cohort-29/OLJ-Gitsub",
        followers: "3",
        following: "3",
        stars: 1,
        avatar: "assets/images/profile-picture.png",
        highlights: [
            {
                icon: "code",
                text: "Coders"
            },
            {
                icon: "star",
                text: "Star"
            },
            {
                icon: "crown",
                text: "PRO"
            }
        ],
        organizations: [
            {
                name: "NSS",
                avatar: "assets/images/NSS-logo-horizontal-small.jpg"
            }
        ]
    },
    
    packages: [
        {
            name: "Docker",
            description: "A software platform used for building applications based on containers — small and lightweight execution environments.",
            icon: "🐳",
            type: "container",
            iconColor: "text-info",
            beta: false
        }
    ],

    pinnedRepos: [
        {
            name: "Workshop",
            description: "This workshop covers the fundamentals of developing.",
            language: "JavaScript",
            stars: 10,
            forks: 8
        },
        {
            name: "JS-Men",
            description: "We're a group of men React.JS enthusiasts in NSS.",
            language: "JavaScript",
            stars: 9,
            forks: 6
        }
    ],

    siteStats: {
        repoCount: 1,
        openProjects: 3,
        closedProjects: 0
    },

    site: {
        name: "GitSub",
        logo: "assets/images/icons8-github.svg",
        copyright: "© 2024 GitSub, Inc.",
        navigation: [
            { name: "Overview", path: "index.html" },
            { name: "Repositories", path: "repos.html" },
            { name: "Projects", path: "projects.html" },
            { name: "Packages", path: "packages.html" }
        ],
        footerLinks: [
            { name: "Terms", path: "#" },
            { name: "Privacy", path: "#" },
            { name: "Security", path: "#" },
            { name: "Status", path: "#" },
            { name: "Help", path: "#" },
            { name: "Contact GitSub", path: "#" },
            { name: "Pricing", path: "#" },
            { name: "API", path: "#" },
            { name: "Training", path: "#" },
            { name: "Blog", path: "#" },
            { name: "About", path: "#" }
        ]
    }
};
export default appData; 