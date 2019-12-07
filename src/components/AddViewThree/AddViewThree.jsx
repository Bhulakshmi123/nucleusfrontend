
import React, { Component } from 'react'
import { Container, Col, Row, Button, Badge, InputGroup, Card } from 'react-bootstrap';
import { MdTextsms } from 'react-icons/md';
import { FaGgCircle, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaRegStopCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { getSupplierList } from '../../views/Business/actions';
import SupplierCards from '../SupplierCards/SupplierCards.jsx';
import { IoMdPerson, IoMdMailOpen, IoMdMenu } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import AddViewModal from '../AddViewTwo/AddViewModal';
class AddViewThree extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = { "token": token, "data": { "equipmentType": "21" }, "response": null, "categoryNames": [], "selectedCategory": null, "dataToRender": [], "checkedProjects": [], checked: true }
    }
    componentDidMount() {
        this.getSupplierList();
    }
    getSupplierList = async () => {
        let response = await getSupplierList(this.state.data, this.state.token);
        if (response) {
            let categoryName = [];
            this.setState({ "response": response.data });
            for (let categoryType in response.data) { categoryName.push(categoryType) }
            this.setState({ 'categoryNames': categoryName, 'selectedCategory': categoryName[0] });
            this.setState({ "dataToRender": response.data[this.state.selectedCategory] })
        }
    }
    handleCheck = (e) => {
        this.setState({ checked: !this.state.checked });
        if (this.state.checkedProjects.length <= this.state.categoryNames.length) {
            this.setState({ checkedProjects: [...this.state.checkedProjects, e.target.value] })
            console.log('checkpoint1', this.state.checkedProjects);
        }
        else {
            let data = this.state.checkedProjects;
            data.pop();
            console.log('checkpoint2', data);
            this.setState({ "checkedProjects": data })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mt-5 pl-0" fluid>
                    <Row>
                        <Col md={6} className="my-auto"><h3 className="my-auto">Self Loading Concrete Mixer</h3></Col>
                        <Col md={1} className="my-auto"><AddViewModal></AddViewModal></Col>
                        <Col md={2} className="my-auto">
                            <Button variant="outline-danger" size="sm" block><FaRegStopCircle className="mr-1" />Reject</Button>
                        </Col>
                        <Col md={3} className="my-auto">
                            <Button variant="outline-success" size="sm" block><FaRegArrowAltCircleRight className="mr-1" />Move to Projects</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="my-4 bg-lightgray mx-auto">
                            <h2 className="py-4 m-0"><FaRegArrowAltCircleLeft className="mr-5" />Suppliers List</h2>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md={7} className="text-left">
                            {
                                this.state.categoryNames.map((prop, key) => {
                                    return (<NavLink key={key} activeClassName="linkStateActive" className="mx-3 font-size-10 linkStateHover" onClick={
                                        () => {
                                            this.setState({ 'selectedCategory': prop });
                                            this.setState({ 'dataToRender': this.state.response[prop] })
                                        }}
                                        to={`/business/active/view/eqsuppliers/101/${prop}`} >{prop}</NavLink>)
                                })
                            }
                        </Col>
                        <Col md={3} className="my-auto"><Button variant="outline-primary" size="sm" block>Request Bids <Badge pill variant="primary">13</Badge></Button></Col>
                        <Col md={2} className="my-auto"><Button variant="outline-info" size="sm" block><MdTextsms className="mr-1" />SMS</Button></Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            {this.state.dataToRender.map((prop, key) => {
                                return (
                                    <Container fluid className="w-95" key={key}>
                                        <Row className="mt-2">
                                            <Col md={1} className="my-auto">
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="mx-auto text-center bor-rad-0" value={prop.uuid} onChange={this.handleCheck} />
                                            </Col>
                                            <Col md={11} className="pr-0">
                                                <Card className="my-2 p-3">
                                                    <Row>
                                                        <Col md={3} className="my-auto">
                                                            <div className="font-size-10 text-capitalize"><IoMdPerson className="text-primary mr-1 font-size-12" />{prop.name}</div>
                                                            <div className="font-size-09"><MdPhone className="text-primary mr-2 text-center font-size-10" />{prop.phoneNumber}</div>
                                                        </Col>
                                                        <Col md={1} className="my-auto">
                                                            <div className="text-center"><IoMdMenu className="font-size-15 text-dark" /></div>
                                                        </Col>
                                                        <Col md={2} className="my-auto">
                                                            <div className="font-size-10 text-capitalize text-primary">{prop.accountCategory}</div>
                                                            <div className="">{prop.companyId}</div>
                                                        </Col>
                                                        <Col md={4} className="my-auto">
                                                            <div className="font-size-10">{prop.companyName}</div>
                                                            <div className="font-size-09"><IoMdMailOpen className="text-primary mr-2 font-size-10" />{prop.emailId}</div>
                                                        </Col>
                                                        <Col md={2} className="my-auto text-center">
                                                            <div className="font-size-20 text-primary">21</div>
                                                            <div className="w-100 text-center mtn-10">Projects</div>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

}
export default AddViewThree;
