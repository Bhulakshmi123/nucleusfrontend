import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
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
            console.log(idData.clientEquipmentDetails[x]);
            html.push(
                    <div className="retro">Hello</div>
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
                                <h5>New Lead</h5>
                                <h3>{this.getClientName()}</h3>
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
