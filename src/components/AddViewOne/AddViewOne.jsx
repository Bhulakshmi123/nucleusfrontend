import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AddFields2 from '../FormFields/AddFields2';
import { getLeadEquipmentDetails, changeLeadStatus } from '../../views/Business/actions';
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        console.log("ViewOne", props)
        let token = localStorage.getItem("tokenId");
        this.state = { "token": token, "formDetails": [], "leadDetId": 0, "redirecttoNew": false, "redirecttoActive": false }
    }
    componentDidMount() {
        this.getLeadEquipmentDetails();
    }
    setRedirecttoNew = () => { this.setState({ redirecttoNew: true }) }
    setRedirecttoActive = () => { this.setState({ redirecttoActive: true }) }
    renderRedirect = () => {
        if (this.state.redirecttoNew) {
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
        if (this.state.redirecttoActive) {
            return (<Redirect to="/business/leads/active"></Redirect>)
        }
    }
    getLeadEquipmentDetails = async () => {
        let response = await getLeadEquipmentDetails(this.props.uid + '/' + this.props.leaduid, this.state.token);
        if (response) {
            // this.setState({ "formDetails": response.data[0] })
            localStorage.setItem('formDetails', JSON.stringify(response.data[0]))
            this.setState({ 'formDetails': JSON.parse(localStorage.getItem('formDetails')), "leadDetId": JSON.parse(localStorage.getItem('formDetails')).leadDet_id })
            // console.log('formDetails', this.state.formDetails)
        }
    }
    statusChanger = (e) => {
        let data = { "leadDetId": this.state.leadDetId.toString(), "newStatus": e.target.name }
        console.log('Status Changer View One', data);
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "REJECTED") { this.setRedirecttoNew() }
            else { this.setRedirecttoActive() }
        });
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    {this.renderRedirect()}
                    <Row className="topContainer mt-5">
                        <Col md={8} className="font-size-15">
                            <p>{this.props.equipment}</p>
                        </Col>
                        <Col md={2}>
                            <Button variant="outline-danger" size="sm" name="REJECTED" block onClick={this.statusChanger}><i className="fas fa-trash-alt mr-2"></i>Remove</Button>
                        </Col>
                        <Col md={2}>
                            {/* <Link to='/business/leads/active'><Button variant="outline-success" size="sm" block>Activate Lead</Button></Link> */}
                            <Button variant="outline-success" size="sm" name="ACTIVATED" block onClick={this.statusChanger}>Activate Lead</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="cardForm">
                            <AddFields2 formData={this.state.formDetails}></AddFields2>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default AddViewOne
