import { useState, useEffect } from 'react'
import { loadFromStorage, saveToStorage } from '../utils/localStorage'

export function useTodos() {
  const [todos, setTodos] = useState(() => 
    loadFromStorage('todos', [])
  )

  const [filter, setFilter] = useState({ 
    category: 'ALL', 
    priority: 'ALL',
    dateRange: 'ALL' // 'ALL', 'TODAY', 'WEEK', 'OVERDUE'
  })

  useEffect(() => {
    saveToStorage('todos', todos)
  }, [todos])

  const addTodo = (text, dueDate) => {
    if (!text.trim()) return
    setTodos(prev => [...prev, {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      category: 'PERSONAL',
      priority: 'MEDIUM',
      createdAt: new Date().toISOString(),
      dueDate: dueDate || null
    }])
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const updateTodo = (id, updates) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const reorderTodos = (oldIndex, newIndex) => {
    setTodos(prev => {
      const result = Array.from(prev)
      const [removed] = result.splice(oldIndex, 1)
      result.splice(newIndex, 0, removed)
      return result
    })
  }

  const isInDateRange = (todo) => {
    if (filter.dateRange === 'ALL') return true
    if (!todo.dueDate) return false

    const dueDate = new Date(todo.dueDate)
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekFromNow = new Date(today)
    weekFromNow.setDate(weekFromNow.getDate() + 7)

    switch (filter.dateRange) {
      case 'TODAY':
        return dueDate >= today && dueDate < new Date(today.getTime() + 24 * 60 * 60 * 1000)
      case 'WEEK':
        return dueDate >= today && dueDate <= weekFromNow
      case 'OVERDUE':
        return dueDate < today
      default:
        return true
    }
  }

  const filteredTodos = todos.filter(todo => {
    const categoryMatch = filter.category === 'ALL' || todo.category === filter.category
    const priorityMatch = filter.priority === 'ALL' || todo.priority === filter.priority
    const dateMatch = isInDateRange(todo)
    return categoryMatch && priorityMatch && dateMatch
  })

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    reorderTodos
  }
} 