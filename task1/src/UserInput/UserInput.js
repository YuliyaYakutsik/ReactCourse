import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  const styles = {
    border: '1px solid red'
  };

  return (
    <input 
      className="userInput" 
      type="text" 
      onChange={props.changed} 
      value={props.name} 
      style={styles} />
  );
}

export default UserInput;
