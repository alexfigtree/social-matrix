import React from 'react';
import { Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";

import FormPostContainer from './FormPostContainer';
import useStyles from './styles';

import styles from './style.css';

const Home = () => {
  return (
    <div className="container">
        <Typography variant="h2" align="center">Social Matrix Project</Typography>
        <Link to="/form">Take the survey here</Link>
    </div>
  )
};

export default Home;