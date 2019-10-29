import React, { Component } from 'react';
import './BusinessMCard.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { getDateFormat_1 } from '../../commonFunctions/dates';
import { Route, Link } from 'react-router-dom';
import Business from '../../views/Business/index';
import { allProjects, newProjects, activeProjects, pendingProjects, rejectedProjects } from '../../views/Business/demoData';
class BusinessMCard extends Component {
    nameFunction = (props) => {
        let html = [];
        let data;
        console.log('props', this.props.match.path);
        if (this.props.match.path === '/business/all') {
            data = allProjects;
        }
        else {
            if (this.props.match.path === '/business/new') {
                data = newProjects;
            }
            else {
                if (this.props.match.path === '/business/active') {
                    data = activeProjects;
                }
                else {
                    if (this.props.match.path === '/business/pending') {
                        data = pendingProjects;
                    }
                    else {
                        if (this.props.match.path === '/business/rejected') {
                            data = rejectedProjects;
                        }
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
                        <Link to={`/business/view/${data[x][y].projectId}`}>
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
                        <Route path="/business/view:id" component={Business} />
                    </div>
                );
            }
            html.push(<Row className="divBreaker" key={Math.random() * Math.random()}></Row>)
        }
        return html;
    }
    render() {
        return (
            <Grid className="customContainer">{this.nameFunction()}</Grid>
        )
    }
}
export default BusinessMCard
