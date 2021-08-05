/* eslint-disable */
import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import { AppBar } from '@material-ui/core';

import useStyles from '../styles';

import styles from '../style.css';

function NavBar(props) {


    return (
      <AppBar position="static" 
          style={{ 
              flexDirection: 'row', 
              float: 'right',
              backgroundColor: 'linen',
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
        <Link to="/ourTeam" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Our Team</Link>
        <Link to="/contact" style={{ fontSize: '22px', marginTop: '30px', padding: '25px', textDecoration: 'none' }}>Contact</Link>
      </AppBar>
    );
};

export default NavBar;

