import { useState } from 'react'
import { ISSUE_TYPES, PRIORITIES } from '../../constants/appConstants'

export function CreateIssueModal({ isOpen, onClose, onSubmit, projectKey }) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('TASK')
  const [priority, setPriority] = useState('MEDIUM')
  const [assignee, setAssignee] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    onSubmit({
      title: title.trim(),
      type,
      priority,
      assignee: assignee.trim() || null,
      dueDate: dueDate || null,
      status: 'BACKLOG'
    })

    setTitle('')
    setType('TASK')
    setPriority('MEDIUM')
    setAssignee('')
    setDueDate('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create Issue</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="issue-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter issue title"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {Object.entries(ISSUE_TYPES).map(([key, { name, icon }]) => (
                  <option key={key} value={key}>
                    {icon} {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                {Object.entries(PRIORITIES).map(([key, { name, icon }]) => (
                  <option key={key} value={key}>
                    {icon} {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="assignee">Assignee</label>
            <input
              id="assignee"
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Enter assignee name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              id="dueDate"
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 