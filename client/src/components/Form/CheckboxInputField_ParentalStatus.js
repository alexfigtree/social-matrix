import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxInputField_ParentalStatus(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

        localStorage.setItem('7.3-1', '');
      localStorage.setItem('7.3-2', '');
      localStorage.setItem('7.3-3', '');
      localStorage.setItem('7.3-4', '');

      localStorage.setItem('7.3-5', '');
      localStorage.setItem('7.3-5-checkbox', '');
   
      localStorage.setItem('7.3-6', '');
      localStorage.setItem('7.3-7', '');
      localStorage.setItem('7.3-8', '');
      localStorage.setItem('7.3-9', '');
      localStorage.setItem('7.3-10', '');
      localStorage.setItem('7.3-11', '');
      localStorage.setItem('7.3-12', '');
      localStorage.setItem('7.3-13', '');
      localStorage.setItem('7.3-14', '');
      localStorage.setItem('7.3-15', '');

      localStorage.setItem('7.3-16', '');
      localStorage.setItem('7.3-16-checkbox', '');

  function enableDisableTextBoxRelative(id, isChecked) {
        var relative = document.getElementById("relative");
        relative.disabled = isChecked ? false : true;
        if (!relative.disabled) {
            relative.focus();
        }
    }

  function enableDisableTextBoxOther(id, isChecked) {
        var otherParentalStatus = document.getElementById("otherParentalStatus");
        otherParentalStatus.disabled = isChecked ? false : true;
        if (!otherParentalStatus.disabled) {
            otherParentalStatus.focus();
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
  const handleCheckboxRelative = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxRelative(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.3-5-checkbox', "Relative or family friend raising or fostering a child. (Please specify relationship)");
    }
    
  };
  const handleCheckboxOther = async(event) => {
    setChecked(event.target.checked);
    enableDisableTextBoxOther(event.target.id, event.target.checked);
    if(event.target.checked === true){
      localStorage.setItem('7.3-16-checkbox', "Other (please specify)");
    }
    
  };

  const handleRelativeInput = async(event) => {
    localStorage.setItem('7.3-5', event.target.value);    
  };

  const handleOtherInput = async(event) => {
    localStorage.setItem('7.3-16', event.target.value);    
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

    localStorage.setItem('7.3', temp);

    return temp; 
  };

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                value="Birth parent who raises or has already raised birth child(ren)"
                onChange={handleChange} 
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Birth parent who raises or has already raised birth child(ren)"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                value="Adoptive parent"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Adoptive parent"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="Stepparent"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Stepparent"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="Co-parent who never formally adopted child(ren)"
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Co-parent who never formally adopted child(ren)"
            labelPlacement="end"
          />

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-5"}
                  onChange={handleCheckboxRelative} 
                  value="Relative or family friend raising or fostering a child. (Please specify relationship)"
                  name={questionNumber+"-5"} 
                  disabled={isDisabled(5, questionNumber+"-5")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Relative or family friend raising or fostering a child. (Please specify relationship)"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="relative"
                name="relative"
                label=""
                onChange={(event) => {
                    handleRelativeInput(event)
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
                id={questionNumber+"-6"}
                value="Non-kin foster parent"
                onChange={handleChange} 
                name={questionNumber+"-6"}
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Non-kin foster parent"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-7"}
                value="Birth parent who gave up one or more children for adoption or who has no contact with child"
                onChange={handleChange} 
                name={questionNumber+"-7"}
                disabled={isDisabled(7, questionNumber+"-7")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Birth parent who gave up one or more children for adoption or who has no contact with child"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-8"}
                value="Birth or adoptive parent who lost custody of child or who has no contact with child"
                onChange={handleChange} 
                name={questionNumber+"-8"}
                disabled={isDisabled(8, questionNumber+"-8")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Birth or adoptive parent who lost custody of child or who has no contact with child"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-9"}
                value="Co-parent who never formally adopted who lost relationship with child(ren)"
                onChange={handleChange} 
                name={questionNumber+"-9"}
                disabled={isDisabled(9, questionNumber+"-9")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Co-parent who never formally adopted who lost relationship with child(ren)"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-10"}
                value="Parent whose child has a serious medical or mental illness, addiction, or other stigmatized identity"
                onChange={handleChange} 
                name={questionNumber+"-10"}
                disabled={isDisabled(10, questionNumber+"-10")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Parent whose child has a serious medical or mental illness, addiction, or other stigmatized identity"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-11"}
                value="Parent whose child has died"
                onChange={handleChange} 
                name={questionNumber+"-11"} 
                disabled={isDisabled(11, questionNumber+"-11")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Parent whose child has died"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-12"}
                value="Parent who had a miscarriage or stillbirth or whose partner did"
                onChange={handleChange} 
                name={questionNumber+"-12"}
                disabled={isDisabled(12, questionNumber+"-12")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Parent who had a miscarriage or stillbirth or whose partner did"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-13"}
                onChange={handleChange} 
                value="Parent who had an abortion or whose partner had an abortion"
                name={questionNumber+"-13"} 
                disabled={isDisabled(13, questionNumber+"-13")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Parent who had an abortion or whose partner had an abortion"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-14"}
                value="Nanny or servant or school staff with parenting responsibilities"
                onChange={handleChange} 
                name={questionNumber+"-14"}
                disabled={isDisabled(14, questionNumber+"-14")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Nanny or servant or school staff with parenting responsibilities"
            labelPlacement="end"
          />


          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-15"}
                value="Not a parent, guardian, or other parenting figure"
                onChange={handleChange} 
                name={questionNumber+"-15"}
                disabled={isDisabled(15, questionNumber+"-15")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Not a parent, guardian, or other parenting figure"
            labelPlacement="end"
          />

          <Box style={{flexDirection: 'row'}}>
            <FormControlLabel
              control={
                <Checkbox 
                  id={questionNumber+"-16"}
                  onChange={handleCheckboxOther} 
                  value="Other - please specify"
                  name={questionNumber+"-16"} 
                  disabled={isDisabled(16, questionNumber+"-16")}
                  iconstyle={{fill: '#000'}}
                />
              }
              label="Other - please specify"
              labelPlacement="end"
              style={{float: 'left'}}
            />
            <TextField
                id="otherParentalStatus"
                name="otherParentalStatus"
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

export default CheckboxInputField_ParentalStatus;
