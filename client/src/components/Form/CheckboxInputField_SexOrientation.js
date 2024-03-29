/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_SexOrientation(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('7.23-7', '');
  localStorage.setItem('7.23-7-checkbox', '');

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBoxOther(id, isChecked) {
        var otherSexOrientation = document.getElementById("otherSexOrientation");
        otherSexOrientation.disabled = isChecked ? false : true;
        if (!otherSexOrientation.disabled) {
            otherSexOrientation.focus();
        }
    }
  //working
  const onGlobalChange = (answersArray) => {
    let globalTemp = answersArray;
  };

  const isDisabled = (value, idName) => {
    return (
      //this disables all checkboxes in group, even the ones that are selected
      //disable if:
      //1)answers array is too long
      answersArray.length > 1  && !answersArray.includes(value) && idName === questionNumber+'-'+value
    );
  };
  
  //for checkbox
  const handleCheckboxOther = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxOther(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.23-7-checkbox', "Other (please specify)");
    }
  };

  const handleOtherInput = async(event) => {
    localStorage.setItem('7.23-7', event.target.value);    
  };

  //call handleChange to finalize string
  const handleChange = async(event) => {
    setChecked(event.target.checked);

    let temp = answersArray;
    if(event.target.checked){
      //temp = temp + ' / ' + pushValue;
      temp.push(event.target.value);
    }else{
      //WORKING:
      //if unchecking box, do the following:
      let toDelete = temp.indexOf(parseInt(event.target.value));
      temp.splice(toDelete, 1);
    }

    localStorage.setItem('7.23', temp);

    return temp; 
  };

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                value="Straight"
                onChange={handleChange} 
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Straight"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                value="Gay or lesbian"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Gay or lesbian"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="Bisexual"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Bisexual"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="Pansexual"
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Pansexual"
            labelPlacement="end"
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-5"}
                onChange={handleChange} 
                value="Queer"
                name={questionNumber+"-5"} 
                disabled={isDisabled(5, questionNumber+"-5")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Queer"
            labelPlacement="end"
            style={{float: 'left'}}
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-6"}
                value="Asexual"
                onChange={handleChange} 
                name={questionNumber+"-6"}
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Asexual"
            labelPlacement="end"
          />
     
          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-7"}
                  onChange={handleCheckboxOther} 
                  value="Other (please specify)"
                  name={questionNumber+"-7"} 
                  disabled={isDisabled(7, questionNumber+"-7")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Other (please specify)"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="otherSexOrientation"
                name="otherSexOrientation"
                label=""
                onChange={(event) => {
                    handleOtherInput(event)
                }}
                variant="outlined" 
                fullWidth
                disabled="disabled"
                style={{float: 'right'}}
            />
          </Box>

        </FormGroup>
        
    );
};

export default CheckboxInputField_SexOrientation;
