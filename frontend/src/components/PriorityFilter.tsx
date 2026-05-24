type Props = {
  selected: string;
  onChange: (value: string) => void;
};

function PriorityFilter({ selected, onChange }: Props) {
  return (
    <div className="filter-bar">
      <label>Filter by Priority:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default PriorityFilter;
