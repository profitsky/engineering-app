import React from 'react';
import { Switch, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import Cad from './pages/Cad';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/calculators' component={Calculators} />
      <Route exact path='/cad' component={Cad} />
    </Switch>
  );
};

export default Routes;
