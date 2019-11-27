import { TimePicker } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';

function onChange(time, timeString) {
  console.log(time, timeString);
}
class TimePickerinpt extends Component{
    render(){
        return(
            <span>
                <TimePicker className="inpt_size" placeholder={this.props.placeholder} use12Hours format="h:mm a" onChange={onChange} />
            </span>
        );
    }
}
export default TimePickerinpt;
