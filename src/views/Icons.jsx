// import React, { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { iconsArray } from "variables/Variables.jsx";

// class Icons extends Component {
//   render() {
//     return (
//       <div className="content">
//         <Container fluid>
//           <Row>
//             <Col md={12}>
//               <div
//                 title="202 Awesome Stroke Icons"
//                 ctAllIcons
//                 category={
//                   <span>
//                     Handcrafted by our friends from{" "}
//                     <a
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       href="http://themes-pixeden.com/font-demos/7-stroke/index.html"
//                     >
//                       Pixeden
//                     </a>
//                   </span>
//                 }
//                 content={
//                   <Row>
//                     {iconsArray.map((prop, key) => {
//                       return (
//                         <Col
//                           lg={2}
//                           md={3}
//                           sm={4}
//                           xs={6}
//                           className="font-icon-list"
//                           key={key}
//                         >
//                           <div className="font-icon-detail">
//                             <i className={prop} />
//                             <input type="text" defaultValue={prop} />
//                           </div>
//                         </Col>
//                       );
//                     })}
//                   </Row>
//                 }
//               ></div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Icons;
import React from 'react';
import { sidebarViewAction } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
const Icons = () => {
  const sidebarView = useSelector(state => state.sidebarView);
  const dispatch = useDispatch();
  const dataFromUrl = () => { dispatch(sidebarViewAction(false)) }
  return (
    <React.Fragment>
      {dataFromUrl()}
      <div className={sidebarView ? "mainContent mainContentMini" : "mainContent"}>
        <h1 className="text-white text-center mt-5">Icons</h1>
      </div>
    </React.Fragment>
  )
}
export default Icons;
