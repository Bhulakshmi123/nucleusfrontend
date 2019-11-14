import React, { Component } from 'react'
import SearchList from '../../components/SearchList/SearchList'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import './SideArticle.css'
import { idData } from '../../views/Business/idData'
import AddViewOne from '../AddViewOne/AddViewOne'
import AddViewTwo from '../AddViewTwo/AddViewTwo'

class SideArticle extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: idData.clientEquipmentDetails[0].equipmentId,
            selectedEquipment: idData.clientEquipmentDetails[0].equipmentName,
            active: false,
        }
    }
    getSelectedEquipment = (e) => {
        this.setState({ selected: e.currentTarget.dataset.id, active: !this.state.active });
    }
    getClientName = () => {
        return (idData.clientName)
    }
    getEquipmentData = () => {
        let html = [];
        for (let x in idData.clientEquipmentDetails) {
            html.push(
                <div key={idData.clientEquipmentDetails[x].equipmentId}>
                    <div className={`eqParent ${this.state.selected === idData.clientEquipmentDetails[x].equipmentId ? "activeDiv" : 'null'}`} onClick={this.getSelectedEquipment} onMouseEnter={this.getId} data-id={idData.clientEquipmentDetails[x].equipmentId}>
                        <div className="eqChild1">
                            <div className="eqChild11">{idData.clientEquipmentDetails[x].equipmentName}</div>
                            <div className="eqChild12">{idData.clientEquipmentDetails[x].equipmentMake}</div>
                        </div>
                        <div className="eqChild2">
                            <div>{idData.clientEquipmentDetails[x].equipmentCount}</div>
                        </div>
                    </div>
                    <hr className="borderEffect"></hr>
                </div>
            )
        }
        return html;
    }
    render() {
        console.log('this', this);
        return (
            <React.Fragment>
                <Route path="/business/new/view/:id" render={() => {
                    return (
                        <Container className="modifiedContainer">
                            <Row>
                                <Col lg={3} className="Sidebar">
                                    <div className="SidebarLevel1">
                                        <Link className="backLink btn-link" to="/business/new"><i className="fas fa-arrow-circle-left nbSpan"></i>back to Leads</Link>
                                        <h5 className="viewHeadingTitle">New Lead</h5>
                                        <h3 className="viewHeading">{this.getClientName()}</h3>
                                        <Button className="btnLeft" bsSize="small"><i className="fas fa-edit nbSpan"></i>Edit</Button>
                                        <div className="SearchComponent">
                                            <SearchList></SearchList>
                                        </div>
                                        <div>
                                            {this.getEquipmentData()}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <AddViewOne selectedEquipment={this.state.selected}></AddViewOne>
                                </Col>
                            </Row>
                        </Container>
                    )
                }}>
                </Route>

                <Route path="/business/active/view/:id" render={() => {
                    return (
                        <Container className="modifiedContainer2">
                            <Row>
                                <Col lg={3} className="Sidebar">
                                    <div className="SidebarLevel1">
                                        <Link className="backLink btn-link" to="/business/active"><i className="fas fa-arrow-circle-left nbSpan"></i>back to Leads</Link>
                                        <h5 className="viewHeadingTitle">New Lead</h5>
                                        <h3 className="viewHeading">{this.getClientName()}</h3>
                                        <Button className="btnLeft" bsSize="small"><i className="fas fa-edit nbSpan"></i>Edit</Button>
                                        <div className="SearchComponent">
                                            <SearchList></SearchList>
                                        </div>
                                        <div>
                                            {this.getEquipmentData()}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={9} className="business_active_tab">
                                    <AddViewTwo selectedEquipment={this.state.selected} supplierId={this.props.id}></AddViewTwo>
                                </Col>
                            </Row>
                        </Container>
                    )
                }}></Route>
            </React.Fragment>
        )
    }
}

export default SideArticle
