/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_MaritalStatus(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBoxOther(id, isChecked) {
        var otherMaritalStatus = document.getElementById("otherMaritalStatus");
        otherMaritalStatus.disabled = isChecked ? false : true;
        if (!otherMaritalStatus.disabled) {
            otherMaritalStatus.focus();
        }
    }
  //working
  const onGlobalChange = (answersArray) => {
    let globalTemp = answersArray;
    console.log("onGlobalChange array for id", globalTemp, ' ', props.id);
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
      localStorage.setItem('7.9-10-checkbox', "Other - specify");
    }
  };

  const handleOtherInput = async(event) => {
    localStorage.setItem('7.9-10', event.target.value);    
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

    localStorage.setItem('7.9', temp);

    return temp; 
  };

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                value="Married for first time"
                onChange={handleChange} 
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Married for first time"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                value="Married for second or additional time"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Married for second or additional time"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="Coupled but unmarried"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Coupled but unmarried"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="Single"
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Single"
            labelPlacement="end"
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-5"}
                onChange={handleChange} 
                value="Divorced"
                name={questionNumber+"-5"} 
                disabled={isDisabled(5, questionNumber+"-5")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Divorced"
            labelPlacement="end"
            style={{float: 'left'}}
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-6"}
                value="Widowed"
                onChange={handleChange} 
                name={questionNumber+"-6"}
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Widowed"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-7"}
                value="Separated"
                onChange={handleChange} 
                name={questionNumber+"-7"}
                disabled={isDisabled(7, questionNumber+"-7")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Separated"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-8"}
                value="Person is in a a polygamous marriage"
                onChange={handleChange} 
                name={questionNumber+"-8"}
                disabled={isDisabled(8, questionNumber+"-8")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Person is in a a polygamous marriage"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-9"}
                value="PERSON is in a polyamorous relationship or marriage"
                onChange={handleChange} 
                name={questionNumber+"-9"}
                disabled={isDisabled(9, questionNumber+"-9")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="PERSON is in a polyamorous relationship or marriage"
            labelPlacement="end"
          />
          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-10"}
                  onChange={handleCheckboxOther} 
                  value="Other - specify"
                  name={questionNumber+"-10"} 
                  disabled={isDisabled(10, questionNumber+"-10")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Other - specify"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="otherMaritalStatus"
                name="otherMaritalStatus"
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

export default CheckboxInputField_MaritalStatus;
