import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
const Sidebar = (props) => {
  const sidebarView = useSelector(state => state.sidebarView);
  if (sidebarView === true) {
    return (
      <React.Fragment>
        <div className="flex-column sideBar sideBarMini py-5 my-4">
          <ul>
            {props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li key={key}>
                    <NavLink to={prop.path} className="nav-link my-2 text-center py-1" activeClassName="nav-link-active">
                      <div className="d-block w-15 mr-2 font-size-15">{prop.icon}</div>
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
                    <NavLink to={prop.path} className={`nav-link my-2 py-1 ${prop.name}`} activeClassName="nav-link-active" id={prop.name}>
                      <div className="d-block w-15 mr-2 font-size-15" id={prop.name}>{prop.icon}</div>
                      <div className="d-block w-85 py-auto my-auto" id={prop.name}>
                        <p className=" font-weight-bold fontRoboto font-size-09 m-0" id={prop.name}>{prop.name}</p>
                      </div>
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
