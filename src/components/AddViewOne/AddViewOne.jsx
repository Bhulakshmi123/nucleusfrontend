import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AddFields2 from '../FormFields/AddFields2';
import { changeLeadStatus } from '../../views/Business/actions';
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token,
            redirecttoNew: false,
            redirecttoActive: false
        }
    }
    setRedirecttoNew = () => {
        this.setState({ redirecttoNew: true })
    }
    setRedirecttoActive = () => {
        this.setState({ redirecttoActive: true })
    }
    renderRedirect = () => {
        if (this.state.redirecttoNew) {
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
        if (this.state.redirecttoActive) {
            return (<Redirect to="/business/leads/active"></Redirect>)
        }
    }
    statusChanger = (e) => {
        let data = { "leadDetId": this.props.formData.leadDet_id.toString(), "newStatus": e.target.name }
        console.log(data);
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "REJECTED") {
                this.setRedirecttoNew()
            }
            else {
                this.setRedirecttoActive()
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    {this.renderRedirect()}
                    <Row className="topContainer mt-5">
                        <Col md={8} className="font-size-15">
                            <p>{this.props.formData.equipmentName}</p>
                        </Col>
                        <Col md={2}>
                            <Button variant="outline-danger" size="sm" name="REJECTED" block onClick={this.statusChanger}><i className="fas fa-trash-alt mr-2"></i>Remove</Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="outline-success" size="sm" name="ACTIVATED" block onClick={this.statusChanger}>Activate Lead</Button>
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
