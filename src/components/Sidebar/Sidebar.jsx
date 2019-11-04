import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";
import logo from "assets/img/reactlogo.png";
import '../../assets/css/commonStyles.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    if (this.props.location.pathname.match(new RegExp("/", "g")).length >= 2) {
      return (
        <div id="sidebar" className="sidebar minSidebar">
          <div className="logo logo-img">
            <a href="https://www.equiphunt.com" className="simple-text logo-mini">
              <div className="logo-img">
                <img src={logo} alt="logo_image" className="sm-img" />
              </div>
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
              {this.props.routes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li className={prop.upgrade ? "active active-pro" : this.activeRoute(prop.path)} key={key}>
                      <NavLink to={prop.path} className="nav-link small-nav-link" activeClassName="active">
                        <div className="iStyle"><i className={prop.icon} /></div>
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>
          </div>
        </div>
      );
    }
    else {
      return (
        <div id="sidebar" className="sidebar">
          <div className="logo">
            <a href="https://www.equiphunt.com" className="simple-text logo-mini">
              <div className="logo-img">
                <img src={logo} alt="logo_image" />
              </div>
            </a>
            <a href="https://www.equiphunt.com" className="simple-text logo-normal">EH Nucleus</a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
              {this.props.routes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li className={prop.upgrade ? "active active-pro" : this.activeRoute(prop.path)} key={key}>
                      <NavLink to={prop.path} className="nav-link nav-link-modified " activeClassName="active">
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Sidebar;
