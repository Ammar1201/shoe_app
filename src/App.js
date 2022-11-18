import React, { Fragment, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound';
import AddShoe from './pages/AddShoe';
import Home from './pages/Home';
import ShoeDetails from './pages/ShoeDetails';
import Shoes from './pages/Shoes';
import Spinner from './components/utils/Spinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Fragment>
      <Header />
      {isLoading && <Spinner />}
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/shoes' exact>
          <Shoes setIsLoading={setIsLoading} />
        </Route>
        <Route path='/shoes/add' exact>
          <AddShoe setIsLoading={setIsLoading} />
        </Route>
        <Route path='/shoes/:shoeID'>
          <ShoeDetails setIsLoading={setIsLoading} />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
