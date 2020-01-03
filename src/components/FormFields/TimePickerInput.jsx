import { TimePicker } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';

function onChange (time, timeString) {
    // console.log(time, timeString);
}
class TimePickerInput extends Component {
    render () {
        return (
            <div>
                <TimePicker className="inpt_size w-100" placeholder={this.props.placeholder} use12Hours format="h:mm a" onChange={onChange} />
            </div>
        );
    }
}
export default TimePickerInput;
