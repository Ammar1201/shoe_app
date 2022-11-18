import React, { Fragment, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound';
import AddShoe from './pages/AddShoe';
import Home from './pages/Home';
import ShoeDetails from './pages/ShoeDetails';
import Shoes from './pages/Shoes';
import Spinner from './components/utils/Spinner';
import Message from './components/utils/Message';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  return (
    <Fragment>
      <Header />
      {isLoading && <Spinner />}
      {message && <Message messageContent={message} setMessage={setMessage} />}
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/shoes' exact>
          <Shoes setIsLoading={setIsLoading} setMessage={setMessage}  />
        </Route>
        <Route path='/shoes/add' exact>
          <AddShoe setIsLoading={setIsLoading} setMessage={setMessage}  />
        </Route>
        <Route path='/shoes/:shoeID'>
          <ShoeDetails setIsLoading={setIsLoading} setMessage={setMessage}  />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
