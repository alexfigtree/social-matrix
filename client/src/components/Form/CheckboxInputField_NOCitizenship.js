/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typograph, TextField } from '@material-ui/core';


function CheckboxInputField_NOCitizenship(props) {

  const [checked, setChecked] = React.useState(true);

  const [answersArray, setAnswersArray] = useState([]);

  localStorage.setItem('5.10-1', '');
  localStorage.setItem('5.10-2', '');
  localStorage.setItem('5.10-3', '');
  localStorage.setItem('5.10-1-checkbox', '');
  localStorage.setItem('5.10-2-checkbox', '');
  localStorage.setItem('5.10-3-checkbox', '');

  const questionNumber = props.id;

  const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

	function enableDisableTextBoxNOC(id, isChecked) {
        var noc = document.getElementById("noc");
        noc.disabled = isChecked ? false : true;
        if (!noc.disabled) {
            noc.focus();
        }
    }

	function enableDisableTextBoxStateless(id, isChecked) {
        var stateless = document.getElementById("stateless");
        stateless.disabled = isChecked ? false : true;
        if (!stateless.disabled) {
            stateless.focus();
        }
    }

	function enableDisableTextBoxAdditional(id, isChecked) {
        var additional = document.getElementById("additional");
        additional.disabled = isChecked ? false : true;
        if (!additional.disabled) {
            additional.focus();
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
	const handleCheckboxNOC = async(event) => {
		setChecked(event.target.checked);
		enableDisableTextBoxNOC(event.target.id, event.target.checked);
		if(event.target.checked === true){
			localStorage.setItem('5.10-1-checkbox', "Give name of country: ");
		}
	};

	const handleCheckboxStateless = async(event) => {
		setChecked(event.target.checked);
		enableDisableTextBoxStateless(event.target.id, event.target.checked);
		if(event.target.checked === true){
			localStorage.setItem('5.10-2-checkbox', "If previously stateless, check here, and explain (for instance, stateless Palestinian in Jordan or stateless Rohingya in Bangladesh): ");
		}
	};

	const handleCheckboxAdditional = async(event) => {
		setChecked(event.target.checked);
		enableDisableTextBoxAdditional(event.target.id, event.target.checked);
		if(event.target.checked === true){
			localStorage.setItem('5.10-3-checkbox', "If PERSON also lived in additional countries before arriving in current country, list countries here: ");
		}
		
	};

	const handleNOCInput = async(event) => {
		localStorage.setItem('5.10-1', event.target.value);
	};

	const handleStatelessInput = async(event) => {
		localStorage.setItem('5.10-2', event.target.value);
	};

	const handleAdditionalInput = async(event) => {
		localStorage.setItem('5.10-3', event.target.value);		
	};

    return (
      <FormGroup style={{flexDirection: 'column'}} onChange={onGlobalChange(answersArray)}>
          <Box style={{flexDirection: 'row'}}>
	          <FormControlLabel
	            control={
	              <Checkbox 
	                id={questionNumber+"-1"}
	                onChange={handleCheckboxNOC} 
	                value="Give name of country"
	                name={questionNumber+"-1"} 
	                disabled={isDisabled(1, questionNumber+"-1")}
	                iconstyle={{fill: '#000'}}
	              />
	            }
	            label="Give name of country"
	            labelPlacement="end"
	            style={{float: 'left'}}
	          />
	          <TextField
		            id="noc"
		            name="noc"
		            label=""
		            onChange={(event) => {
		                handleNOCInput(event)
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
	                onChange={handleCheckboxStateless} 
	                value="If previously stateless, check here, and explain (for instance, stateless Palestinian in Jordan or stateless Rohingya in Bangladesh)"
	                name={questionNumber+"-2"} 
	                disabled={isDisabled(2, questionNumber+"-2")}
	                iconstyle={{fill: '#000'}}
	              />
	            }
	            label="If previously stateless, check here, and explain (for instance, stateless Palestinian in Jordan or stateless Rohingya in Bangladesh)"
	            labelPlacement="end"
	            style={{float: 'left'}}
	          />
	          <TextField
		            id="stateless"
		            name="stateless"
		            label=""
		            onChange={(event) => {
		                handleStatelessInput(event)
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
	                onChange={handleCheckboxAdditional} 
	                value="If PERSON also lived in additional countries before arriving in current country, list countries here"
	                name={questionNumber+"-3"} 
	                disabled={isDisabled(3, questionNumber+"-3")}
	                iconstyle={{fill: '#000'}}
	              />
	            }
	            label="If PERSON also lived in additional countries before arriving in current country, list countries here"
	            labelPlacement="end"
	            style={{float: 'left'}}
	          />
	          <TextField
		            id="additional"
		            name="additional"
		            label=""
		            onChange={(event) => {
		                handleAdditionalInput(event)
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

export default CheckboxInputField_NOCitizenship;