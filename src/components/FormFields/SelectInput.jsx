import React from 'react';
import Select from 'react-select';
import '../../assets/css/form.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
class SelectInput extends React.Component {
  state = {
    selectedOption: this.props.value,
    // name:this.state
  };
  handleChange = selectedOption => {
    // console.log(this.props.name,"name")
    // console.log(this.props.name, selectedOption.value)
    // let ddd = this.props.name;
    this.setState({[this.props.name]: selectedOption.value});
    // this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
    // this.props.name = selectedOption.label;
  };
  render() {
    // const { selectedOption } = this.state;
    return (
      <div>
        <InputName label={this.props.label} />
        <Select
          value={this.props.value}
          onChange={this.handleChange}
          options={options}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
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
