import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from "react-bootstrap";
import '../../assets/css/commonStyles.css';
import logo from "assets/img/fav-ico.png";
import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import { Link, Switch, Route } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar fixed="top" className="stickyTopColor">
        <Navbar.Brand href="#home">
          <Link to="/loginpage"><img alt="" src={logo} width="35" height="30" className="d-inline-block align-top mr-1"></img></Link>
          <span className="text-secondary">React EH NUCLEUS</span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-center">
          <i className="fas fa-home mr-2"></i>{this.props.brandText}
        </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
