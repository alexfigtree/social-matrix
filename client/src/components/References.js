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

const References = () => {

    return (
        <div className="container">

            <AppBar position="static" 
                style={{ 
                    flexDirection: 'row', 
                    float: 'right',
                    backgroundColor: 'white',
                    border: 'none',
                    color: 'black',
                    display: 'block',
                    padding: '15px',
                    boxShadow: 'none !important'

                }}
            >
              <Link to="/" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>The Social Matrix</Link>
              <Link to="/identity" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Areas of Identity</Link>
              <Link to="/faq" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>FAQ's</Link>
              <Link to="/uses" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Uses</Link>
              <Link to="/intro" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Take Survey</Link>
              <Link to="/references" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>References</Link>
              <Link to="/contact" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Contact</Link>
            </AppBar>

            <Typography variant="h2" style={{ marginBottom: '20px', paddingTop: '50px' }} align="center">References</Typography>
     

        </div>

  )
};

export default References;