import React, { Component } from 'react'
import SearchList from '../../components/SearchList/SearchList'
import { Row, Col, Grid, Button } from 'react-bootstrap'
import './SideArticle.css'
import { idData } from '../../views/Business/idData'
import MiddleArticle from '../../components/MiddleArticle/MiddleArticle'
import Renter from '../../components/Renter/Renter'

class SideArticle extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: idData.clientEquipmentDetails[0].equipmentId,
            active: false,
        }
    }
    getSelectedEquipment = (e) => {
        this.setState({ selected: e.currentTarget.dataset.id, active: !this.state.active });
        console.log('this', this);
    }
    getClientName = () => {
        return (idData.clientName)
    }
    getEquipmentData = () => {
        let html = []
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
        return (
            <div>
                <Grid className="modifiedContainer">
                    <Row>
                        <Col lg={3} className="Sidebar">
                            <div className="SidebarLevel1">
                                <button className="backLink btn-link"><i className="fas fa-arrow-circle-left nbSpan"></i>back to Leads</button>
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
                        {/* <Col lg={5} className="cardForm">
                            <MiddleArticle formId={this.state.selected}></MiddleArticle>
                        </Col>
                        <Col lg={4} className="cardForm2">
                            <h1>Codename: Tanjiro Kamado</h1>
                        </Col> */}
                        <Col lg={9} className="activeData">
                            <div className="activeContainer">
                                <div className="renterName">RENTER</div>
                                <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#"></Renter>
                                <Renter ApprovalPrice="1,45,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#"></Renter>
                                <div className="renterName">SUPPLIER</div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SideArticle
