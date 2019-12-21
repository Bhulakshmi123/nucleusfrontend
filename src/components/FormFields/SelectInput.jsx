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
    selectedOption: null,
    // name:this.state
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <div>
        <InputName label={this.props.label} />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
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
