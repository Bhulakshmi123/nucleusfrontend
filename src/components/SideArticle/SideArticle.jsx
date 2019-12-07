import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AddViewOne from '../AddViewOne/AddViewOne';
import AddViewTwo from '../AddViewTwo/AddViewTwo';
import AddViewThree from '../AddViewThree/AddViewThree';
import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

class SideArticle extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        let urldata = JSON.parse(localStorage.getItem('urlInfo'));
        this.state = { "token": token, 'urldata': urldata, 'leadEquipmentUid': urldata[0].leadDet_uuid, "urlName": urldata[0].lead_uuid }
        // console.log('uid', this.state.urlName)
        // console.log('lead-uid', this.state.leadEquipmentUid);
    }
    render() {
        return (
            <React.Fragment>
                <Col md={3} className="backgroundColor1 viewHeight px-0">
                    <div className="mb-5 pb-5">
                        <div className="mt-4 px-4 mb-4">
                            {/* <Button variant="link" size="sm" className="text-white mln-2" ><i className="far fa-arrow-alt-circle-left mr-1"></i><u>Go Back</u></Button> */}
                            <Link to="/business/leads/new" className="text-white mln-2"><i className="far fa-arrow-alt-circle-left mr-1"></i><u>Go Back</u></Link>
                            <h6 className="pl-1 text-white opct-5 mb-1 mt-3">New Lead</h6>
                            <h3 className="text-white pl-1">{this.state.urldata[0].companyName}</h3>
                            <Button variant="light" size="sm" className="px-3 ml-1 text-primary"><i className="far fa-edit mr-1"></i>Edit</Button>
                        </div>
                        <div className="px-3 mx-0">
                            <InputGroup className="pl-2 ml-1 searchBarStyle">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="searchBarPrepend"><i className="fas fa-search"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Text input with checkbox" placeholder="Search" className="formControlSearch" />
                            </InputGroup>
                        </div>
                        <Container fluid className="mt-3 px-0">
                            {
                                this.props.leadinfo.map((prop, key) => {
                                    return (
                                        <Row className="text-white borderedRow px-0 py-2 mx-0" key={key}>
                                            <Col md={9} className="pl-4">
                                                <div className="pl-1 text-capitalize">{prop.equipmentName}</div>
                                                <div className="pl-1 font-size-07">{prop.leadDet_year}</div>
                                            </Col>
                                            <Col md={3} className="my-auto">
                                                <div className="text-white equipmentCount p-1 text-center">{prop.leadDet_quantity}</div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </Container>
                    </div>
                </Col>
                <Col md={7} className="viewHeight mx-0">
                    <Switch>
                        <Route path="/business/leads/lead/active/eqsupplier/25411b26-1738-11ea-8889-040118b51101" component={AddViewThree} />
                        <Route path="/business/leads/lead/new/:id"><AddViewOne uid={this.state.urlName} leaduid={this.state.leadEquipmentUid} ></AddViewOne></Route>
                        <Route path="/business/leads/lead/active/:id" component={AddViewTwo} />
                    </Switch>
                </Col>
            </React.Fragment>
        )
    }
}
export default SideArticle;