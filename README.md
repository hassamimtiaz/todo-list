# TaskFlow - Project Management Application

A modern project management application built with React, featuring a Kanban board, multiple project support, and a beautiful UI inspired by Jira.

## Features

### Project Management
- Multiple project support with color coding
- Collapsible sidebar navigation
- Project-specific issue tracking
- Different views (Board, Backlog, Reports)

### Kanban Board
- Drag-and-drop functionality
- Status columns (Backlog, To Do, In Progress, In Review, Done)
- Visual status indicators
- Issue count per column

### Issue Management
- Create and edit issues
- Issue types (Story, Task, Bug)
- Priority levels with visual indicators
- Assignee tracking with avatar display
- Due date management
- Rich issue details

### UI/UX
- Modern, clean interface
- Dark/Light theme support
- Responsive design
- Smooth animations
- Professional styling

## Tech Stack
- React 18
- Vite
- @dnd-kit for drag-and-drop
- CSS Variables for theming
- Local Storage for data persistence

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Usage

### Managing Projects
- Use the sidebar to switch between projects
- Each project has its own board and issues
- Collapse the sidebar for more workspace

### Creating Issues
1. Click "Create Issue" button
2. Fill in the issue details:
   - Title
   - Type (Story/Task/Bug)
   - Priority
   - Assignee
   - Due Date
3. Submit to add to the backlog

### Using the Kanban Board
- Drag and drop issues between columns
- Click on issues to view/edit details
- Monitor progress with status columns

### Theme Switching
- Toggle between light and dark themes
- Consistent styling across the application

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
