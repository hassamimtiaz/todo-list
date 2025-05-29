import { useState } from 'react'
import { CATEGORIES, PRIORITIES } from '../../constants/todoConstants'
import { Select } from '../UI/Select'

const formatDate = (dateString) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const getDateStatus = (dueDate) => {
  if (!dueDate) return ''
  const now = new Date()
  const due = new Date(dueDate)
  if (due < now) return 'overdue'
  if (due.getDate() === now.getDate()) return 'due-today'
  return ''
}

export function TodoTable({ todos, onToggle, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEditing = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = (todo) => {
    if (editText.trim()) {
      onUpdate(todo.id, { text: editText.trim() })
    }
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="table-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Created</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr 
              key={todo.id} 
              className={`${todo.completed ? 'completed' : ''} ${getDateStatus(todo.dueDate)}`}
            >
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                  className="table-checkbox"
                />
              </td>
              <td>
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => saveEdit(todo)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit(todo)}
                    className="edit-input"
                    autoFocus
                  />
                ) : (
                  <span 
                    className={`todo-text ${todo.completed ? 'completed' : ''}`}
                    style={{ 
                      borderLeft: `4px solid ${CATEGORIES[todo.category]?.color || '#666'}`,
                      paddingLeft: '8px'
                    }}
                  >
                    {todo.text}
                  </span>
                )}
              </td>
              <td>
                <Select
                  value={todo.category}
                  onChange={(e) => onUpdate(todo.id, { category: e.target.value })}
                  options={CATEGORIES}
                  className="table-select"
                />
              </td>
              <td>
                <Select
                  value={todo.priority}
                  onChange={(e) => onUpdate(todo.id, { priority: e.target.value })}
                  options={PRIORITIES}
                  className="table-select"
                  style={{ color: PRIORITIES[todo.priority]?.color }}
                />
              </td>
              <td>{formatDate(todo.createdAt)}</td>
              <td className={getDateStatus(todo.dueDate)}>
                {todo.dueDate ? (
                  <input
                    type="datetime-local"
                    value={todo.dueDate}
                    onChange={(e) => onUpdate(todo.id, { dueDate: e.target.value })}
                    className="date-input"
                  />
                ) : (
                  <button
                    onClick={() => onUpdate(todo.id, { dueDate: new Date().toISOString() })}
                    className="add-date-button"
                  >
                    Add Due Date
                  </button>
                )}
              </td>
              <td className="action-buttons">
                <button
                  onClick={() => editingId === todo.id ? saveEdit(todo) : startEditing(todo)}
                  className="edit-button"
                  title={editingId === todo.id ? "Save" : "Edit"}
                >
                  {editingId === todo.id ? "💾" : "✏️"}
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="delete-button"
                  title="Delete"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 