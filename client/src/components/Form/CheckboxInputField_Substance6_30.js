/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_Substance6_30(props) {
  
  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('6.30-2', '');
  localStorage.setItem('6.30-4', '');
  localStorage.setItem('6.30-5', '');
  localStorage.setItem('6.30-6', '');
  localStorage.setItem('6.30-7', '');
  localStorage.setItem('6.30-2-checkbox', '');
  localStorage.setItem('6.30-4-checkbox', '');
  localStorage.setItem('6.30-5-checkbox', '');
  localStorage.setItem('6.30-6-checkbox', '');
  localStorage.setItem('6.30-7-checkbox', '');


  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);


  function enableDisableTextBox2(id, isChecked) {
      var box2 = document.getElementById("2");
      box2.disabled = isChecked ? false : true;
      if (!box2.disabled) {
          box2.focus();
      }
  }

  function enableDisableTextBox4(id, isChecked) {
      var box4 = document.getElementById("4");
      box4.disabled = isChecked ? false : true;
      if (!box4.disabled) {
          box4.focus();
      }
  }

  function enableDisableTextBox5(id, isChecked) {
      var box5 = document.getElementById("5");
      box5.disabled = isChecked ? false : true;
      if (!box5.disabled) {
          box5.focus();
      }
  }

  function enableDisableTextBox6(id, isChecked) {
      var box6 = document.getElementById("6");
      box6.disabled = isChecked ? false : true;
      if (!box6.disabled) {
          box6.focus();
      }
  }

  function enableDisableTextBox7(id, isChecked) {
      var box7 = document.getElementById("7");
      box7.disabled = isChecked ? false : true;
      if (!box7.disabled) {
          box7.focus();
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
  
  //for checkbox:
  const handleCheckbox2 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox2(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.30-2-checkbox', "Previous or current short-term, minor depression, anxiety, or traumatic stress and/or behavior problem, now improved. Please specify: ");
    }
  };

  const handleCheckbox4 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox4(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.30-4-checkbox', "In remission from an episode of a major mental illness. Please specify: ");
    }
  };

  const handleCheckbox5 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox5(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.30-5-checkbox', "Close family member of someone living with mental illness. Please specify relationship and nature of the problem: ");
    }
  };

  const handleCheckbox6 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox6(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.30-6-checkbox', "Several months into an episode of chronic major mental illness, or PTSD that has not improved with treatment. Please specify problem: ");
    }
  };

  const handleCheckbox7 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox7(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.30-7-checkbox', "Current chronic major mental illness or PTSD that is not improving. Please specify problem: ");
    }
  };

  const handleInput2 = async(event) => {
    localStorage.setItem('6.30-2', event.target.value);
  };

  const handleInput4 = async(event) => {
    localStorage.setItem('6.30-4', event.target.value);
  };

  const handleInput5 = async(event) => {
    localStorage.setItem('6.30-5', event.target.value);
  };

  const handleInput6 = async(event) => {
    localStorage.setItem('6.30-6', event.target.value);   
  };

  const handleInput7 = async(event) => {
    localStorage.setItem('6.30-7', event.target.value);
  };

  //call handleChange to finalize string
  const handleChange = async(event) => {
    setChecked(event.target.checked);

    let temp = answersArray;
    if(event.target.checked){
      temp.push(event.target.value);
    }else{
      //WORKING:
      //if unchecking box, do the following:
      let toDelete = temp.indexOf(parseInt(event.target.value));
      temp.splice(toDelete, 1);
    }

    localStorage.setItem('6.30', temp);
    return temp; 
  };
  return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>  
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                onChange={handleChange} 
                value="No history of mental health problems"
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="No history of mental health problems"
            labelPlacement="end"
            style={{float: 'left'}}
          />

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-2"}
                  onChange={handleCheckbox2} 
                  value="Previous or current short-term, minor depression, anxiety, or traumatic stress and/or behavior problem, now improved. Please specify"
                  name={questionNumber+"-2"} 
                  disabled={isDisabled(2, questionNumber+"-2")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Previous or current short-term, minor depression, anxiety, or traumatic stress and/or behavior problem, now improved. Please specify"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="2"
                name="2"
                label=""
                onChange={(event) => {
                    handleInput2(event)
                }}
                variant="outlined" 
                fullWidth
                disabled="disabled"
                style={{float: 'right'}}
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="Current chronic, moderate depression or anxiety or traumatic stress"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Current chronic, moderate depression or anxiety or traumatic stress"
            labelPlacement="end"
            style={{float: 'left'}}
          />

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-4"}
                  onChange={handleCheckbox4} 
                  value="In remission from an episode of a major mental illness. Please specify."
                  name={questionNumber+"-4"} 
                  disabled={isDisabled(4, questionNumber+"-4")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="In remission from an episode of a major mental illness. Please specify."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="4"
                name="4"
                label=""
                onChange={(event) => {
                    handleInput4(event)
                }}
                variant="outlined" 
                fullWidth
                disabled="disabled"
                style={{float: 'right'}}
            />
          </Box>

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-5"}
                  onChange={handleCheckbox5} 
                  value="Close family member of someone living with mental illness. Please specify relationship and nature of the problem."
                  name={questionNumber+"-5"} 
                  disabled={isDisabled(5, questionNumber+"-5")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Close family member of someone living with mental illness. Please specify relationship and nature of the problem."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="5"
                name="5"
                label=""
                onChange={(event) => {
                    handleInput5(event)
                }}
                variant="outlined" 
                fullWidth
                disabled="disabled"
                style={{float: 'right'}}
            />
          </Box>


          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-6"}
                  onChange={handleCheckbox6} 
                  value="Several months into an episode of chronic major mental illness, or PTSD that has not improved with treatment. Please specify problem."
                  name={questionNumber+"-6"} 
                  disabled={isDisabled(6, questionNumber+"-6")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Several months into an episode of chronic major mental illness, or PTSD that has not improved with treatment. Please specify problem."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="6"
                name="6"
                label=""
                onChange={(event) => {
                    handleInput6(event)
                }}
                variant="outlined" 
                fullWidth
                disabled="disabled"
                style={{float: 'right'}}
            />
          </Box>


          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-7"}
                  onChange={handleCheckbox7} 
                  value="Current chronic major mental illness or PTSD that is not improving. Please specify problem."
                  name={questionNumber+"-7"} 
                  disabled={isDisabled(7, questionNumber+"-7")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Current chronic major mental illness or PTSD that is not improving. Please specify problem."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="7"
                name="7"
                label=""
                onChange={(event) => {
                    handleInput7(event)
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

export default CheckboxInputField_Substance6_30;
