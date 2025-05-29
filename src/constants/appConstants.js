export const ISSUE_TYPES = {
  STORY: { name: 'Story', icon: '📝', color: '#36B37E' },
  TASK: { name: 'Task', icon: '✅', color: '#4C9AFF' },
  BUG: { name: 'Bug', icon: '🐛', color: '#FF5630' }
}

export const ISSUE_STATUS = {
  BACKLOG: { name: 'Backlog', color: '#6B778C' },
  TODO: { name: 'To Do', color: '#4C9AFF' },
  IN_PROGRESS: { name: 'In Progress', color: '#36B37E' },
  IN_REVIEW: { name: 'In Review', color: '#FF991F' },
  DONE: { name: 'Done', color: '#999999' }
}

export const PRIORITIES = {
  HIGHEST: { name: 'Highest', icon: '⚡️', color: '#FF5630' },
  HIGH: { name: 'High', icon: '🔴', color: '#FF7452' },
  MEDIUM: { name: 'Medium', icon: '🟡', color: '#FFAB00' },
  LOW: { name: 'Low', icon: '🟢', color: '#36B37E' },
  LOWEST: { name: 'Lowest', icon: '⬇️', color: '#6B778C' }
}

export const PROJECTS = {
  MAIN: { name: 'Main Project', key: 'MAIN', color: '#4C9AFF' },
  BACKEND: { name: 'Backend', key: 'BE', color: '#36B37E' },
  FRONTEND: { name: 'Frontend', key: 'FE', color: '#FF991F' },
  MOBILE: { name: 'Mobile App', key: 'MOB', color: '#8777D9' }
} 