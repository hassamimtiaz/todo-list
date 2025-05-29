import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Select } from '../UI/Select'
import { CATEGORIES, PRIORITIES } from '../../constants/todoConstants'

export function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: todo.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li 
      ref={setNodeRef} 
      style={style} 
      className={`todo-item ${todo.category.toLowerCase()}`} 
      {...attributes} 
      {...listeners}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span 
          style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
            borderLeft: `4px solid ${CATEGORIES[todo.category]?.color || '#666'}`,
            paddingLeft: '8px'
          }}
        >
          {todo.text}
        </span>
      </div>
      <div className="todo-actions">
        <Select
          value={todo.category}
          onChange={(e) => onUpdate(todo.id, { category: e.target.value })}
          options={CATEGORIES}
          className="category-select"
        />
        <Select
          value={todo.priority}
          onChange={(e) => onUpdate(todo.id, { priority: e.target.value })}
          options={PRIORITIES}
          className="priority-select"
          style={{ color: PRIORITIES[todo.priority]?.color }}
        />
        <button onClick={() => onDelete(todo.id)} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  )
} 