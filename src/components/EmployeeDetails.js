import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees);
  const employee = employees.find((emp) => {
    return emp.id === id;
  });

  if (!employee) {
    return <div>No employee found.</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Favorite Sport Game: {employee.favoriteSport}</p>
      <p>Accomplishments: {employee.accomplishments}</p>
      <button>Apply for offer</button>
    </div>
  );
};

export default EmployeeDetails;
