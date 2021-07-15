/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FormGroup, FormGroupLabel, FormControlLabel, Checkbox, Typography, TextField } from '@material-ui/core';
import questionData from './QuestionData';


function FootnoteField(props) {
  const [currentData, setCurrentData] = React.useState([]);
  //const [limit, setLimit] = React.useState(2);
  const [data, setData] = React.useState(questionData[0][0]);
  const [footnotes, setFootnotes] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  //const [q1_2, setq1_2] = useState(null);
  //let answersArray = [];
  //const [answersArray, setAnswersArray] = useState(new Array(2));
  const [answersArray, setAnswersArray] = useState([]);
  //const { id } = props;

  const questionNumber = props.id;

  //const [isChecked, setIsChecked] = useState([1,2,3,4,5,6,7]);
  //const [isChecked, setIsChecked] = useState(new Array(2));
  //const [checkedArray, setCheckedArray] = useState([1,2,3,4,5,6,7]);

  //working
  const onGlobalChange = (answersArray) => {
    let globalTemp = answersArray;
    console.log("onGlobalChange array for id", globalTemp, ' ', props.id);
    //return setCheckedArray(answersArray);
/*    setChecked(event.target.checked);
    //setIsChecked(checkedValues);
    //update data:
    if(event.target.checked){
        let temp = answersArray;
        console.log("TEMP", typeof temp);
        //let temp = []
        temp.push(parseInt(event.target.value));
        setAnswersArray(temp);
        console.log('temp answersArray NEW', temp);
        //let tempVal = answersArray;
        //data.value = tempVal;
        //console.log('tempVal', tempVal);                   // update the name property, assign a new value                 
        //return { data };
        return temp; 
      //save as first
      //setData({data[0].value: event.target.value});
      //console.log('data.value', data.value);
      //let newValue = ;

    }*/



    
    //return { isChecked: checkedValues };
/*    this.setState(() => {
      return { checked: checkedValues };
    });*/
  };

  const isDisabled = (value, idName) => {
    return (
      //this disables all checkboxes in group, even the ones that are selected
      //disable if:
      //1)answers array is too long
      answersArray.length > 1  && !answersArray.includes(value) && idName === questionNumber+'-'+value
    );

  };

  const handleChange = async(event) => {
		setFootnotes(event.target.value);
        localStorage.setItem(questionNumber, event.target.value);
    }
  
/*  const handleChange = async(event) => {
    setChecked(event.target.checked);
    
    //isDisabled(event.target.value);
    //update data:
    let temp = answersArray;
    if(event.target.checked){
        //if checking box, do the following:
        temp.push(parseInt(event.target.value));

        //call isDisabled
        isDisabled(event.target.value, event.target.id);

    }else{
      //WORKING:
      //if unchecking box, do the following:
      let toDelete = temp.indexOf(parseInt(event.target.value));
      temp.splice(toDelete, 1);
    }
    //save latest state and corresponding question number:
    let questionId = event.target.id.slice(0, event.target.id.lastIndexOf('-'));
    console.log('values to save: ID: ', questionId);
    console.log('with value: ', temp);
    localStorage.setItem(questionId, temp);
    return temp; 
  };*/

    return (

      <FormGroup style={{flexDirection: 'row'}} >

        <TextField
            id={questionNumber}
            name={questionNumber}
            //variant="outlined"
            //margin="none"
            label={questionNumber}
            onChange={(event) => {
                handleChange(event)
            }}
            variant="outlined" 
            label="" 
            fullWidth
        />
        
        </FormGroup>
        
    );
};

export default FootnoteField;