import React from 'react';
import { NavLink } from "react-router-dom";
const Sidebar = (props) => {
  // const sidebarView = useSelector(state => state.sidebarView);
  const sidebarView = localStorage.getItem('SidebarMinized');
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
                      <div className="navWid1  mr-2 font-size-15">{prop.icon}</div>
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
                      <div className="navWid1 mr-2 font-size-15">{prop.icon}</div>
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
  // if (sidebarView) {
  //   return (
  //     <React.Fragment>


  
  //       <div className="flex-column sideBar sideBarMini py-5 my-4">
  //         <ul>
  //           {props.routes.map((prop, key) => {
  //             if (!prop.redirect)
  //               return (
  //                 <li key={key}>
  //                   <NavLink to={prop.path} className="nav-link my-2 text-center py-1" activeClassName="nav-link-active">
  //                     <div className="navWid1 mr-5 font-size-15">{prop.icon}</div>
  //                   </NavLink>
  //                 </li>
  //               );
  //             return null;
  //           })}
  //         </ul>
  //       </div>
  //     </React.Fragment>
  //   )
  // }
  // else {
  //   return (
  //     <React.Fragment>
  //       <div className="flex-column sideBar py-5 my-4">
  //         <ul>
  //           {props.routes.map((prop, key) => {
  //             if (!prop.redirect)
  //               return (
  //                 <li key={key}>
  //                   <NavLink to={prop.path} className="nav-link my-2 py-1" activeClassName="nav-link-active">
  //                     <div className="navWid1 mr-5 font-size-15">{prop.icon}</div>
  //                     <div className="navWid2 py-auto my-auto"><p className="propText">{prop.name}</p></div>
  //                   </NavLink>
  //                 </li>
  //               );
  //             return null;
  //           })}
  //         </ul>
  //       </div>
  //     </React.Fragment>
  //   )
  // }
}
export default Sidebar;
