/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost, createMatrix, createFootnotes, updateMatrix, updateFootnotes } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q34
const UniqueHistory = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const [footnotesData, setFootnotesData] = useState(JSON.parse(localStorage.getItem('footnotes')));
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();


  const matrix = useSelector((state) => (currentId ? state.matrixData.find((matrixData) => matrixData._id === currentId) : null));
  const footnotes = useSelector((state) => (currentId ? state.footnotes.find((footnotesData) => footnotes._id === currentId) : null));


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  useEffect(() => {
      var retrievedObject = localStorage.getItem('matrixData');
      console.log('retrievedObject', JSON.parse(retrievedObject));

      var retrievedFootnotes = localStorage.getItem('footnotes');
      console.log('retrievedFootnotes', JSON.parse(retrievedFootnotes));
  }, []);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q7_28 = localStorage.getItem("container7.28"); //pre
    const q7_27 = localStorage.getItem("container7.27"); //post

    let domain34_pre_not_null = [q7_28].filter(function (el) {
      return el !== null;
    });
    let domain34_pre_small = Math.min(...domain34_pre_not_null);
    let domain34_pre_large = Math.max(...domain34_pre_not_null);

    let domain34_post_not_null = [q7_27].filter(function (el) {
      return el !== null;
    });
    let domain34_post_small = Math.min(...domain34_post_not_null);
    let domain34_post_large = Math.max(...domain34_post_not_null);

    tempData[0][1].value = domain34_pre_small;
    tempData[1][1].value = domain34_pre_large;
    tempData[2][1].value = domain34_post_small;
    tempData[3][1].value = domain34_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f7_26 = localStorage.getItem("7.26");

    //generate concatentated string
    let concatString = 
      [f7_26].filter(Boolean).join("; ");
    tempFootnotes[0][1].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));




  //const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  //const [footnotesData, setFootnotes] = useState(localStorage.getItem('footnotes'));

  //const dispatch = useDispatch();
  //const classes = useStyles();

    if (currentId === 0) {

      dispatch(createMatrix(tempData));
      dispatch(createFootnotes(tempFootnotes));
      clear();
    } else {
      dispatch(updateMatrix(currentId, matrixData));
      dispatch(updateFootnotes(currentId, footnotesData));
      clear();
    }

    history.push('/results');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Unique History</Typography>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.26"><h4>Q 7.26</h4></label>
            <p>
                <b>Unique Individual/Family History</b>
            </p>
            <p>
                Specify any events or circumstances that may not be addressed 
                elsewhere in the matrix, (e.g., untimely bereavement, personal 
                or family trauma history, having been affected by a disaster of 
                some kind. Also consider how being in a famous (or infamous) or 
                extremely wealthy family might provide privilege). Other 
                possibilities include, for instance, growing up as a twin or 
                triplet, growing up with a very sick sibling or parent, or the like.
            </p>
            <p>
                Describe this history briefly – if no such history, please 
                write in “N/A” for not applicable
            </p>
            <FootnoteField id="7.26" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.27"><h4>Q 7.27</h4></label>
         
            <p>
                Rate PERSON'S <b>CURRENT</b> relative privilege or marginalization in relation to unique individual or family history (PERSON might have more than one answer because of having more privilege in one unique area than in another unique area).
            </p>
         
            <CheckboxField id="container7.27" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput7.28"><h4>Q 7.28</h4></label>
           
            <p>
                Rate PERSON'S <b>PREVIOUS</b> relative privilege or marginalization in relation to unique individual or family history (PERSON might have more than one answer because of having more privilege in one unique area than in another unique area).
            </p>
           
            <CheckboxField id="container7.28" />
        </Box>
        <Link to="/results"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>FINISH</Button></Link>

      </form>

   
    </Box>
  );
};

export default UniqueHistory;
