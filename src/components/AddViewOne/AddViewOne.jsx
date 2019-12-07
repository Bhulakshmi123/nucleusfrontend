import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddFields2 from '../FormFields/AddFields2';
import { getLeadEquipmentDetails } from '../../views/Business/actions';
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = { "token": token, "formDetails": [] }
    }
    componentDidMount() {
        this.getLeadEquipmentDetails();
    }
    getLeadEquipmentDetails = async () => {
        let response = await getLeadEquipmentDetails(this.props.uid + '/' + this.props.leaduid, this.state.token);
        if (response) {
            // this.setState({ "formDetails": response.data[0] })
            localStorage.setItem('formDetails', JSON.stringify(response.data[0]))
            this.setState({ 'formDetails': JSON.parse(localStorage.getItem('formDetails')) })
            // console.log('formDetails', this.state.formDetails)
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="topContainer mt-5">
                        <Col md={8} className="font-size-15">
                            <p>{this.props.leaduid}</p>
                        </Col>
                        <Col md={2}>
                            <Button variant="outline-danger" size="sm" block><i className="fas fa-trash-alt mr-2"></i>Remove</Button>
                        </Col>
                        <Col md={2}>
                            <Link to='/business/leads/active'><Button variant="outline-success" size="sm" block>Activate Lead</Button></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="cardForm">
                            <AddFields2 name='Mano' formData={JSON.parse(localStorage.getItem('formDetails'))}></AddFields2>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default AddViewOne
