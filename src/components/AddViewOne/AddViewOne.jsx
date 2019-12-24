import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import AddFields2 from '../FormFields/AddFields2';
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="topContainer mt-5">
                        <Col md={8} className="font-size-20">
                            <p>{this.props.formData.equipmentName}</p>
                        </Col>
                        <Col md={2}>
                            <Button variant="danger" size="sm" block onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'DELETED', 'NEW')}>Remove</Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="success" size="sm" block onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'ACTIVATED', 'NEW')}>Activate Lead</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="cardForm">
                            <AddFields2 formData={this.props.formData}></AddFields2>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
export default AddViewOne;
