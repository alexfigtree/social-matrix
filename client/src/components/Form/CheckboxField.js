import React, { useState } from 'react';
import { FormGroup, Checkbox } from '@material-ui/core';
import questionData from './QuestionData';


function CheckboxField(props) {
  const [currentData, setCurrentData] = React.useState([]);
  const [limit, setLimit] = React.useState(2);
  const [data, setData] = React.useState(questionData[0][0]);
  const [checked, setChecked] = React.useState(true);

  //console.log('questionDatadid i import correctly', questionData[0]);

/*  const selectData = (id, event) => {
    console.log("hey this is checked", event.target.checked);
    console.log("with value", event.target.value);
      let isSelected = event.currentTarget.checked;
      if (isSelected) {
        if (this.state.currentData < this.state.limit) {
          this.setState({ currentData: this.state.currentData+1 });
        }else{
          event.preventDefault()
          event.currentTarget.checked = false;
        }
      } else {
        this.setState({currentData: this.state.currentData - 1});
      };

      setChecked(event.target.checked);
  }*/

  const questionNumber = "inlineCheckbox1.2";
  const handleChange = async(event) => {
    //console.log("hey this is checked, id", event.target.id);

    //console.log("with value", event.target.value);
    setChecked(event.target.checked);
    //update data:
    if(event.target.checked){
      //save as first
      //setData({data[0].value: event.target.value});
      //console.log('data.value', data.value);
      //let newValue = ;
      setData(prevState => {
        let data = Object.assign({}, prevState.data);  // creating copy of state variable jasper
        console.log("1) WHAT IA THIS TEMP DATA", data);
        data.key= 'test';
        data.value = parseInt(event.target.value);  
        console.log('setting data.value to parseInt(event.target.value)', parseInt(event.target.value));                   // update the name property, assign a new value                 
        return { data };                                 // return new object jasper object
      });
    }
    await console.log('data!', data);
  };

  const test= () => {
    console.log('get state', data);
  }
    return (

      <FormGroup style={{flexDirection: 'row'}}>
          <Checkbox
            id={questionNumber+"-1"}
            label='1=(most privileged)'
            iconstyle={{fill: '#000'}}
            value='1'
            //onCheck={this.handleCheck}
            //checked={checked}
            onChange={handleChange}
          />
          <Checkbox
            id={questionNumber+"-2"}
            label='2'
            iconstyle={{fill: '#000'}}
            value='2'
            //onCheck={this.handleCheck}
            onChange={handleChange}
          />
          <Checkbox
            id={questionNumber+"-3"}
            label='3'
            iconstyle={{fill: '#000'}}
            value='3'
            //onCheck={this.handleCheck}
            onChange={handleChange}
          />
          <Checkbox
            id={questionNumber+"-4"}
            label='4'
            iconstyle={{fill: '#000'}}
            value='4'
            //onCheck={this.handleCheck}
            onChange={handleChange}
          />
          <Checkbox
            id={questionNumber+"-5"}
            label='5'
            iconstyle={{fill: '#000'}}
            value='5'
            //onCheck={this.handleCheck}
            onChange={handleChange}
          />
          <Checkbox
            id={questionNumber+"-6"}
            label='6'
            iconstyle={{fill: '#000'}}
            value='6'
            //onCheck={this.handleCheck}
            onChange={handleChange}
          />
          <Checkbox
            id={questionNumber+"-7"}
            label='7=(Most marginalized)'
            iconstyle={{fill: '#000'}}
            value='7'
            //onCheck={this.handleCheck}
            onChange={handleChange}
          />
          <button onClick={test}>hey</button>
        </FormGroup>
        
    );
};

export default CheckboxField;