import React, { Component } from 'react';
import '../../assets/css/commonStyles.css';
import '../Modal/Modal.css';
<<<<<<< HEAD
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
=======
import { Modal, Button, Grid, Col, Row } from 'react-bootstrap';
import BusiAddnewmodal from '../Modals/BusiAddnewmodal';
>>>>>>> caf4ab48c2adce18b1ba52b24bf99c94a3d6f0a0
class ArticleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        console.log(name);
        console.log(value);
        let count = this.state.equipmentCount;
        let equipmentList = this.state.equipmentList.slice();
        let singleEquipment = equipmentList[count]
        singleEquipment.name = value;
        //this.setState(equipmentList);
        console.log(this.state.equipmentList);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log("hi", data)
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
                        <Col md={10}>
                            <h1 className="mx-0 my-0 text-white text-left">{this.props.heading}</h1>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="light" size="sm" block onClick={this.openModalHandler}>
                                <i className="fas fa-plus-circle nbSpan text-primary"></i>Add New
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.isShowing} onHide={this.closeModalHandler} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <BusiAddnewmodal />
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button>
                        <Button bsStyle="primary" onClick={this.openInputHandler} >Add New </Button>
                    </Modal.Footer> */}
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}
export default ArticleHeader;
