# GITSUB
## Overview
GITSUB is a GitHub-inspired web application with a comprehensive package, repository, and project management functionality. Built with vanilla JavaScript, HTML, CSS, and Bootstrap, it offers a responsive dark-themed interface for managing software development resources.

## Screenshots
*Overview Page: The main dashboard showing pinned repositories and profile information*
![Overview Page](assets/images/Screenshoots/OverviewPage.png)

*Packages Page: Package management interface with filtering and creation options*
![Packages Page](assets/images/Screenshoots/PackagesPage.png)

*Projects Page: Project cards and creation form for managing development initiatives*
![Projects Page](assets/images/Screenshoots/ProjectsPage.png)

*Repositories Page: Repository listing with detailed statistics and creation form*
![Repositories Page](assets/images/Screenshoots/RepositoriesPage.png)

## Project Links
- [ERD](https://dbdiagram.io/d/GitSub-OJL-6705c146fb079c7ebdcbd8e6)
- [Wireframe](https://www.figma.com/design/8vIX1yEXd2UxdWARbWqAje/GitSub?node-id=0-1&node-type=canvas)
- [Deployed Project](https://olj-gitsub.netlify.app/)

## User Story
As a software developer, I need a centralized platform to manage my repositories, packages, and projects. GITSUB provides an intuitive interface for organizing development resources while maintaining a familiar GitHub-like experience.

## Features
- Multi-page application (Overview, Packages, Projects, Repos)
- Package Management System
  - Filter and search packages
  - Support for multiple package types (Docker, Maven, npm)
  - Package creation interface
- Repository Management
  - Repository listing with detailed statistics
  - Pinned repositories feature
  - New repository creation
- Project Management
  - Project cards with descriptions
  - Project creation and organization
- Profile System
  - User profile sidebar
  - Organization affiliations
  - User statistics and bio

## Technical Details
### JavaScript Architecture
- Modular ES6 code structure
- Event-driven updates
- Separated concerns:
  - `lists.js`: List rendering logic
  - `forms.js`: Form handling and validation
  - `utils.js`: Shared utility functions
  - `data.js`: Data management and state

### Styling
- Custom CSS variables for theming
- Bootstrap integration
- Responsive design principles
- Consistent dark theme

## Key Learnings
- ES6 Modules and code organization
- Event-driven architecture
- State management in vanilla JavaScript
- Responsive design implementation
- Dark theme implementation

## Challenges and Solutions
1. State Management:
   - Challenge: Managing data across multiple pages
   - Solution: Implemented centralized data management in data.js

2. Dark Theme:
   - Challenge: Consistent dark theme across components
   - Solution: Utilized CSS variables and Bootstrap dark theme classes

3. Responsive Design:
   - Challenge: Maintaining layout integrity across different screen sizes
   - Solution: Implemented Bootstrap grid system and custom breakpoints

4. Form Handling:
   - Challenge: Managing form submissions and validation across multiple forms
   - Solution: Created reusable form handlers in forms.js with validation logic

5. Dynamic Rendering:
   - Challenge: Efficiently rendering lists and cards with updated data
   - Solution: Developed modular rendering functions in lists.js with event-driven updates

6. Component Design:
   - Challenge: Creating consistent, reusable UI components
   - Solution: Established shared styling patterns and component templates

## Future Improvements
- Add database systems
- Implement real-time updates
- Add collaborative features
- Enhance search functionality
- Add more package type support

## Resources
- [Bootstrap Documentation](https://getbootstrap.com/)
- [JavaScript ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Stack Overflow JavaScript](https://stackoverflow.com/questions/tagged/javascript)
- [GeeksForGeeks JavaScript](https://www.geeksforgeeks.org/javascript/?ref=shm)
- [Reddit JavaScript Community](https://www.reddit.com/r/javascript/)

## Contributors
- [Landon Borrego](https://github.com/lndnbrr) - Software Development student at Nashville Software School
- [Justin Glotzbach](https://github.com/justinglotz) - Software Developer based in Nashville, TN
- [Omer (Ozzy) Akben](https://github.com/omerakben) - Mental health whiz-turned-tech guru

## Contact
- GitHub Organization: [NSS Evening Cohort 29](https://github.com/nss-evening-cohort-29)
- Project Repository: [GitSub Team Project](https://github.com/nss-evening-cohort-29/OLJ-Gitsub)
- Team Members:
  - Landon Borrego - [GitHub](https://github.com/lndnbrr)
  - Justin Glotzbach - [GitHub](https://github.com/justinglotz) 
  - Omer (Ozzy) Akben - [GitHub](https://github.com/omerakben)
