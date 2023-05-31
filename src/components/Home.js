import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
