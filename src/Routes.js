import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//PAGES
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import Cad from './pages/Cad';
import About from './pages/About';
import CouterboreAndCountersink from './pages/Calculators/CouterboreAndCountersink';
import FitsAndTolerances from './pages/Calculators/FitsAndTolerances';
import RetainingRings from './pages/Calculators/RetainingRings';

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/calculators' component={Calculators} />
        <Route exact path='/cad' component={Cad} />
        <Route exact path='/about' component={About} />
        <Route
          exact
          path='/calculators/fitsandtolerances'
          component={FitsAndTolerances}
        />
        <Route
          exact
          path='/calculators/counterboreandcountersink'
          component={CouterboreAndCountersink}
        />
        <Route
          exact
          path='/calculators/retainingrings'
          component={RetainingRings}
        />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
