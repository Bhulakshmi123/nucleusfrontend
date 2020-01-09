import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export class DefaultCard extends Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col md={this.props.md} sm={12} xs={12} className="bg-light mx-auto bor-rad-05 m-3 p-2 card">
                        <p className="text-center m-0 p-2 font-size-10 text-bluefuchsia fontGilroyMedium text-capitalize">
                            {this.props.children}
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
