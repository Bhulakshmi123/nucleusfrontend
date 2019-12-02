import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import image from "assets/img/new_logo.png";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "white",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
  }
  handleNotificationClick = position => {
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>Nucleus</div>
      ),
      level: level,
      position: position,
      autoDismiss: 15
    });
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/nucleus") {
        return (<Route path={prop.path} render={props => (<prop.component {...props} />)} key={key} />);
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Default";
  };

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  // componentDidUpdate(e) {
  //   if (
  //     window.innerWidth < 993 &&
  //     e.history.location.pathname !== e.location.pathname &&
  //     document.documentElement.className.indexOf("nav-open") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("nav-open");
  //   }
  //   if (e.history.action === "PUSH") {
  //     document.documentElement.scrollTop = 0;
  //     document.scrollingElement.scrollTop = 0;
  //     this.refs.mainPanel.scrollTop = 0;
  //   }
  // }
  render() {
    return (
      <React.Fragment>
        <AdminNavbar  {...this.props} brandText={this.getBrandText(this.props.location.pathname)}></AdminNavbar>
        <Container fluid className="mt-5 dataContainer">
          <Row>
            <Col md="auto" className="elementLeft">
              <Sidebar {...this.props} routes={routes} color={this.state.color} />
            </Col>
            <Switch>{this.getRoutes(routes)}</Switch>
          </Row>
        </Container>
        {/* <div className="wrapper">
        <div id="main-panel" className={this.props.location.pathname.match(new RegExp("/", "g")).length >= 2 ? "sm-main-panel main-panel" : "main-panel"} ref="mainPanel">          
        </div>
      </div> */}
      </React.Fragment>
    );
  }
}

export default Admin;
