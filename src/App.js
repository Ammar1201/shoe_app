import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import AddShoe from './pages/AddShoe';
import Home from './pages/Home';
import ShoeDetails from './pages/ShoeDetails';
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
        <Route path='/shoes/add' exact>
          <AddShoe />
        </Route>
        <Route path='/shoes/:shoeID'>
          <ShoeDetails />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
