const appData = {
    user: {
        name: "Justin Landon Ozzy",
        username: "JLO",
        bio: "Tech junkies.",
        role: "Developers",
        location: "USA",
        website: "https://github.com/nss-evening-cohort-29/OLJ-Gitsub",
        followers: "30",
        following: "3",
        stars: 123,
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

    repositories: [
        {repoID: 1, 
            repoTitle : "Sorting Hat", 
            repoDescription: "tbd", 
            repoTags : [
                {tag: "blah"},
                {tag: "blah"},
                {tag: "blah"}
            ],
            repoType: "JavaScript", 
            stars: 6, 
            branchMerges: 17, 
            issues: "2 issues needs help",
            lastUpdated: "Updated 4 days ago"
        },
        {repoID: 2, 
            repoTitle : "Random Repo", 
            repoDescription: "tbd", 
            repoTags : [
                {tag: "blah"},
                {tag: "blah"},
                {tag: "blah"}
            ],
            repoType: "JavaScript", 
            stars: 6, 
            branchMerges: 17, 
            issues: "9 issues needs help",
            lastUpdated: "Updated 1 day ago"
        },
        {repoID: 3, 
            repoTitle : "Calculator", 
            repoDescription: "tbd", 
            repoTags : [
                {tag: "blah"},
                {tag: "blah"},
                {tag: "blah"}
            ],
            repoType: "JavaScript", 
            stars: 6, 
            branchMerges: 17,  
            // issues: "0 issues needs help",
            lastUpdated: "Updated 68 days ago"
        },
        {repoID: 4, 
            repoTitle : "test-repo", 
            repoDescription: "tbd", 
            repoTags : [
                {tag: "blah"},
                {tag: "blah"},
                {tag: "blah"}
            ],
            repoType: "JavaScript", 
            stars: 6, 
            branchMerges: 17,  
            // issues: "0 issues needs help",
            lastUpdated: "Updated 137 days ago"
        },
    ],

    projects: [
        {
            id: 1,
            title: "Super Cool Project",
            description: "Wow look how amazing this project is, whoever made this must be really fun to hang out with."
        },
        {
            id: 2,
            title: "Amazing Project",
            description: "This project is amazing!"
        },
        {
            id: 3,
            title: "The Best Project",
            description: "This project is the best!"
        },
        {
            id: 4,
            title: "The REAL Best Project",
            description: "This project is actually the best. Don't listen to what the other one says."
        }
    ],
     
    packages: [
        {
            id: 1,
            name: "Docker",
            description: "A software platform used for building applications based on containers.",
            type: "container",
        },
        {
            id: 2,
            name: "Apache Maven",
            description: "A default package manager used for the Java programming.",
            type: "maven",
        },
        {
            id: 3,
            name: "NuGet",
            description: "A open source package manager used for the Microsoft development platform (.NET)",
            type: "nuget",
        },
        {
            id: 4,
            name: "RubyGems",
            description: "A standard format for distributing Ruby programs.",
            type: "RubyGems",
        }
    ],

    pinnedRepos: [
        {
            id: 1,
            name: "Workshop",
            description: "This workshop covers the fundamentals of developing.",
            language: "JavaScript",
            stars: 10,
            forks: 8
        },
        {
            id: 2,
            name: "JS-Men",
            description: "We're a group of men React.JS enthusiasts in NSS.",
            language: "JavaScript",
            stars: 9,
            forks: 6
        },
        {
            id: 3,
            name: "GitSub",
            description: "A simple, clean, and fast GitSub.",
            language: "JavaScript, HTML, CSS",
            stars: 9,
            forks: 6
        }
    ],

    siteStats: {
        repoCount: 4
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
