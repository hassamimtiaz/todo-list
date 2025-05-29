import { Select } from '../UI/Select'
import { CATEGORIES, PRIORITIES } from '../../constants/todoConstants'

const DATE_RANGES = {
  ALL: { name: 'All Dates' },
  TODAY: { name: 'Due Today' },
  WEEK: { name: 'Due This Week' },
  OVERDUE: { name: 'Overdue' }
}

export function TodoFilters({ filter, onFilterChange }) {
  return (
    <div className="filters">
      <Select
        value={filter.category}
        onChange={(e) => onFilterChange({ ...filter, category: e.target.value })}
        options={CATEGORIES}
        className="filter-select"
        defaultOption="All Categories"
      />
      <Select
        value={filter.priority}
        onChange={(e) => onFilterChange({ ...filter, priority: e.target.value })}
        options={PRIORITIES}
        className="filter-select"
        defaultOption="All Priorities"
      />
      <Select
        value={filter.dateRange}
        onChange={(e) => onFilterChange({ ...filter, dateRange: e.target.value })}
        options={DATE_RANGES}
        className="filter-select"
        defaultOption="All Dates"
      />
    </div>
  )
} 