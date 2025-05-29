import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { ISSUE_STATUS } from '../../constants/appConstants'
import { KanbanColumn } from './KanbanColumn'

export function KanbanBoard({ issues, onUpdateIssue }) {
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const issueId = active.id
    const newStatus = over.id.replace('column-', '')
    
    onUpdateIssue(issueId, { status: newStatus })
  }

  const columns = Object.entries(ISSUE_STATUS).map(([status, details]) => {
    const columnIssues = issues.filter(issue => issue.status === status)
    return { id: `column-${status}`, status, details, issues: columnIssues }
  })

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        {columns.map(column => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.details.name}
            color={column.details.color}
            issues={column.issues}
            onUpdateIssue={onUpdateIssue}
          />
        ))}
      </div>
    </DndContext>
  )
} 