import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Hello, I`m {props.name}</p>
      <p>I`m from the UserOutput component</p>
    </div>
  );
}

export default UserOutput;
