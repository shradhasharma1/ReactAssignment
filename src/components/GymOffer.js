import React from 'react';
import { useSelector } from 'react-redux';

const GymOffer = () => {
  const user = useSelector((state) => state.user);

  let offer = null;

  if (user.age > 45 && user.age < 60 && user.salary < 100000) {
    offer = '7000 per month';
  } else if (user.age < 45 && user.salary > 100000) {
    offer = '1200 per month';
  } else if (user.age > 60 && user.salary < 100000) {
    offer = '2000 per month';
  }

  return (
    <div>
      <h2>Gym Offer</h2>
      {offer ? (
        <p>Offer for you: {offer}</p>
      ) : (
        <p>No offer available for you.</p>
      )}
    </div>
  );
};

export default GymOffer;
