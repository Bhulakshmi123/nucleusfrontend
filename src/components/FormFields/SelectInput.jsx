import React from 'react';
import Select from 'react-select';
import '../../assets/css/form.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: ''
    }
  }
  onChange = (selectedOption) => {
    this.setState({ selectedOption }, () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render () {
    const { selectedOption } = this.state;
    return (
      <div>
        <InputName label={this.props.label}></InputName>
        <Select value={selectedOption} onChange={this.onChange} options={options} placeholder={this.props.placeholder} name={this.props.name}></Select>
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
