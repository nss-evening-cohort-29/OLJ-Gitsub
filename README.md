# GITSUB 

ERD: https://dbdiagram.io/d/GitSub-OJL-6705c146fb079c7ebdcbd8e6

Wireframe: https://www.figma.com/design/8vIX1yEXd2UxdWARbWqAje/GitSub?node-id=0-1&node-type=canvas

## Core Structure:
Multiple HTML pages: index.html (Overview), packages.html, projects.html, and repos.html
Modular JavaScript files for different functionalities
Shared CSS styling with dark theme
Bootstrap for responsive layout

Key Components:
### Package Management
- Display and filter software packages (Docker, Maven, npm, etc.)
- Search functionality for packages
- Form to create new packages

### Repository Management
- Display repositories with descriptions and stats
- Ability to create new repositories
- Pinned repositories feature on the overview page

### Project Management
- List and create projects
- Project cards with titles and descriptions

### Profile System
- Sidebar showing user profile information
- Display user avatar, bio, and stats
- Organization affiliations

Technical Implementation:
### JavaScript Architecture
- Modular ES6 code structure
- Event-driven updates
- Separate concerns:
  - `lists.js`: Rendering lists of items
  - `forms.js`: Form handling
  - `utils.js`: Shared utilities
  - `data.js`: Data management

### Styling
- Custom CSS variables for theming
- Bootstrap integration
- Responsive design
- Consistent dark theme across pages