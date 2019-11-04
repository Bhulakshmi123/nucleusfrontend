import React, { Component } from 'react'
import SearchList from '../../components/SearchList/SearchList'
import { Row, Col, Grid, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SideArticle.css'
import { idData } from '../../views/Business/idData'
import MiddleArticle from '../../components/MiddleArticle/MiddleArticle'
// import Renter from '../../components/Renter/Renter'
// import Supplier from '../../components/Supplier/Supplier'

class SideArticle extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: idData.clientEquipmentDetails[0].equipmentId,
            selectedEquipment: idData.clientEquipmentDetails[0].equipmentName,
            active: false,
        }
    }
    getSelectedEquipment = (e) => {
        this.setState({ selected: e.currentTarget.dataset.id, active: !this.state.active });
    }
    getClientName = () => {
        return (idData.clientName)
    }
    getEquipmentData = () => {
        let html = [];
        for (let x in idData.clientEquipmentDetails) {
            html.push(
                <div key={idData.clientEquipmentDetails[x].equipmentId}>
                    <div className={`eqParent ${this.state.selected === idData.clientEquipmentDetails[x].equipmentId ? "activeDiv" : 'null'}`} onClick={this.getSelectedEquipment} onMouseEnter={this.getId} data-id={idData.clientEquipmentDetails[x].equipmentId}>
                        <div className="eqChild1">
                            <div className="eqChild11">{idData.clientEquipmentDetails[x].equipmentName}</div>
                            <div className="eqChild12">{idData.clientEquipmentDetails[x].equipmentMake}</div>
                        </div>
                        <div className="eqChild2">
                            <div>{idData.clientEquipmentDetails[x].equipmentCount}</div>
                        </div>
                    </div>
                    <hr className="borderEffect"></hr>
                </div>
            )
        }
        return html;
    }
    render() {
        console.log('this', this);
        return (
            <div>
                <div>
                </div>
                <Grid className="modifiedContainer">
                    <Row>
                        <Col lg={3} className="Sidebar">
                            <div className="SidebarLevel1">
                                <Link className="backLink btn-link" to="/business/all"><i className="fas fa-arrow-circle-left nbSpan"></i>back to Leads</Link>
                                <h5 className="viewHeadingTitle">New Lead</h5>
                                <h3 className="viewHeading">{this.getClientName()}</h3>
                                <Button className="btnLeft" bsSize="small"><i className="fas fa-edit nbSpan"></i>Edit</Button>
                                <div className="SearchComponent">
                                    <SearchList></SearchList>
                                </div>
                                <div>
                                    {this.getEquipmentData()}
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <Row className="topContainer">
                                <Col lg={8} className="redHeading">
                                    <h3>Self Loading Concrete Miller</h3>
                                </Col>
                                <Col lg={2}>
                                    <Button bsStyle="danger" block><i className="fas fa-trash-alt nbSpan"></i>Remove</Button>
                                </Col>
                                <Col lg={2}>
                                <Button bsStyle="success" block>Activate Lead</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={7} className="cardForm">
                                    <MiddleArticle formId={this.state.selected}></MiddleArticle>
                                </Col>
                                <Col lg={5} className="cardForm2">
                                    <div className="redFrot card">
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
                                        <hr></hr>
                                        Where does it come from?
                                <br></br>
                                        <span>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </span>
                                        <hr></hr>
                                        Where can I get some?
                                <br></br>
                                        <span>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                            What is Lorem Ipsum?
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </span>
                                        <hr></hr>
                                        Why do we use it?
                                <br></br>
                                        <span>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </span>
                                        <hr></hr>
                                        Where does it come from?
                                <br></br>
                                        <span>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </span>
                                        <hr></hr>
                                        Where can I get some?
                                <br></br>
                                        <span>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>


                        {/* <Col lg={9} className="activeData">
                            <div className="activeContainer">
                                <div>
                                    <Row className="ActiveHeading">
                                        <Col lg={4} className="ActiveHeadingTitle">{this.state.selectedEquipment}</Col>
                                        <Col lg={1}><i className="fab fa-gg-circle icon-fs"></i></Col>
                                        <Col lg={2}><Button bsStyle="primary" className="btn-modified" block>Suppliers List</Button></Col>
                                        <Col lg={2}><Button bsStyle="danger" className="btn-modified" block><i className="fas fa-ban nbSpan"></i>Reject</Button></Col>
                                        <Col lg={3}><Button bsStyle="info" block>Move to Projects</Button></Col>
                                    </Row>
                                </div>
                                <div className="renterName">RENTER</div>
                                <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#"></Renter>
                                <div className="renterName">FINALISED SUPPLIER</div>
                                <Supplier></Supplier>
                                <div className="renterName">SHORTLISTED SUPPLIER</div>
                                <Supplier></Supplier>
                            </div>
                        </Col> */}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SideArticle
