import React, { Component } from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import { FaPlusCircle } from "react-icons/fa";
import BusinessAddNewModal from '../Modals/BusinessAddNewModal';
import { randomHeaderColorGenerator } from '../../commonFunctions/randomColorGenerator';
export class ArticleHeader extends Component {
    constructor(props) {
        super(props);
        // console.log('Article Header', this.props);
        this.state = {
            isModalShowing: false,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        let count = this.state.equipmentCount;
        let equipmentList = this.state.equipmentList.slice();
        let singleEquipment = equipmentList[count]
        singleEquipment.name = value;
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    modalHandler = (modalStatus) => {
        this.setState({
            isModalShowing: modalStatus
        });
    }

    render () {
        return (
            <React.Fragment>
                <Container className="mt-2">
                    <Row>
                        <Col md={10} className="px-0">
                            <h1 className="mx-0 my-0 text-white text-left">{this.props.heading}</h1>
                        </Col>
                        <Col md={2} className="my-auto px-0">
                            <Button variant="light" size="sm" block onClick={() => this.modalHandler(true)}><FaPlusCircle className="text-primary mr-2" />Add New</Button>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.isModalShowing} onHide={() => this.modalHandler(false)} size="xl">
                    <Modal.Header closeButton className={`text-white ${randomHeaderColorGenerator()}`}>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <BusinessAddNewModal
                            modalHider={this.modalHandler.bind(this)}
                            getLeadsOnSubmit={this.props.getLeads.bind(this)}>
                        </BusinessAddNewModal>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
