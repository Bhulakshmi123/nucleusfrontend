import React, { Component } from 'react'
import SearchList from '../../components/SearchList/SearchList'
import { Row, Col, Grid, Button } from 'react-bootstrap'
import './SideArticle.css'
import { idData } from '../../views/Business/idData'

class SideArticle extends Component {
    getClientName = () => {
        return (idData.clientName)
    }
    getEquipmentData = () => {
        let html = []
        console.log('IDData', idData.clientEquipmentDetails)
        for (let x in idData.clientEquipmentDetails) {
            html.push(
                <div key={idData.clientEquipmentDetails[x].equipmentId}>
                    <div className="eqParent">
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
                                <Button bsStyle="primary" bsSize="small" className="btnLeft"><i class="far fa-edit nbSpan"></i>Edit</Button>
                                <div className="SearchComponent">
                                    <SearchList></SearchList>
                                </div>
                                <div>{this.getEquipmentData()}</div>
                            </div>
                        </Col>
                        <Col lg={5} className="cardForm"></Col>
                        <Col lg={4} className="cardForm2"></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SideArticle
