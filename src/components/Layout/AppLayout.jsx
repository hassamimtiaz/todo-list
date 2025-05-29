import { useState } from 'react'
import { PROJECTS } from '../../constants/appConstants'
import { CreateIssueModal } from '../Issues/CreateIssueModal'

export function AppLayout({ children, onProjectChange, onCreateIssue }) {
  const [currentProject, setCurrentProject] = useState('MAIN')
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isCreateModalOpen, setCreateModalOpen] = useState(false)

  const handleProjectChange = (projectKey) => {
    setCurrentProject(projectKey)
    onProjectChange?.(projectKey)
  }

  const handleCreateIssue = (issueData) => {
    const project = PROJECTS[currentProject]
    const issueCount = onCreateIssue?.({
      ...issueData,
      key: `${project.key}-${Date.now()}`,
      project: currentProject
    })
  }

  return (
    <div className="app-layout">
      <nav className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h1 className="app-title">TaskFlow</h1>
          <button 
            className="collapse-button"
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>

        <div className="sidebar-section">
          <h2>Projects</h2>
          <ul className="project-list">
            {Object.entries(PROJECTS).map(([key, project]) => (
              <li 
                key={key}
                className={`project-item ${currentProject === key ? 'active' : ''}`}
                onClick={() => handleProjectChange(key)}
              >
                <span 
                  className="project-color"
                  style={{ backgroundColor: project.color }}
                />
                {!isSidebarCollapsed && (
                  <>
                    <span className="project-name">{project.name}</span>
                    <span className="project-key">{project.key}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h2>Views</h2>
          <ul className="view-list">
            <li className="view-item active">
              <span className="view-icon">📋</span>
              {!isSidebarCollapsed && <span>Board</span>}
            </li>
            <li className="view-item">
              <span className="view-icon">📊</span>
              {!isSidebarCollapsed && <span>Backlog</span>}
            </li>
            <li className="view-item">
              <span className="view-icon">📈</span>
              {!isSidebarCollapsed && <span>Reports</span>}
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <header className="content-header">
          <div className="project-header">
            <span 
              className="project-color large"
              style={{ backgroundColor: PROJECTS[currentProject].color }}
            />
            <h2>{PROJECTS[currentProject].name}</h2>
          </div>
          <div className="header-actions">
            <button 
              className="create-issue-button"
              onClick={() => setCreateModalOpen(true)}
            >
              Create Issue
            </button>
          </div>
        </header>
        
        <div className="content-container">
          {children}
        </div>
      </main>

      <CreateIssueModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateIssue}
        projectKey={PROJECTS[currentProject].key}
      />
    </div>
  )
} 