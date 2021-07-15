/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {
  Link,
  withRouter
} from "react-router-dom";

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

const FormPostContainer = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <Container maxWidth="lg">

        <Typography variant="h2" align="center" gutterBottom={true}> Social Matrix Project - Survey</Typography>

        
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Box>
            <Typography variant="h5" align="center">
                Matrix of Intersectional Identity, Privilege and Marginalization: A Visual Tool Qualtrics Survey
            </Typography> 
            <br/>
            <Typography variant="h6" align="center">
                Please fill out one survey for each Person for whom you want to build a matrix. Rate each of the 
                aspect of identity from 1-7 for each question. "1" is the most privileged position 
                (meaning someone has the most power and status, not that they are in the majority. "7" 
                	is the most oppressed or marginalized position, but  
                	<Box component="span" style={{ fontWeight: 600, textDecoration: 'underline' }}> not </Box> 
                	 that they are in the minority). For instance, millionaires are a minority group but they are 
                	not oppressed or marginalized. You can explain your choice for most questions.  
                If you are filling the matrix out for someone other than yourself, please try to answer as you think 
                that person would answer for him/her/themself. 
            </Typography>
            <br/>
            <Typography variant="h6" align="center">
                You will be asked about how you rate your (or another Person) degree of privilege now, and in most 
                cases will also be asked how you would rate yourself (or the other Person) earlier. This 
                can show change over time in an area of identity (for instance, a change in income level, 
                	immigration status, or marital status). 
            </Typography>
            <br/>
            <Typography variant="h6" align="center" gutterBottom={true}>
                You can also choose two numbers on a scale of 1-7 for the same area to show mixed  identity (for instance, 
                	if you have more than one racial or religious background). If you think that some areas of 
                identity may affect your ratings on other areas, you can explain the relationship between areas of identity. 
                For instance, in describing your rating for “gender,” you might type in “less gender privilege as a black 
                (or gay) man" or "more privilege than most women because highly educated.
            </Typography>
            <Link to="/q1"><Typography variant="h3" align="center">Start 
            </Typography></Link>
        </Box>
        		


          
              
        </Grid>
      
      
        
      </Container>

     
    


  );
};


export default withRouter(FormPostContainer);