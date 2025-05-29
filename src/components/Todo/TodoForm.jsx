import { useState } from 'react'

export function TodoForm({ onAdd }) {
  const [newTodo, setNewTodo] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    onAdd(newTodo, dueDate)
    setNewTodo('')
    setDueDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="date-input"
        />
        <button type="submit" className="add-button">Add</button>
      </div>
    </form>
  )
} 