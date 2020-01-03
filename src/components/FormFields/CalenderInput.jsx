import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/css/form.css';
class CalenderInput extends Component {

  render() {
    return (
      <div>
        <CalName label={this.props.label} />
        <div className="form-modal" style={{ width: "100%" }}>
          <DatePicker className="form-control stle_back"
            selected={this.props.startDate}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            dateFormat="dd/MM/yyyy"
            minDate={this.props.minDate}
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