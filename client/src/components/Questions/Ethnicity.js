import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';

//q11
const Ethnicity = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [matrixData, setMatrixData] = useState(JSON.parse(localStorage.getItem('matrixData')));
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

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

    const q5_6 = localStorage.getItem("container5.6"); //post
    const q5_7 = localStorage.getItem("container5.7"); //pre

    let domain11_pre = [...q5_7.split(',')];
    let domain11_pre_small = Math.min(...domain11_pre);
    let domain11_pre_large = Math.max(...domain11_pre);

    let domain11_post = [...q5_6.split(',')];
    let domain11_post_small = Math.min(...domain11_post);
    let domain11_post_large = Math.max(...domain11_post);

    tempData[0][24].value = domain11_pre_small;
    tempData[1][24].value = domain11_pre_large;
    tempData[2][24].value = domain11_post_small;
    tempData[3][24].value = domain11_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f5_5 = localStorage.getItem("5.5");

    //generate concatentated string
    let concatString = 
      [f5_5].filter(Boolean).join("; ");
    tempFootnotes[0][24].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q12');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Ethnicity/Tribe</Typography>
      

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.5"><h4>Q 5.5</h4></label>
            <br/>
            <Typography variant="h5" align="left">
                PERSON's Ethnicity(ies) or Tribe(s)
            </Typography>
            <p>
                Note that some ethnic groups can include people of any race(s). For instance, Arabs, Jews, and Latinos/Latinas/Latinx can be of any race and of many nationalities.
            </p>
            <br/>
            <p>
                Note also that "American" is not an ethnic group, but a nationality
            </p>
            <br/>
            <p>
                Race is not the same as ethnicity. For instance, a racially Black Person may be ethnically African-American, Ghanaian, Dominican, or Jamaican-American, etc. A racially White Person may have an ethnic mix of Irish, French, Polish, Swedish, Greek-American, etc.
            </p>
            <br/>
            <p>
                One person might be part Haitian-American, part Irish-American, part Cherokee, and part African-American, identifying as racially Black but ethnically mixed. A relative with the same ancestry might identify differently. <b>Tribe</b> (for instance, the Cherokee, Wampanoag, Lakota, or Inuit in North America, the Yucatec Maya in Central America, the Quechua and Wayuu in South America, the Pashtun, Hazara and Hmong of Asia, the Ibo and Xhosa of Africa, and the Maori of New Zealand) may be a more significant identification <b>than ethnicity</b> for many people. For example, A Pashtun of Afghanistan may identify more with Pashtun in Pakistan than with members of other tribes in Afghanistan.
            </p>
            <br/>
            <p>
                List <b>all</b> the ethnic group(s) or tribe(s) with which PERSON or PERSON's family of origin identifies. (Do not use "ethnicity" interchangeably with "race.")
            </p>
            <br/>

            <FootnoteField id="5.5" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.6"><h4>Q 5.6</h4></label>
            <br/>
            <p>
                Please subjectively choose how privileged or marginalized you see PERSON's ethnic or tribal identity as being, <b><span style={{ textDecoration: 'underline' }}>currently</span></b>. If PERSON identifies with more than one ethnicity or tribe, you can choose two numbers.
            </p>
            <br/>
            <CheckboxField id="container5.6" />
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput5.7"><h4>Q 5.7</h4></label>
            <br/>
            <p>
                Please subjectively choose how privileged or marginalized you see PERSON's ethnic or tribal identity as having been <b><span style={{ textDecoration: 'underline' }}>earlier</span></b>. For instance, the relative privilege or marginalization of
                PERSON's ethnic or tribal identity may have changed because of immigration or because of a historical change in the societal status of the ethnicities or tribes involved.
            </p>
            <br/>
            <p>
                If PERSON identified with more than one ethnicity or tribe, you can choose two numbers.
            </p>
            <CheckboxField id="container5.7" />
        </Box>
        
        <Link to="/q12"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default Ethnicity;