import { useDraggable } from '@dnd-kit/core'
import { ISSUE_TYPES, PRIORITIES } from '../../constants/appConstants'

export function IssueCard({ issue, onUpdate }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: issue.id
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  const type = ISSUE_TYPES[issue.type]
  const priority = PRIORITIES[issue.priority]

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="issue-card"
    >
      <div className="issue-header">
        <span className="issue-type" title={type.name}>
          {type.icon}
        </span>
        <span className="issue-key">{issue.key}</span>
        <span 
          className="issue-priority" 
          title={priority.name}
          style={{ color: priority.color }}
        >
          {priority.icon}
        </span>
      </div>

      <h4 className="issue-title">{issue.title}</h4>
      
      <div className="issue-meta">
        {issue.assignee && (
          <div className="assignee">
            <span className="avatar">
              {issue.assignee.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        {issue.dueDate && (
          <div className="due-date" title="Due date">
            🗓️ {new Date(issue.dueDate).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  )
} 