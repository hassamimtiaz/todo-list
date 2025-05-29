import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { AppLayout } from './components/Layout/AppLayout'
import { KanbanBoard } from './components/Board/KanbanBoard'
import './App.css'

// Sample data - in a real app, this would come from an API
const sampleIssues = [
  {
    id: 1,
    key: 'MAIN-1',
    title: 'Implement user authentication',
    type: 'STORY',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    assignee: 'John Doe',
    dueDate: '2024-04-01',
    project: 'MAIN'
  },
  {
    id: 2,
    key: 'MAIN-2',
    title: 'Fix login page styling',
    type: 'BUG',
    status: 'TODO',
    priority: 'MEDIUM',
    assignee: 'Jane Smith',
    dueDate: '2024-03-25',
    project: 'MAIN'
  },
  {
    id: 3,
    key: 'BE-1',
    title: 'Add email notifications',
    type: 'TASK',
    status: 'BACKLOG',
    priority: 'LOW',
    assignee: 'Mike Johnson',
    dueDate: null,
    project: 'BACKEND'
  }
]

function App() {
  const [issues, setIssues] = useState(sampleIssues)
  const [currentProject, setCurrentProject] = useState('MAIN')

  const handleUpdateIssue = (issueId, updates) => {
    setIssues(prev => prev.map(issue =>
      issue.id === issueId ? { ...issue, ...updates } : issue
    ))
  }

  const handleCreateIssue = (issueData) => {
    const newIssue = {
      id: Date.now(),
      ...issueData
    }
    setIssues(prev => [...prev, newIssue])
  }

  const filteredIssues = issues.filter(issue => issue.project === currentProject)

  return (
    <ThemeProvider>
      <AppLayout
        onProjectChange={setCurrentProject}
        onCreateIssue={handleCreateIssue}
      >
        <KanbanBoard
          issues={filteredIssues}
          onUpdateIssue={handleUpdateIssue}
        />
      </AppLayout>
    </ThemeProvider>
  )
}

export default App
