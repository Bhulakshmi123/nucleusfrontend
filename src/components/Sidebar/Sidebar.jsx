import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
const Sidebar = (props) => {
  const sidebarView = useSelector(state => state.sidebarView);
  if (sidebarView) {
    return (
      <React.Fragment>
        <div className="flex-column sideBar sideBarMini py-5 mb-4">
          <ul>
            {props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li key={key}>
                    <NavLink to={prop.path} className="nav-link my-2 text-center" activeClassName="nav-link-active">
                      <div className="navWid1"><i className={`propStyle2 mt-2 ${prop.icon}`}></i></div>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <div className="flex-column sideBar py-5 mb-4">
          <ul>
            {props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li key={key}>
                    <NavLink to={prop.path} className="nav-link my-2" activeClassName="nav-link-active">
                      <div className="navWid1"><i className={`propStyle1 ${prop.icon}`}></i></div>
                      <div className="navWid2 py-auto"><p className="propText">{prop.name}</p></div>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
export default Sidebar;
