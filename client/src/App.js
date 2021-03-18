import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
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

