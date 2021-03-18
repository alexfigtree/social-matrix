import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import FormPostContainer from './FormPostContainer';
import Home from './Home'


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={FormPostContainer} />
    </Switch>
  )
  
};

export default App;

