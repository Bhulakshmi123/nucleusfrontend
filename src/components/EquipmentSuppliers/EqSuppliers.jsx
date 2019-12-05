// import React, { Component } from 'react';
// import { Container, Col, Row, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import SearchList from '../SearchList/SearchList';
// import SupplierCards from '../SupplierCards/SupplierCards';
// import './EqSuppliers.css';
// class EqSuppliers extends Component {
//     constructor(props) {
//         super(props)
//         let url = window.location.href.split('/')
//         this.state = {
//             eqId: url[url.length - 1],
//             supId: url[url.length - 2]
//         };
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Container className="fluidContainer">
//                     <Row>
//                         <Col md={3} className="Sidebar">
//                             <div className="pd-5 Sidebar1">
//                                 <h5 className="viewHeadingTitle">Leads</h5>
//                                 <h3 className="viewHeading">Hyderabad Metro Rail Corporation [{this.state.supId}]</h3>
//                                 <Button className="btnLeft" bsSize="small"><i className="fas fa-edit nbSpan"></i>Edit</Button>
//                             </div>
//                         </Col>
//                         <Col md={9}>
//                             <Container className="fluidContainer2">
//                                 <Row className="mt-5">
//                                     <Col md={6} className="ActiveHeadingTitle">
//                                         <h3><b>Single Lane Tipper Crane</b></h3>
//                                     </Col>
//                                     <Col md={1}><i className="fab fa-gg-circle icon-fs"></i></Col>
//                                     <Col md={2}>
//                                         <Button className="btn-danger-overRide" bsStyle="danger" block><i class="fas fa-ban nbSpan"></i>Reject</Button>
//                                     </Col>
//                                     <Col md={3}>
//                                         <Button className="btn-dark-overRide" bsStyle="dark" block>Move To Projects</Button>
//                                     </Col>
//                                 </Row>
//                             </Container>
//                             <Container className="fluidContainer">
//                                 <Row className="Middlebar mt-2 mb-2">
//                                     <Col md={1} className="MiddlebarInner">
//                                         <h3>
//                                             <i className="fas fa-arrow-left"></i>
//                                         </h3>
//                                     </Col>
//                                     <Col md={11} className="MiddlebarInner">
//                                         <h3>
//                                             <b>Suppliers List</b>
//                                         </h3>
//                                     </Col>
//                                 </Row>
//                             </Container>
//                             <Container className="fluidContainer2">
//                                 <Row className="mb-2">
//                                     <Col md={8}>
//                                         <ul className="NavStyles">
//                                             <li><NavLink activeClassName="activeLink" to={`/business/eqsuppliers/${this.state.supId}/${this.state.eqId}`}>RMP Users</NavLink></li>
//                                             <li><NavLink activeClassName="activeLink" to="/business/rejected">Suppliers</NavLink></li>
//                                         </ul>
//                                     </Col>
//                                     <Col md={2}>
//                                         {/* <Button bsStyle="primary" className="btn-primary-overRide" bsStyle="dark" block>Request Bids</Button> */}
//                                     </Col>
//                                     <Col md={2}>
//                                         <Button className="btn-dark-overRide" bsStyle="dark" block>SMS</Button>
//                                     </Col>
//                                 </Row>
//                                 <Row className="mb-1">
//                                     <Col md={1}><input type="checkbox"></input></Col>
//                                     <Col md={2}>Equipment Type</Col>
//                                     <Col md={2}>Location</Col>
//                                     <Col md={2}>Equipment Status</Col>
//                                     <Col md={5}>
//                                         <SearchList></SearchList>
//                                     </Col>
//                                 </Row>
//                                 <SupplierCards></SupplierCards>
//                             </Container>
//                         </Col>
//                     </Row>
//                 </Container>
//             </React.Fragment>
//         )
//     }
// }

// export default EqSuppliers
