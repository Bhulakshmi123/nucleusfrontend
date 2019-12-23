import React from 'react';
import Select from 'react-select';
import '../../assets/css/form.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class SelectInput extends React.Component {
  constructor(props){
    super(props);
    console.log("BHu", this.props)
    this.state={
      value: this.props.value,
      // name:this.props.name
    }
  }

  handleChange = value => {
    this.setState({ value :value });
    // this.props.onChange(value);
    console.log(`Option selected:`, value);
  };
  getValue(){
    const { value } = this.props;
    return value === undefined ? this.state.value : value;
  }
  render() {
    return (
      <div>
        <InputName label={this.props.label} />
        <Select
          value={this.getValue()}
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
