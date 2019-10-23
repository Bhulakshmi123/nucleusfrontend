import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CalenderInput extends Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     
      render() {
        return (
          <div>
            <CalName name={this.props.name}/>
            <div className="form-modal"  style={{width:"100%"}}>
              <DatePicker className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              />
            </div>
          </div>
        );
      }
}
const CalName = props => {
  return(
      <div className="form-modal">
          <label>{props.name}</label>
      </div>
  );
};
export default CalenderInput;