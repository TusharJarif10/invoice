import React from 'react';
import PersonForm from './PersonForm';

const PersonList = () => {
  // Render the list of people using PersonForm
  return (
    <div>
      <h2>People List</h2>
      <PersonForm />
      {/* Display the list of people */}
    </div>
  );
};

export default PersonList;