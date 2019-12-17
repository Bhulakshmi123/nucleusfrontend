import React, { Component } from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import { FaPlusCircle } from "react-icons/fa";
import BusiAddnewmodal from '../Modals/BusiAddnewmodal';
export class ArticleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        // let name = e.target.name;
        let value = e.target.value;
        let count = this.state.equipmentCount;
        let equipmentList = this.state.equipmentList.slice();
        let singleEquipment = equipmentList[count]
        singleEquipment.name = value;
    }

    onSubmit = (e) => {
        e.preventDefault();
        // const data = this.state
    }
    openModalHandler = () => {
        this.setState({ isShowing: true });
    }
    closeModalHandler = () => {
        this.setState({ isShowing: false });
    }
    openInputHandler = () => {
        this.setState({ isEquipmentinfo: true });
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mt-2">
                    <Row>
                        <Col md={10} className="px-0">
                            <h1 className="mx-0 my-0 text-white text-left">{this.props.heading}</h1>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="light" size="sm" block onClick={this.openModalHandler}><FaPlusCircle className="text-primary mr-2" />Add New</Button>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.isShowing} onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <BusiAddnewmodal />
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
