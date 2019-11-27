import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
const Sidebar = (props) => {
  const sidebarView = useSelector(state => state.sidebarView);
  if (sidebarView) {
    return (
      <React.Fragment>
        <div className="flex-column sideBar sideBarMini py-5 my-4">
          <ul>
            {props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li key={key}>
                    <NavLink to={prop.path} className="nav-link my-2 text-center py-1" activeClassName="nav-link-active">
                      <div className="navWid1 propStyle1">{prop.icon}</div>
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
        <div className="flex-column sideBar py-5 my-4">
          <ul>
            {props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li key={key}>
                    <NavLink to={prop.path} className="nav-link my-2 py-1" activeClassName="nav-link-active">
                      <div className="navWid1 propStyle1">{prop.icon}</div>
                      <div className="navWid2 py-auto my-auto"><p className="propText">{prop.name}</p></div>
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
