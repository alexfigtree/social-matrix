/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_GenderExpression(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('7.20-1', '');
  localStorage.setItem('7.20-1-checkbox', '');

  localStorage.setItem('7.20-2', '');
  localStorage.setItem('7.20-2-checkbox', '');

  localStorage.setItem('7.20-3', '');
  localStorage.setItem('7.20-3-checkbox', '');

  localStorage.setItem('7.20-4', '');
  localStorage.setItem('7.20-4-checkbox', '');

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBoxNormative(id, isChecked) {
        var normativeGenderExpression = document.getElementById("normativeGenderExpression");
        normativeGenderExpression.disabled = isChecked ? false : true;
        if (!normativeGenderExpression.disabled) {
            normativeGenderExpression.focus();
        }
    }

  function enableDisableTextBoxNonconforming(id, isChecked) {
        var nonconformingGenderExpression = document.getElementById("nonconformingGenderExpression");
        nonconformingGenderExpression.disabled = isChecked ? false : true;
        if (!nonconformingGenderExpression.disabled) {
            nonconformingGenderExpression.focus();
        }
    }

  function enableDisableTextBoxFluid(id, isChecked) {
        var fluidGenderExpression = document.getElementById("fluidGenderExpression");
        fluidGenderExpression.disabled = isChecked ? false : true;
        if (!fluidGenderExpression.disabled) {
            fluidGenderExpression.focus();
        }
    }

  function enableDisableTextBoxOther(id, isChecked) {
        var otherGenderExpression = document.getElementById("otherGenderExpression");
        otherGenderExpression.disabled = isChecked ? false : true;
        if (!otherGenderExpression.disabled) {
            otherGenderExpression.focus();
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
  const handleCheckboxNormative = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxNormative(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.20-1-checkbox', "Gender-normative or gender-conforming (presenting consistently with traditional gender expectations. For instance, a woman wearing feminine clothing, hair style, and perhaps makeup). Please explain choice.");
    }
  };
  const handleCheckboxNonconforming = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxNonconforming(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.20-2-checkbox', "Gender-nonconforming (not conforming with traditional gender expectations). For instance, a man who wears long hair and “feminine” clothing, and jewelry may be cisgender and straight, cisgender and gay, or gender-fluid and gay or genderqueer. Please explain choice.");
    }
  };
    const handleCheckboxFluid = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxFluid(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.20-3-checkbox', "Gender-fluid, in which one shifts often between presentations associated with “masculine,” “feminine,” or mixes the two (for instance, wearing eyeliner, a long skirt and dangly earrings together with a men’s shirt, tie, and work boots). Gender expression is culturally and historically determined. Please explain choice.");
    }
  };
  const handleCheckboxOther = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxOther(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.20-4-checkbox', "Other (please specify)");
    }
  };


  const handleNormativeInput = async(event) => {
    localStorage.setItem('7.20-1', event.target.value);    
  };
  const handleNonconformingInput = async(event) => {
    localStorage.setItem('7.20-2', event.target.value);    
  };
  const handleFluidInput = async(event) => {
    localStorage.setItem('7.20-3', event.target.value);    
  };
  const handleOtherInput = async(event) => {
    localStorage.setItem('7.20-4', event.target.value);    
  };

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
     
          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-1"}
                  onChange={handleCheckboxNormative} 
                  value="Gender-normative or gender-conforming (presenting consistently with traditional gender expectations. For instance, a woman wearing feminine clothing, hair style, and perhaps makeup). Please explain choice."
                  name={questionNumber+"-1"} 
                  disabled={isDisabled(1, questionNumber+"-1")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Gender-normative or gender-conforming (presenting consistently with traditional gender expectations. For instance, a woman wearing feminine clothing, hair style, and perhaps makeup). Please explain choice."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="normativeGenderExpression"
                name="normativeGenderExpression"
                label=""
                onChange={(event) => {
                    handleNormativeInput(event)
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
                  onChange={handleCheckboxNonconforming} 
                  value="Gender-nonconforming (not conforming with traditional gender expectations). For instance, a man who wears long hair and “feminine” clothing, and jewelry may be cisgender and straight, cisgender and gay, or gender-fluid and gay or genderqueer. Please explain choice."
                  name={questionNumber+"-2"} 
                  disabled={isDisabled(2, questionNumber+"-2")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Gender-nonconforming (not conforming with traditional gender expectations). For instance, a man who wears long hair and “feminine” clothing, and jewelry may be cisgender and straight, cisgender and gay, or gender-fluid and gay or genderqueer. Please explain choice."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="nonconformingGenderExpression"
                name="nonconformingGenderExpression"
                label=""
                onChange={(event) => {
                    handleNonconformingInput(event)
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
                  onChange={handleCheckboxFluid} 
                  value="Gender-fluid, in which one shifts often between presentations associated with “masculine,” “feminine,” or mixes the two (for instance, wearing eyeliner, a long skirt and dangly earrings together with a men’s shirt, tie, and work boots). Gender expression is culturally and historically determined. Please explain choice."
                  name={questionNumber+"-3"} 
                  disabled={isDisabled(3, questionNumber+"-3")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Gender-fluid, in which one shifts often between presentations associated with “masculine,” “feminine,” or mixes the two (for instance, wearing eyeliner, a long skirt and dangly earrings together with a men’s shirt, tie, and work boots). Gender expression is culturally and historically determined. Please explain choice."
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="fluidGenderExpression"
                name="fluidGenderExpression"
                label=""
                onChange={(event) => {
                    handleFluidInput(event)
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
                  onChange={handleCheckboxOther} 
                  value="Other (please explain)"
                  name={questionNumber+"-4"} 
                  disabled={isDisabled(4, questionNumber+"-4")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Other (please explain)"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="otherGenderExpression"
                name="otherGenderExpression"
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

export default CheckboxInputField_GenderExpression;
