import { useDroppable } from '@dnd-kit/core'
import { IssueCard } from './IssueCard'

export function KanbanColumn({ id, title, color, issues, onUpdateIssue }) {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div 
      ref={setNodeRef}
      className="kanban-column"
    >
      <div className="column-header" style={{ borderTopColor: color }}>
        <h3>{title}</h3>
        <span className="issue-count">{issues.length}</span>
      </div>
      
      <div className="column-content">
        {issues.map(issue => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onUpdate={onUpdateIssue}
          />
        ))}
      </div>
    </div>
  )
} 