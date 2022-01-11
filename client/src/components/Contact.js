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
    Button
} from '@material-ui/core';
import { Link } from "react-router-dom";

import useStyles from '../styles';

import styles from '../style.css';
import NavBar from './NavBar.js';

const Contact = () => {

    return (
        <div className="container">

            <NavBar />

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">Contact</Typography>
     
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                You can reach any of the Social Matrix team <a href="mailto:contact.social.matrix@gmail.com"> here</a>.
                <p>You can reach Jodie Kliman, Ph.D. directly at <a href="mailto:jodiekliman52@gmail.com">jodiekliman52@gmail.com</a> or <a href="mailto:jodiekliman@socialmatrixdiagram.org">jodiekliman@socialmatrixdiagram.org</a> </p>
            </Typography>
        </div>

  )
};

export default Contact;