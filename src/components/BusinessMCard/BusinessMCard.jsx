import React, { Component } from 'react';
import './BusinessMCard.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { getDateFormat_1 } from '../../commonFunctions/dates';
import { Route, Link} from 'react-router-dom'
import Business from '../../views/Business/index'
class BusinessMCard extends Component {
    nameFunction = (props) => {
        let html = [];
        let data = this.props.data;
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
        if (this.props.qwerty === 'New') {
            return (
                <Grid className="customContainer">{this.nameFunction()}</Grid>
            )
        }
        if (this.props.qwerty === 'Active') {
            return (
                <Grid className="customContainer">{this.nameFunction()}</Grid>
            )
        }
        if (this.props.qwerty === 'Pending') {
            return (
                <Grid className="customContainer">{this.nameFunction()}</Grid>
            )
        }
        if (this.props.qwerty === 'Rejected') {
            return (
                <Grid className="customContainer">{this.nameFunction()}</Grid>
            )
        }
        else {
            return (
                <Grid className="customContainer">{this.nameFunction()}</Grid>
            )
        }

    }
}
export default BusinessMCard
