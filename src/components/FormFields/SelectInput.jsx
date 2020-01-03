import React from 'react';
import Select from 'react-select';
import '../../assets/css/form.css';
class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption : '',
      options : this.props.options
    }
  }
  render () {
    const { selectedOption } = this.state;
    return (
      <div>
        <InputName label={this.props.label}></InputName>
        <Select value="wow"
          onChange={this.props.onChange}
          options={this.state.options}
          placeholder={this.props.placeholder} 
          name={this.props.name}>
          </Select>
      </div>
    );
  }
}

const InputName = props => {
  return (
    <div className="form-modal">
      <label>{props.label}</label>
    </div>
  );
};
export default SelectInput;
