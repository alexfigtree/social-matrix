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
            
            <br/>
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                JODIE KLIMAN, Ph.D. is a social-clinical psychologist and Professor of Clinical 
                Psychology at William James College. She is the original and lead developer of the 
                Social Matrix Diagram and has published extensively on social justice issues, trauma, 
                multiculturalism, feminism, and intersectionality in the practice and teaching of 
                psychology and family therapy.  She can be reached at <a href="mailto:jodiekliman52@gmail.com">jodiekliman52@gmail.com</a> or <a href="mailto:jodiekliman@socialmatrixdiagram.org">jodiekliman@socialmatrixdiagram.org</a>.
            </Typography>

            <br/>
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                FATUMA DZILALA, M.A. is a Clinical Psy.D student completing her doctoral internship at John's Hopkins 
                University. She is a 5th year student at William James College, where she is conducting 
                her doctoral project on the impact of colorism on the psychological experiences of 
                dark-skinned Black women. She can be reached at <a href="mailto:fatuma.dzilala@gmail.com">fatuma.dzilala@gmail.com</a> or <a href="mailto:fatuma_dzilala@williamjames.edu">fatuma_dzilala@williamjames.edu</a>. 
            </Typography>

            <br/>
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                MATTHEW EISNER, M.S.Ed. (he/him/they/them) is a health psychologist in training and has published 
                articles about LGBTQ+ and BIPOC     communities. Matt’s clinical and research interests are in 
                LGBTQ health and social justice issues. They can be reached at <a href="mailto:Matthew_eisner@outlook.com">Matthew_eisner@outlook.com</a>.                         
            </Typography>

            <br/>
            <Typography variant="h5" align="left" style={{ marginLeft: '10%', marginRight: '10%', paddingBottom: '20px', paddingTop: '20px'}}>
                YACIHUILCA MONÍ, M.A. completed both her BA and MA in psychology at Central Connecticut 
                State University. Currently, Yacihuilca is completing her doctoral degree in Clinical 
                Psychology at William James College. Yacihuilca’s research interest centers on the 
                clinical and practical uses of acculturation and the impact of level of acculturation 
                and acculturative stress on mental health. Yacihuilca is also interested in understanding 
                how clinicians’ intersecting identities impacts the therapeutic relationship. She can be 
                reached at <a href="mailto:tainos1844@gmail.com">tainos1844@gmail.com</a>.
            </Typography>









            
           
        </div>

  )
};

export default OurTeam;