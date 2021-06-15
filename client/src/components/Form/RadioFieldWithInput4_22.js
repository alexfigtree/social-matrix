import React, { useState, useEffect } from 'react';
import { Box, TextField, FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typography, RadioGroup, Radio } from '@material-ui/core';
import questionData from './QuestionData';

function RadioFieldWithInput4_22(props) {
	const [currentData, setCurrentData] = React.useState([]);
	const [data, setData] = React.useState(questionData[0][0]);
	const [checked, setChecked] = React.useState(true);
	const [answersArray, setAnswersArray] = useState([]);

	const questionNumber = props.id;

	localStorage.setItem('4.22-1', '');
	localStorage.setItem('4.22-1-yes', '');

	const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

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

	function enableDisableTextBoxYes(id, isChecked) {
	    var yesBox = document.getElementById("yes4_22");
	    yesBox.disabled = isChecked ? false : true;
	    if (!yesBox.disabled) {
	        yesBox.focus();
	    }
	}

	const handleRadioButtonYes = async(event) => {
		setChecked(event.target.checked);
		enableDisableTextBoxYes(event.target.id, event.target.checked);
	};
	const handleYesInput = async(event) => {
		localStorage.setItem('4.22-1-yes', event.target.value);
	};

	const handleChange = async (event) => {
		localStorage.setItem(event.target.name, event.target.value);
		if(event.target.value === 'Yes'){
			handleRadioButtonYes(event);
		}
	}; 

    return (

		<RadioGroup aria-label="gender" id={questionNumber} name={questionNumber} onChange={handleChange}>
				
				<FormControlLabel
					control={<Radio />}
				  	label="Yes"
					value="Yes"
					name={questionNumber}
					labelPlacement="end"
				/>
				<TextField
				    id="yes4_22"
				    name="yes"
				    label=""
				    onChange={(event) => {
				        handleYesInput(event)
				    }}
				    variant="outlined" 
				    disabled="disabled"
				/>
			

				<FormControlLabel 
					name={questionNumber}  
					value="No" 
					control={<Radio />} 
					label="No" 
				/>
				<FormControlLabel 
					name={questionNumber}  
					value="Unsure" 
					control={<Radio />} 
					label="Unsure" 
				/>
        </RadioGroup>

        
    );
};

export default RadioFieldWithInput4_22;



          