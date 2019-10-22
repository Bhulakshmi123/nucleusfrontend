import React, { Component } from 'react';
import '../../assets/css/commonStyles.css'
import { Button, Grid, Row, Col, FormControl } from 'react-bootstrap';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard'
import { allProjects, newProjects, activeProjects, pendingProjects, rejectedProjects } from '../../views/Business/demoData'
class TabSystem extends Component {
    constructor(props) {
        super();
        this.state = {
            value: 'All Projects',
            dataset: allProjects
        }
    }
    getLinkClicked = (e) => {
        this.setState({ value: e.target.value });
        if (e.target.value === 'New') {
            this.setState({ dataset: newProjects })
            console.log(this.state.dataset);
        }
        if (e.target.value === 'Active') {
            this.setState({ dataset: activeProjects })
            console.log(this.state.dataset);
        }
        if (e.target.value === 'Pending') {
            this.setState({ dataset: pendingProjects })
            console.log(this.state.dataset);
        }
        if (e.target.value === 'Rejected') {
            this.setState({ dataset: rejectedProjects })
            console.log(this.state.dataset);
        }
        // return e.target.value;
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12} className="testRow">
                            <div>
                                <div className="navStyle">
                                    <input type="button" className="btn-modify btn btn-sm btn-block btn-primary" value="New" onClick={this.getLinkClicked}></input>
                                </div>
                                <div className="navStyle">
                                    <input type="button" className="btn-modify btn btn-sm btn-block btn-success" value="Active" onClick={this.getLinkClicked}></input>
                                </div>
                                <div className="navStyle">
                                    <input type="button" className="btn-modify btn btn-sm btn-block btn-warning" value="Pending" onClick={this.getLinkClicked}></input>
                                </div>
                                <div className="navStyle">
                                    <input type="button" className="btn-modify btn btn-sm btn-block btn-danger" value="Rejected" onClick={this.getLinkClicked}></input>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <BusinessMCard qwerty={this.state.value} data={this.state.dataset}></BusinessMCard>
            </div>
        )
    }
}

export default TabSystem
