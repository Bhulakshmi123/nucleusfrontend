import React, { Component } from 'react';
import './BusinessMCard.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { getDateFormat_1 } from '../../commonFunctions/dates';
import { Link, NavLink } from 'react-router-dom';
import { newProjects, activeProjects, pendingProjects, rejectedProjects } from '../../views/Business/demoData';
import ArticleHeader from '../ArticleHeader/ArticleHeader';

class BusinessMCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: newProjects
        }
    }

    nameFunction = (props) => {
        let html = [];
        let data;
        if (this.props.match.path === '/business/new') {
            data = newProjects;
            // this.setState({ data: "newProjects" })
        }
        else {
            if (this.props.match.path === '/business/active') {
                data = activeProjects;
                // this.setState({ data: "activeProjects" })
            }
            else {
                if (this.props.match.path === '/business/pending') {
                    data = pendingProjects;
                    // this.setState({ data: "pendingProjects" })
                }
                else {
                    if (this.props.match.path === '/business/rejected') {
                        data = rejectedProjects;
                        // this.setState({ data: "rejectedProjects" })
                    }
                }
            }
        }
        for (let x in data) {
            html.push(
                <div className="dateStyles" key={x}>
                    <div>
                        {getDateFormat_1(x)}
                    </div>
                </div>
            )
            for (let y in data[x]) {
                html.push(
                    <div key={data[x][y].projectId} >
                        <Link to={`${this.props.match.path}/view/${data[x][y].projectId}`}>
                            <div className="project">
                                <Row className="rowWidth">
                                    <Col lg={5}>
                                        <div className="projectName">{data[x][y].projectName}</div>
                                        <div className="projectLocation"><i className="fas fa-map-marked-alt nbSpan"></i>{data[x][y].projectLocation}</div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="projectPointOfContact"><i className="fas fa-user-alt nbSpan"></i>{data[x][y].projectPointOfContact}</div>
                                        <div className="projectpocNo"><i className="fas fa-phone-square nbSpan"></i>{data[x][y].pocNo}</div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="typeOfService">{data[x][y].typeOfService}</div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="equipmentCount">{data[x][y].equipmentCount}</div>
                                        <p className="equipmentCountParagraph">Equipment</p>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </div>
                );
            }
            html.push(<Row className="divBreaker" key={Math.random() * Math.random()}></Row>)
        }
        return html;
    }
    generateCard = (props) => {
        console.log("stateValue", this.state.data);
    }
    render() {
        return (
            <React.Fragment>
                {/* <div className="mt-5 testContainer">
                {this.nameFunction()}
            </div> */}
                <div className="mainContent">
                    <Container fluid className="mt-5 mb-5 pb-5">
                        <Row>
                            <Col md={12}>
                                <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
                                <Nav className="justify-content-around verticalNavLink mb-4">
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink pl-2 pr-2" to="/business/new">New</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink pl-2 pr-2" to="/business/active">Active</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink pl-2 pr-2" to="/business/pending">Pending</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink pl-2 pr-2" to="/business/rejected">Rejected</NavLink>
                                </Nav>
                            </Col>
                        </Row>
                        {this.state.data.map((prop, key) => {
                            return (
                                <Container key={key} >
                                    <Row>
                                        <Col md={2} className="card text-center py-2 mb-auto">{getDateFormat_1(prop[0])}</Col>
                                        <Col md={10}>
                                            {
                                                prop[1].map((prop, key) => {
                                                    return (
                                                        <Container fluid className="card p-3 mb-4" key={key}>
                                                            <Row>
                                                                <Col md={5} className="my-auto text-dark">
                                                                    <div className="projectName">{prop.projectName}</div>
                                                                    <div><i className="fas fa-map-marked-alt mr-2 text-primary"></i>{prop.projectLocation}</div>
                                                                </Col>
                                                                <Col md={3} className="my-auto text-dark">
                                                                    <div className="text-uppercase"><i className="fas fa-user-alt mr-2 text-primary"></i>{prop.projectPointOfContact}</div>
                                                                    <div><i className="fas fa-phone-square mr-2 text-primary"></i>{prop.pocNo}</div>
                                                                </Col>
                                                                <Col md={2} className="my-auto">
                                                                    <div className="card text-center bg-secondary py-1 mx-4 text-white text-uppercase">{prop.typeOfService}</div>
                                                                </Col>
                                                                <Col md={2} className="my-auto text-dark text-center">
                                                                    <h1 className="mb-0 text-primary">{prop.equipmentCount}</h1>
                                                                    <div className="mtn-5">Equipment</div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    )
                                                })
                                            }
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        })}
                    </Container>
                </div>
            </React.Fragment>

        )
    }
}
export default BusinessMCard;
