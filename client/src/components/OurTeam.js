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
    Avatar,
    Paper
} from '@material-ui/core';
import { Link } from "react-router-dom";

import useStyles from '../styles';

import styles from '../style.css';
import NavBar from './NavBar.js';

const OurTeam = () => {
    return (
        <div className="container">

            <NavBar />

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">Our Team</Typography>
            <Avatar alt="Jodie Kliman" src="/images/yaci.png" />
                 <Paper variant="outlined">
           <img src="./images/yaci.png" />
        </Paper>
            <br/>
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                JODIE KLIMAN, Ph.D. is a social-clinical psychologist and Professor of Clinical 
                Psychology at William James College. She is the original and lead developer of the 
                Social Matrix Diagram and has published extensively on social justice issues, trauma, 
                multiculturalism, feminism, and intersectionality in the practice and teaching of 
                psychology and family therapy.  She can be reached at jodiekliman52@gmail.com or 
                jodiekliman@socialmatrixdiagram.org 
            </Typography>
            
           
        </div>

  )
};

export default OurTeam;