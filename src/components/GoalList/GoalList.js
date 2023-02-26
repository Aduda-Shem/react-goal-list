import React, { useState } from 'react';

import './GoalList.css';

const GoalList = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredGoals = props.goals.filter(goal => {
    return goal.text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="goal-list">
      <div className="search-input">
        <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Search..." />
      </div>
      {filteredGoals.length === 0 && <p>No goals found.</p>}
      {filteredGoals.length > 0 && (
        <ul>
          {filteredGoals.map(goal => {
            return <li key={goal.id}>{goal.text}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default GoalList;
