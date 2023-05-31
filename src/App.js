import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import EmployeeDetails from './components/EmployeeDetails';
import GymOffer from './components/GymOffer';
import { SuccessPage } from './components/SuccessPage';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route exact path="/" component={Home} />
        <Route path="/employee/:id" component={EmployeeDetails} />
        <Route path="/gym-offer" component={GymOffer} />
        <Route path="/success" component={SuccessPage} />
      </Route>
    </Routes>
  );
};

export default App;
