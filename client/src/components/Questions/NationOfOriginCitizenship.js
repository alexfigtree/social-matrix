import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, FormLabel, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import useStyles from '../Form/styles';
import { createPost, updatePost } from '../../actions/posts';
import CheckboxField from '../Form/CheckboxField';
import CheckboxField5_11 from '../Form/CheckboxField5_11';
import CheckboxField5_12 from '../Form/CheckboxField5_12';
import FootnoteField from '../Form/FootnoteField';
import CheckboxInputField_NOCitizenship from '../Form/CheckboxInputField_NOCitizenship';

//q12
const NationOfOriginCitizenship = () => {
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
    localStorage.setItem(event.target.name, event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempData = matrixData;

    const q5_11 = localStorage.getItem("container5.11"); //pre and post
    const q5_12 = localStorage.getItem("container5.12"); //pre and post
    const q5_13 = localStorage.getItem("container5.13"); //pre and post

    let domain12_pre_post = [...q5_11.split(','),...q5_12.split(','),...q5_13.split(',')];
    let domain12_pre_post_small = Math.min(...domain12_pre_post);
    let domain12_pre_post_large = Math.max(...domain12_pre_post);

    tempData[0][23].value = domain12_pre_post_small;
    tempData[1][23].value = domain12_pre_post_large;
    tempData[2][23].value = domain12_pre_post_small;
    tempData[3][23].value = domain12_pre_post_large;

    localStorage.setItem('matrixData', JSON.stringify(tempData));
    setMatrixData(tempData);

    //PROCESS FOOTNOTE DATA:
    let tempFootnotes =JSON.parse(localStorage.getItem('footnotes'));

    const f5_8 = localStorage.getItem("5.8");
    const f5_9 = localStorage.getItem("5.9");


    const f5_10_1_checkbox = localStorage.getItem("5.10-1-checkbox");
    const f5_10_1 = localStorage.getItem("5.10-1");
    const concat5_10_1 = f5_10_1_checkbox + f5_10_1;
    console.log("concat5_10_1", concat5_10_1);

    const f5_10_2_checkbox = localStorage.getItem("5.10-2-checkbox");
    const f5_10_2 = localStorage.getItem("5.10-2");
    const concat5_10_2 = f5_10_2_checkbox + f5_10_2;
    console.log("concat5_10_2", concat5_10_2);

    const f5_10_3_checkbox = localStorage.getItem("5.10-3-checkbox");
    const f5_10_3 = localStorage.getItem("5.10-3");
    const concat5_10_3 = f5_10_3_checkbox + f5_10_3;
    console.log("concat5_10_3", concat5_10_3);


    const f5_14 = localStorage.getItem("5.14");

    //generate concatentated string
    let concatString = 
      [f5_8, f5_9, concat5_10_1, concat5_10_2, concat5_10_3, f5_14].filter(Boolean).join("; ");
    tempFootnotes[0][23].value = concatString;
    localStorage.setItem('footnotes', JSON.stringify(tempFootnotes));



    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    history.push('/q13');
  };

/*          <Box component="div">
            <label htmlFor="formGroupExampleInput5.9"><h4>Q 5.9</h4></label>
          
            <p>
                Did PERSON have <b>live or have</b> previous citizenship in another country?
            </p>
              <input type="radio" id="5.9-yes" name="5.9" value="yes">
              <label for="yes">Yes</label><br/>
              <input type="radio" id="5.9-no" name="5.9" value="no">
              <label for="no">No</label><br/>  
              <input type="radio" id="5.9-other" name="5.9" value="other">
              <label for="other">Lived in another country without citizenship there</label><br/><br/>
        </Box>*/


/*        <Box component="div">
            <label htmlFor="formGroupExampleInput5.10"><h4>Q 5.10</h4></label>
            <br/>
            <p>
               Of which country did PERSON (or one or more of PERSON's parents) previously have citizenship? 
            </p>
            <br/>
            <Typography variant="h5" align="left">
                IMPORTANT: This information is <span style={{ textDecoration: 'underline' }}>anonymous and will not be shared with governmental authorities</span>, nor is it associated online with Person's identity or computer IP address, nor that of anyone who fills this survey out)
            </Typography>
            <br/>
            <div>
                <span>
                    <input type="checkbox" id="inlineCheckbox5.10-1" value="option1">
                </span> 
                <span>
                  <label for="inlineCheckbox5.10-1">Give name of country</label>
                </span> 
                <div>
                    <TextField id="exampleInputEmail5.10-1" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    </input>
                </div>   
            </div>
            <div>
                <span>
                    <input type="checkbox" id="inlineCheckbox5.10-2" value="option2">
                </span> 
                <span>
                  <label for="inlineCheckbox5.10-2">If previously stateless, check here, and explain (for instance, stateless Palestinian in Jordan or stateless Rohingya in Bangladesh)</label>
                </span>  
                <div>
                    <TextField id="exampleInputEmail5.10-2" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    </input>
                </div>  
            </div>
            <div>
                <span>
                    <input type="checkbox" id="inlineCheckbox5.10-3" value="option3">
                </span> 
                <span>
                  <label for="inlineCheckbox5.10-3">If PERSON also lived in additional countries before arriving in current country, list countries here</label>
                </span>   
                <div>
                    <TextField id="exampleInputEmail5.10-3" variant="outlined" label="" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    </input>
                </div> 
            </div>
        </Box>*/


  return (
    <Box className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h5">Nation of Origin / Citizenship</Typography>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.8"><h4>Q 5.8</h4></label>
   
            <Typography variant="h5" align="left">
                In what country/countries does PERSON currently have citizenship? If person has dual citizenship, please state both countries.
            </Typography>
            <Typography variant="h5" align="left">
                IMPORTANT: This information is <span style={{ textDecoration: 'underline' }}>anonymous and will not be shared with governmental authorities</span>, nor is it associated online with Person's identity or computer IP address, nor that of anyone who fills this survey out)
            </Typography>
  
            <FootnoteField id="5.8" />
        </Box>

    

        <FormControl component="fieldset" style={{ width: '100%' }}>
          <FormLabel className={classes.questionLabel} component="legend"><h4>Q 5.9</h4></FormLabel>
          <p>
                Did PERSON <b>live or have</b> previous citizenship in another country?
            </p>

            <p>State whether PERSON lived in one or more other countries and whether PERSON had citizenship 
            in one or more other countries. Please specify.</p>
          <RadioGroup aria-label="gender" id="5.9" name="5.9" onChange={handleChange}>
            <FormControlLabel name="5.9" value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel name="5.9" value="No" control={<Radio />} label="No" />
            <FormControlLabel name="5.9" value="Lived in another country without citizenship there" control={<Radio />} label="Lived in another country without citizenship there" />
          </RadioGroup>
        </FormControl>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.10"><h4>Q 5.10</h4></label>
            
            <p>Of which country did PERSON (or one or more of PERSON's parents) previously have citizenship?</p>
         
            <Typography variant="h5" align="left">
                (This information is anonymous and will not be shared with governmental authorities, nor is it associated online with Person's identity or computer IP address, nor that of anyone who fills this survey out)
            </Typography>
        
            <CheckboxInputField_NOCitizenship id="container5.10" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.11"><h4>Q 5.11</h4></label>
            
            <Typography variant="h5" align="left">
                Is/was Person:
            </Typography>
         
            <Typography variant="h5" align="left">
                (This information is anonymous and will not be shared with governmental authorities, nor is it associated online with Person's identity or computer IP address, nor that of anyone who fills this survey out)
            </Typography>
           
            <CheckboxField5_11 id="container5.11" />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.12"><h4>Q 5.12</h4></label>
          
            <p>
                How many generations has PERSON's family been in country of residence?
            </p>
            
            <CheckboxField5_12 id="container5.12" />
        </Box>


        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.13"><h4>Q 5.13</h4></label>
       
            <p>
                Whenever PERSON or PERSON's ancestors arrived, what was their reception by the country? A very welcoming response would be 1=most privileged and an extremely unwelcoming response would be 7=most marginalized.
            </p>
         
            <CheckboxField id="container5.13" />
        </Box>
        

        <Box component="div" style={{ width: '100%' }}>
            <label className={classes.questionLabel} htmlFor="formGroupExampleInput5.14"><h4>Q 5.14</h4></label>
          
            <p>
                Please briefly explain the reception that PERSON or PERSON's 
                ancestors received on coming to the country. For instance, did they 
                meet prejudice on the basis of race, religion, ethnicity, health, 
                or immigration status?
            </p>
         
            <FootnoteField id="5.14" />
        </Box>
        <Link to="/q13"><Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Next</Button></Link>

      </form>

   
    </Box>
  );
};

export default NationOfOriginCitizenship;