import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import FootnoteField from '../Form/FootnoteField';
import CheckboxInputField_Military from '../Form/CheckboxInputField_Military';
//q19
const RelationToMilitary = () => {
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

  const handleChange = async (event) => {
    console.log('CHANGEIN EVENT NAME', event.target.name);
    console.log('CHANGEIN EVENT VALUE', event.target.value);
    localStorage.setItem(event.target.name, event.target.value);
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q6_25 = localStorage.getItem("container6.25"); //pre
    const q6_24 = localStorage.getItem("container6.24"); //post

    let domain19_pre = [...q6_25.split(',')];
    let domain19_pre_small = Math.min(...domain19_pre);
    let domain19_pre_large = Math.max(...domain19_pre);


    let domain19_post = [...q6_24.split(',')];
    let domain19_post_small = Math.min(...domain19_post);
    let domain19_post_large = Math.max(...domain19_post);


    tempData[0][16].value = domain19_pre_small;
    tempData[1][16].value = domain19_pre_large;
    tempData[2][16].value = domain19_post_small;
    tempData[3][16].value = domain19_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);


    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f6_19 = localStorage.getItem("6.19");
    const f6_20 = localStorage.getItem("6.20");
    const f6_21 = localStorage.getItem("6.21");
    const f6_22 = localStorage.getItem("6.22");
    //const f6_23 = localStorage.getItem("6.23");


    //generate concatentated string
    let concatString = 
      [f6_19, f6_20, f6_21, f6_22].filter(Boolean).join("; ");
    tempFootnotes[0][16].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));


    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q20');
  };

  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Relation to Military</Typography>
       
        <Box component="div" style={{ width: '100%' }}>
          <label><h4>Q 6.19</h4></label>
          <label><h4>History with the Military</h4></label>
          
          <p>
                Does PERSON or PERSON's close family relative have a past or present relationship to the military, or to any nongovernmental military group?
            </p>
          <RadioGroup aria-label="gender" id="6.19" name="6.19" onChange={handleChange}>
            <FormControlLabel name="6.19" value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel name="6.19" value="No" control={<Radio />} label="No" />
            <FormControlLabel name="6.19" value="I'm not sure" control={<Radio />} label="I'm not sure" />
          </RadioGroup>
       
        </Box>

        <Box component="div">
            <label htmlFor="formGroupExampleInput6.20"><h4>Q 6.20</h4></label>
            
            <p>
              Please name PERSON's <b>relationship to the Military.</b> For example, is 
              PERSON on active duty in the military, a reservist, or an honorably 
              or dishonorably discharged veteran, or the spouse, child, parent, 
              sibling, or other close relative of a military member or veteran, 
              or a civilian employee of the military?
            </p>
            <br/>
            <p>
                What was PERSON's or relative's <b>rank</b> in the military, if known?
            </p>
            <br/>
            <p>
                Alternatively, has PERSON lived as a civilian in a community that is 
                affected by conflict or has an active military presence?
            </p>
            <br/>
            <p>
                Please use space below to describe person's current or previous relation 
                to military and rank.
            </p>
            <p>
                If none, write N/A
            </p>

            <FootnoteField id="6.20" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
          <label><h4>Q 6.21</h4></label>
          <p>
            Was PERSON or PERSON's relative in a combat zone as member of military?
          </p>
          <RadioGroup aria-label="gender" id="6.21" name="6.21" onChange={handleChange}>
            <FormControlLabel name="6.21" value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel name="6.21" value="No" control={<Radio />} label="No" />
          </RadioGroup>
       
        </Box>

        <Box component="div" style={{ width: '100%' }}>
          <label><h4>Q 6.22</h4></label>
          <p>
            Did PERSON or PERSON's relative get injured or killed in the line of duty, 
            or experience psychological trauma as a result of military duty?
          </p>
          <RadioGroup aria-label="gender" id="6.22" name="6.22" onChange={handleChange}>
            <FormControlLabel name="6.22" value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel name="6.22" value="No" control={<Radio />} label="No" />
          </RadioGroup>
       
        </Box>


        <Box component="div">
            <label htmlFor="formGroupExampleInput6.23"><h4>Q 6.23</h4></label>
        
            <Typography variant="h5" align="left">Nature of PERSON's relationship 
            to the Military
            </Typography>
       
            <p>
                If PERSON was in military service, was PERSON or relative in a 
                government-sponsored military unit or in a paramilitary or 
                guerrilla combat group? or was a child soldier, include that 
                information as well. <b>Please check all that apply</b>
            </p>
    
            <CheckboxInputField_Military id="6.23" />
        </Box>



        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.24"><h4>Q 6.24</h4></label>
            
            <p>
                Rate PERSON's <b>current</b> privilege or marginalization in relation to the military. (Please select one).
            </p>
            <p>
                Please select one even if no relationship to the military.
            </p>
            <CheckboxField id="container6.24" />
        </Box>

     
        <Box component="div" style={{ width: '100%' }}>
            <label htmlFor="formGroupExampleInput6.25"><h4>Q 6.25</h4></label>
           
            <p>
                Rate PERSON's <b>previous</b> privilege or marginalization in relation to the military. (Please select one).
            </p>
            <p>
                Please select one even if no relationship to the military.
            </p>
            <CheckboxField id="container6.25" />
        </Box>

        <Link to="/q20"><Button onClick={handleSubmit} style={{ marginTop: '20px' }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>
        
        

      </form>

   
    </Box>
  );
};

export default RelationToMilitary;
