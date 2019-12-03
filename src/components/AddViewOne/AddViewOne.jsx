import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MiddleArticle from '../MiddleArticle/MiddleArticle';
class AddViewOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="topContainer mt-3">
                        <Col lg={8} className="redHeading">
                            <h3>Self Loading Concrete Miller [{this.props.selectedEquipment}]</h3>
                        </Col>
                        <Col lg={2}>
                            <Button variant="outline-danger" size="sm" block><i className="fas fa-trash-alt mr-2"></i>Remove</Button>
                        </Col>
                        <Col lg={2}>
                            <Link to='/business/active'><Button variant="outline-success" size="sm" block>Activate Lead</Button></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7} className="cardForm">
                            <MiddleArticle formId={this.props.selectedEquipment}></MiddleArticle>
                        </Col>
                        <Col lg={5} className="cardForm2">
                            <div className="redFrot card card_stle p-3">
                                What is Lorem Ipsum?
                                <br></br>
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </span>
                                <hr></hr>
                                Why do we use it?
                                <br></br>
                                <span>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default AddViewOne
