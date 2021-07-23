/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Container, 
    Divider, 
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    List,
    ListItem
} from '@material-ui/core';
import { Link } from "react-router-dom";

import useStyles from '../styles';
import styles from '../style.css';
import NavBar from './NavBar.js';

const Uses = () => {
    return (
        <div className="container">

          <NavBar />

          <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">Uses</Typography>
          

          <ul align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px', fontSize: '20px'}}>
            <li style={{ marginBottom: '20px'}}>Improving social and cultural awareness for therapists and medical clinicians working 
              with individuals, families, and groups</li>
            <li style={{ marginBottom: '20px'}}>Improving social and cultural awareness (multicultural sensitivity and attunement to 
                social context) in clinical training in mental health, health, education, 
              organizational leadership, sociology, and other fields of study</li>
            <li style={{ marginBottom: '20px'}}>Guiding organizational consultation</li>
            <li style={{ marginBottom: '20px'}}>As a research tool in health, mental health, education, organizational leadership, sociology, and other fields of study</li>
            <li style={{ marginBottom: '20px'}}>Guiding clinical consultation</li>
            <li style={{ marginBottom: '20px'}}>Facilitating dialogue between members of different racial, cultural, or political or groups</li>
          </ul> 
        </div>

  )
};

export default Uses;