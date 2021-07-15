/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_Legal(props) {
  
  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('6.26-1', '');
  localStorage.setItem('6.26-2', '');
  localStorage.setItem('6.26-3', '');
  localStorage.setItem('6.26-4', '');
  localStorage.setItem('6.26-5', '');
  localStorage.setItem('6.26-6', '');
  localStorage.setItem('6.26-7', '');
  localStorage.setItem('6.26-1-checkbox', '');
  localStorage.setItem('6.26-2-checkbox', '');
  localStorage.setItem('6.26-3-checkbox', '');
  localStorage.setItem('6.26-4-checkbox', '');
  localStorage.setItem('6.26-5-checkbox', '');
  localStorage.setItem('6.26-6-checkbox', '');
  localStorage.setItem('6.26-7-checkbox', '');


  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBox1(id, isChecked) {
      var box1 = document.getElementById("1");
      box1.disabled = isChecked ? false : true;
      if (!box1.disabled) {
          box1.focus();
      }
  }

  function enableDisableTextBox2(id, isChecked) {
      var box2 = document.getElementById("2");
      box2.disabled = isChecked ? false : true;
      if (!box2.disabled) {
          box2.focus();
      }
  }

  function enableDisableTextBox3(id, isChecked) {
      var box3 = document.getElementById("3");
      box3.disabled = isChecked ? false : true;
      if (!box3.disabled) {
          box3.focus();
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
  const handleCheckbox1 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox1(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-1-checkbox', "No contact with system, or contact only as a legal professional. Feel free to explain: ");
    }
  };

  const handleCheckbox2 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox2(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-2-checkbox', "Plaintiff in a criminal case (person who lodges a complaint against a defendant). Feel free to explain: ");
    }
  };

  const handleCheckbox3 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox3(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-3-checkbox', "Involved in family court case and/or child protective services, or has had a close family member involved in legal system as a defendant or victim. Feel free to explain: ");
    }
  };

  const handleCheckbox4 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox4(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-4-checkbox', "1+ arrest(s), no conviction. Feel free to explain: ");
    }
  };

  const handleCheckbox5 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox5(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-5-checkbox', "1+ conviction(s), on probation (without having been incarcerated) or has had a close family member who was incarcerated in the past. Feel free to explain: ");
    }
  };

  const handleCheckbox6 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox6(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-6-checkbox', "1+ conviction(s), formerly incarcerated under 1 year (jail, prison or immigration detention) OR has an immediate family member who is currently incarcerated (jail, prison or immigration detention). Feel free to explain: ");
    }
  };

  const handleCheckbox7 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox7(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.26-7-checkbox', "Currently incarcerated, or previously incarcerated over 1 year (jail, prison, or immigration detention). Feel free to explain: ");
    }
  };

  const handleInput1 = async(event) => {
    localStorage.setItem('6.26-1', event.target.value);
  };

  const handleInput2 = async(event) => {
    localStorage.setItem('6.26-2', event.target.value);
  };

  const handleInput3 = async(event) => {
    localStorage.setItem('6.26-3', event.target.value);   
  };

  const handleInput4 = async(event) => {
    localStorage.setItem('6.26-4', event.target.value);
  };

  const handleInput5 = async(event) => {
    localStorage.setItem('6.26-5', event.target.value);
  };

  const handleInput6 = async(event) => {
    localStorage.setItem('6.26-6', event.target.value);   
  };

  const handleInput7 = async(event) => {
    localStorage.setItem('6.26-7', event.target.value);
  };

  return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-1"}
                  onChange={handleCheckbox1} 
                  value="No contact with system, or contact only as a legal professional. Feel free to explain."
                  name={questionNumber+"-1"} 
                  disabled={isDisabled(1, questionNumber+"-1")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="No contact with system, or contact only as a legal professional. Feel free to explain."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="1"
                name="1"
                label=""
                onChange={(event) => {
                    handleInput1(event)
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
                  id={questionNumber+"-2"}
                  onChange={handleCheckbox2} 
                  value="Plaintiff in a criminal case (person who lodges a complaint against a defendant). Feel free to explain."
                  name={questionNumber+"-2"} 
                  disabled={isDisabled(2, questionNumber+"-2")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Plaintiff in a criminal case (person who lodges a complaint against a defendant). Feel free to explain."
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

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-3"}
                  onChange={handleCheckbox3} 
                  value="Involved in family court case and/or child protective services, or has had a close family member involved in legal system as a defendant or victim. Feel free to explain."
                  name={questionNumber+"-3"} 
                  disabled={isDisabled(3, questionNumber+"-3")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Involved in family court case and/or child protective services, or has had a close family member involved in legal system as a defendant or victim. Feel free to explain."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="3"
                name="3"
                label=""
                onChange={(event) => {
                    handleInput3(event)
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
                  id={questionNumber+"-4"}
                  onChange={handleCheckbox4} 
                  value="1+ arrest(s), no conviction. Feel free to explain."
                  name={questionNumber+"-4"} 
                  disabled={isDisabled(4, questionNumber+"-4")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="1+ arrest(s), no conviction. Feel free to explain."
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
                  id={questionNumber+"-6"}
                  onChange={handleCheckbox6} 
                  value="1+ conviction(s), formerly incarcerated under 1 year (jail, prison or immigration detention) OR has an immediate family member who is currently incarcerated (jail, prison or immigration detention). Feel free to explain."
                  name={questionNumber+"-6"} 
                  disabled={isDisabled(6, questionNumber+"-6")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="1+ conviction(s), formerly incarcerated under 1 year (jail, prison or immigration detention) OR has an immediate family member who is currently incarcerated (jail, prison or immigration detention). Feel free to explain."
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
                  value="Currently incarcerated, or previously incarcerated over 1 year (jail, prison, or immigration detention). Feel free to explain."
                  name={questionNumber+"-7"} 
                  disabled={isDisabled(7, questionNumber+"-7")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Currently incarcerated, or previously incarcerated over 1 year (jail, prison, or immigration detention). Feel free to explain."
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

export default CheckboxInputField_Legal;
