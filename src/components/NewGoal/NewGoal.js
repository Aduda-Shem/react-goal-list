import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
  const [enteredText, setEnteredText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const addGoalHandler = event => {
    event.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText('');
    setIsValid(true);

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
    setIsValid(true);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input
        type="text"
        value={enteredText}
        onChange={textChangeHandler}
        className={!isValid ? 'invalid' : ''}
        placeholder="Enter your goal here"
      />
      <button type="submit" className="btn">
        Add Goal
      </button>
      {!isValid && <p className="error-text">Please enter a valid goal.</p>}
    </form>
  );
};

export default NewGoal;
