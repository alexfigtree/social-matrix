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

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';


const FormPostContainer = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <Container maxWidth="lg">

        <Typography variant="h2" align="center"> Social Matrix Project - Survey</Typography>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                <Form currentId={currentId} setCurrentId={setCurrentId} />
             
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              
            </Grid>
          </Container>
        </Grow>
        
      </Container>

     
    


  );
};


export default withRouter(FormPostContainer);