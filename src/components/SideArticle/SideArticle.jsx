import React, { Component } from 'react'
import SearchList from '../../components/SearchList/SearchList'
import { Row, Col, Grid, Button } from 'react-bootstrap'
import './SideArticle.css'
import { idData } from '../../views/Business/idData'
import MiddleArticle from '../../components/MiddleArticle/MiddleArticle'

class SideArticle extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: ''
        }
    }
    getSelectedEquipment = (e) => {
        this.setState({ selected: e.currentTarget.dataset.id });
        console.log(e.currentTarget.dataset.id);
    }
    getClientName = () => {
        return (idData.clientName)
    }
    getEquipmentData = () => {
        let html = []
        for (let x in idData.clientEquipmentDetails) {
            html.push(
                <div key={idData.clientEquipmentDetails[x].equipmentId}>
                    <div className="eqParent" onClick={this.getSelectedEquipment} data-id={idData.clientEquipmentDetails[x].equipmentId}>
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
        return (
            <div>
                <Grid className="modifiedContainer">
                    <Row>
                        <Col lg={3} className="Sidebar">
                            <div className="SidebarLevel1">
                                <button className="btn-link backLink"><i className="far fa-arrow-alt-circle-left nbSpan"></i>back to Leads</button>
                                <h5 className="viewHeadingTitle">New Lead</h5>
                                <h3 className="viewHeading">{this.getClientName()}</h3>
                                <Button bsStyle="primary" bsSize="small" className="btnLeft"><i className="far fa-edit nbSpan"></i>Edit</Button>
                                <div className="SearchComponent">
                                    <SearchList></SearchList>
                                </div>
                                <div>{this.getEquipmentData()}</div>
                            </div>
                        </Col>
                        <Col lg={5} className="cardForm">
                            <MiddleArticle formId={this.state.selected}></MiddleArticle>
                        </Col>
                        <Col lg={4} className="cardForm2"></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SideArticle
