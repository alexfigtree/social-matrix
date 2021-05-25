import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_Substance6_29(props) {
  
  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('6.29-1', '');
  localStorage.setItem('6.29-2', '');
  localStorage.setItem('6.29-3', '');
  localStorage.setItem('6.29-4', '');
  localStorage.setItem('6.29-5', '');
  localStorage.setItem('6.29-6', '');
  localStorage.setItem('6.29-7', '');
  localStorage.setItem('6.29-8', '');
  localStorage.setItem('6.29-1-checkbox', '');
  localStorage.setItem('6.29-2-checkbox', '');
  localStorage.setItem('6.29-3-checkbox', '');
  localStorage.setItem('6.29-4-checkbox', '');
  localStorage.setItem('6.29-5-checkbox', '');
  localStorage.setItem('6.29-6-checkbox', '');
  localStorage.setItem('6.29-7-checkbox', '');
  localStorage.setItem('6.29-8-checkbox', '');

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBox4(id, isChecked) {
      var box4 = document.getElementById("4");
      box4.disabled = isChecked ? false : true;
      if (!box4.disabled) {
          box4.focus();
      }
  }

  function enableDisableTextBox8(id, isChecked) {
      var box8 = document.getElementById("8");
      box8.disabled = isChecked ? false : true;
      if (!box8.disabled) {
          box8.focus();
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
  const handleCheckbox4 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox4(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.29-4-checkbox', "One or more short-term psychiatric hospitalization. If yes, specify approximately how many: ");
    }
  };

  const handleCheckbox8 = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBox8(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.29-8-checkbox', "Currently incarcerated, or previously incarcerated over 1 year (jail, prison, or immigration detention). Feel free to explain: ");
    }
  };


  const handleInput4 = async(event) => {
    localStorage.setItem('6.29-4', event.target.value);
  };

  const handleInput8 = async(event) => {
    localStorage.setItem('6.29-8', event.target.value);
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

    localStorage.setItem('6.29', temp);
    return temp; 
  };

  return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                onChange={handleChange} 
                value="No relationship with Mental Health System, except as a mental health professional"
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="No relationship with Mental Health System, except as a mental health professional"
            labelPlacement="end"
            style={{float: 'left'}}
          />
           

         
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                onChange={handleChange} 
                value="Currently or previously in short-term outpatient psychiatric treatment or psychotherapy"
                name={questionNumber+"-2"} 
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Currently or previously in short-term outpatient psychiatric treatment or psychotherapy"
            labelPlacement="end"
            style={{float: 'left'}}
          />
     
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="In long-term outpatient psychiatric treatment or psychotherapy"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="In long-term outpatient psychiatric treatment or psychotherapy"
            labelPlacement="end"
            style={{float: 'left'}}
          />

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-4"}
                  onChange={handleCheckbox4} 
                  value="One or more short-term psychiatric hospitalization. If yes, specify approximately how many"
                  name={questionNumber+"-4"} 
                  disabled={isDisabled(4, questionNumber+"-4")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="One or more short-term psychiatric hospitalization. If yes, specify approximately how many"
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

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-5"}
                onChange={handleChange} 
                value="One or more long-term psychiatric hospitalization, but not currently in hospital"
                name={questionNumber+"-5"} 
                disabled={isDisabled(5, questionNumber+"-5")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="One or more long-term psychiatric hospitalization, but not currently in hospital"
            labelPlacement="end"
            style={{float: 'left'}}
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-6"}
                onChange={handleChange} 
                value="Currently psychiatrically hospitalized"
                name={questionNumber+"-6"} 
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Currently psychiatrically hospitalized"
            labelPlacement="end"
            style={{float: 'left'}}
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-7"}
                onChange={handleChange} 
                value="On disability or not able to work or attend school because of mental health problems"
                name={questionNumber+"-7"} 
                disabled={isDisabled(7, questionNumber+"-7")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="On disability or not able to work or attend school because of mental health problems"
            labelPlacement="end"
            style={{float: 'left'}}
          />
         

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-8"}
                  onChange={handleCheckbox8} 
                  value="Please explain reason for above response"
                  name={questionNumber+"-8"} 
                  disabled={isDisabled(8, questionNumber+"-8")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Please explain reason for above response"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="8"
                name="8"
                label=""
                onChange={(event) => {
                    handleInput8(event)
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

export default CheckboxInputField_Substance6_29;
