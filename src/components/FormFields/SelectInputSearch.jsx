/** @jsx jsx */
// import React from "react";
// import ReactDOM from "react-dom";
import { Component } from 'react';
import { jsx } from '@emotion/core';
// import Button from '@atlaskit/button';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import { defaultTheme } from 'react-select';

const { colors } = defaultTheme;  

const selectStyles = {
  control: provided => ({ ...provided, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

class SelectInput extends Component {
  state = {
    options:this.props.options,
    isOpen : this.props.isOpen,
  };
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    console.log('Select Input Box options',nextProps);
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }

    if (nextProps.options !== this.state.options) {
      this.setState({ options: nextProps.options });
    }
  }

  toggleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };


  render() {
    const isOpen= this.state.isOpen;
    return (
      <div>
        {/* {console.log('Select Input Box',this.state.options)} */}
        <InputName label={this.props.label} />
        <Dropdown
          isOpen={this.state.isOpen}
          onClose={this.toggleOpen}
          target={
            <Button variant="light" className="red" style={{ width: '100%', height: '34px', padding: '6px 16px !important' }} onClick={this.toggleOpen} isselected={isOpen ? 1 : 0} >
              <img className="down_arrow" src={require('assets/img/downarrow.svg')} alt="Arrow"></img>
              {this.props.value ? `${this.props.value}` : <Placeholder className="place_txt" placeholder={this.props.placeholder}></Placeholder>}
            </Button>
          }
        >
          <Form.Group controlId="formBasicEmail">
            <Select
              autoFocus
              backspaceRemovesValue={false}
              className={this.props.cStyle}
              components={{ DropdownIndicator, IndicatorSeparator: null }}
              controlShouldRenderValue={false}
              hideSelectedOptions={false}
              isClearable={false}
              menuIsOpen
              onChange={this.props.onChange}
              options={this.state.options}
              placeholder="Search..."
              styles={selectStyles}
              tabSelectsValue={false}
              value={this.props.value}
            />
          </Form.Group>
        </Dropdown>
      </div>
    );
  }
}

// styled components

const Menu = props => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        padding: '0',
        position: 'absolute',
        textAlign: 'left',
        zIndex: 2,
        width: '100%'
      }}
      {...props}
    />
  );
};
const InputName = props => {
  return (
    <div className="form-modal">
      <label>{props.label}</label>
    </div>
  );
};
const Placeholder = props => {
  return (
    <span className="select_palceholder">{props.placeholder}</span>
  );
};
const Blanket = props => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div css={{ position: 'relative' }}>
      {target}
      {isOpen ? <Menu>{children}</Menu> : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  );
const Svg = p => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);
const DropdownIndicator = () => (
  <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);
// const ChevronDown = () => (
//   <Svg style={{ marginRight: -6 }}>
//     <path
//       d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
//       fill="currentColor"
//       fillRule="evenodd"
//     />
//   </Svg>)
export default SelectInput;