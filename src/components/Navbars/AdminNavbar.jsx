import React, { Component } from "react";
import { Navbar, Button, Form } from "react-bootstrap";
import '../../assets/css/commonStyles.css';
import logo from "assets/img/fav-ico.png";
import { Redirect } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("tokenId");;
    let loggedIn = true
    if (token === null) {
      loggedIn = false
    }
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false,
      loggedIn
    };
    this.logoutHandler = this.logoutHandler.bind(this)
  }
  logoutHandler(e) {
    e.preventDefault();
    localStorage.removeItem("tokenId");
    this.setState({ loggedIn: false })
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
    if (this.state.loggedIn === false) {
      return (<Redirect to="/login"></Redirect>)
    }
    return (
      <Navbar fixed="top" className="stickyTopColor">
        <Navbar.Brand href="/dashboard">
          <img alt="" src={logo} width="35" height="30" className="d-inline-block align-top mr-1"></img>
          <span className="text-dark">React EH NUCLEUS</span>
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
          <Form inline onSubmit={this.logoutHandler}>
            <Button variant="outline-danger" size="sm" type="submit" className="my-auto ml-2">Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
