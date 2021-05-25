import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_Military(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('6.23-5', '');
  localStorage.setItem('6.23-5-checkbox', '');

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBoxOther(id, isChecked) {
        var otherMilitary = document.getElementById("otherMilitary");
        otherMilitary.disabled = isChecked ? false : true;
        if (!otherMilitary.disabled) {
            otherMilitary.focus();
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
      localStorage.setItem('6.23-5-checkbox', "Other (please specify): ");
    }
    
  };

  const handleOtherInput = async(event) => {
    localStorage.setItem('6.23-5', event.target.value);    
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

    localStorage.setItem('6.23', temp);
    return temp; 
  };

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                value="Government-sponsored military group"
                onChange={handleChange} 
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Government-sponsored military group"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                value="Paramilitary or guerrilla military group"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Paramilitary or guerrilla military group"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="Child soldier"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Child soldier"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="military sex slave"
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="military sex slave"
            labelPlacement="end"
          />

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-5"}
                  onChange={handleCheckboxOther} 
                  value="Other - please specify"
                  name={questionNumber+"-5"} 
                  disabled={isDisabled(5, questionNumber+"-5")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Other - please specify"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="otherMilitary"
                name="otherMilitary"
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

export default CheckboxInputField_Military;
