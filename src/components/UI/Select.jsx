export function Select({ value, onChange, options, className, style, defaultOption }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={className}
      style={style}
    >
      {defaultOption && (
        <option value="ALL">{defaultOption}</option>
      )}
      {Object.entries(options).map(([key, { name }]) => (
        <option key={key} value={key}>{name}</option>
      ))}
    </select>
  )
} 