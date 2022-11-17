import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import AddShoe from './pages/AddShoe';
import Home from './pages/Home';
import Shoe from './pages/Shoe';
import Shoes from './pages/Shoes';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/shoes' exact>
          <Shoes />
        </Route>
        <Route path='/shoes/:shoeID'>
          <Shoe />
        </Route>
        <Route path='/shoes/add'>
          <AddShoe />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
