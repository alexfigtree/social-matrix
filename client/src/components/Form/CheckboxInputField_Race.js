import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';


function CheckboxInputField_Race(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('5.1-5', '');
  localStorage.setItem('5.1-7', '');

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

	function enableDisableTextBoxMixed(id, isChecked) {
        var mixedRace = document.getElementById("mixedRace");
        mixedRace.disabled = isChecked ? false : true;
        if (!mixedRace.disabled) {
            mixedRace.focus();
        }
    }

	function enableDisableTextBoxOther(id, isChecked) {
        var otherRace = document.getElementById("otherRace");
        otherRace.disabled = isChecked ? false : true;
        if (!otherRace.disabled) {
            otherRace.focus();
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
	const handleCheckboxMixed = async(event) => {
		setChecked(event.target.checked);
	enableDisableTextBoxMixed(event.target.id, event.target.checked);

	};

	const handleCheckboxOther = async(event) => {
		setChecked(event.target.checked);
	enableDisableTextBoxOther(event.target.id, event.target.checked);
	};

	const handleMixedInput = async(event) => {
		localStorage.setItem('5.1-5', event.target.value);
	};

	const handleOtherInput = async(event) => {
		localStorage.setItem('5.1-7', event.target.value);		
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

		localStorage.setItem('5.1', temp);
		return temp; 
	};

    return (

      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-1"}
                value="Asian/Pacific Islander"
                onChange={handleChange} 
                name={questionNumber+"-1"} 
                disabled={isDisabled(1, questionNumber+"-1")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Asian/Pacific Islander"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-2"}
                value="Black"
                onChange={handleChange} 
                name={questionNumber+"-2"}
                disabled={isDisabled(2, questionNumber+"-2")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Black"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-3"}
                onChange={handleChange} 
                value="Indigenous/Native American/First Nations People"
                name={questionNumber+"-3"} 
                disabled={isDisabled(3, questionNumber+"-3")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Indigenous/Native American/First Nations People"
            labelPlacement="end"
          />

          <FormControlLabel
            control={
              <Checkbox 
                id={questionNumber+"-4"}
                value="Middle Eastern/North African"
                onChange={handleChange} 
                name={questionNumber+"-4"}
                disabled={isDisabled(4, questionNumber+"-4")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="Middle Eastern/North African"
            labelPlacement="end"
          />

          <Box style={{flexDirection: 'row'}}>
	          <FormControlLabel
	            control={
	              <Checkbox 
	                id={questionNumber+"-5"}
	                onChange={handleCheckboxMixed} 
	                value="Mixed race (specify which races)"
	                name={questionNumber+"-5"} 
	                disabled={isDisabled(5, questionNumber+"-5")}
	                iconstyle={{fill: '#000'}}
	              />
	            }
	            label="Mixed race (specify which races)"
	            labelPlacement="end"
	            style={{float: 'left'}}
	          />
	          <TextField
		            id="mixedRace"
		            name="mixedRace"
		            label=""
		            onChange={(event) => {
		                handleMixedInput(event)
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
                onChange={handleChange} 
                value="White"
                name={questionNumber+"-6"}
                disabled={isDisabled(6, questionNumber+"-6")}
                iconstyle={{fill: '#000'}}
              />
            }
            label="White"
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
		            id="otherRace"
		            name="otherRace"
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

export default CheckboxInputField_Race;