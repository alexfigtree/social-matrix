import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_Substance6_33(props) {
  
  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('6.26-7', '');
  localStorage.setItem('6.26-7-checkbox', '');


  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  function enableDisableTextBoxOther(id, isChecked) {
      var other = document.getElementById("other");
      other.disabled = isChecked ? false : true;
      if (!other.disabled) {
          other.focus();
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
  const handleCheckboxOther = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxOther(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('6.33-7-checkbox', "Other (please specify): ");
    }
  };

  const handleInputOther = async(event) => {
    localStorage.setItem('6.33-7', event.target.value);
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

    localStorage.setItem('6.33', temp);
    return temp; 
  };
  return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
        
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                value="No substance use of occasional user of substances"
                onChange={handleChange} 
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="No substance use of occasional user of substances"
            labelPlacement="end"
          />
         
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                value="Social user of unprescribed substances, occasional overuse"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Social user of unprescribed substances, occasional overuse"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="In recovery from chronic substance use, dependence, or addiction"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="In recovery from chronic substance use, dependence, or addiction"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="Regular substance use or chronic substance use that raises loved ones' concerns"
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Regular substance use or chronic substance use that raises loved ones' concerns"
            labelPlacement="end"
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-5"}
                value="Chronic and severe substance addiction that has led to health damage"
                onChange={handleChange} 
                name={questionNumber+"-5"}
                disabled={isDisabled(5, questionNumber+"-5")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Chronic and severe substance addiction that has led to health damage"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-6"}
                value="Close relative of someone with significant substance abuse problem"
                onChange={handleChange} 
                name={questionNumber+"-6"}
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Close relative of someone with significant substance abuse problem"
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
                id="other"
                name="other"
                label=""
                onChange={(event) => {
                    handleInputOther(event)
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

export default CheckboxInputField_Substance6_33;
