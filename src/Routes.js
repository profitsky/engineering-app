import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//PAGES
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import Cad from './pages/Cad';
import About from './pages/About';

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/calculators' component={Calculators} />
        <Route exact path='/cad' component={Cad} />
        <Route exact path='/about' component={About} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
