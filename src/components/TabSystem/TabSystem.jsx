import React, { Component } from 'react';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';
class TabSystem extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12} className="testRow">
                        <div>
                            <div className="navStyle">Active</div>
                            <div className="navStyle">New</div>
                            <div className="navStyle">Approved</div>
                            <div className="navStyle">Pending</div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default TabSystem
