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
        <CalName label={this.props.label} />
        <div className="form-modal" style={{ width: "100%" }}>
          <DatePicker className="form-control stle_back"
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          ></DatePicker>
          <img className="calender" src={require('assets/img/calendar.svg')} alt="CalenderIcon"></img>
        </div>
      </div>
    );
  }
}
const CalName = props => {
  return (
    <div className="form-modal">
      <label>{props.label}</label>
      <span>{props.placeholder}</span>
    </div>
  );
};
export default CalenderInput;