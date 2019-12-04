import React, { Component } from 'react'
import { Col, Row} from 'react-bootstrap';
import './SupplierCards.css';
import { supplierData } from '../../views/Business/SupplierData';
class SupplierCards extends Component {
    cardFunction = () => {
        supplierData.map((data) => {
            console.log(data.name);
            return (
                <h1>{data.name}</h1>
            );
        })
    }
    render() {
        console.log('Supplier Data', supplierData);
        return (
            <Row>
                {supplierData.map((data) => {
                    return (
                        <React.Fragment>
                            <Row>
                                <Col md={1}>
                                    <input type="checkbox"></input>
                                </Col>
                                <Col md={11}>
                                    <div className="card cardParent">
                                        <div className="cardChild1 child1_stle">
                                            <div><i class='far fa-user'></i>{data.name}</div>
                                            <div><img className="phoneIcon" src={require('assets/img/phone.svg')} alt="CalenderIcon"></img>{data.phoneno}</div>
                                        </div>
                                        <div className="cardChild1">
                                            <div>{data.equipmentName}</div>
                                            <div>{data.equipmentModel}</div>
                                        </div>
                                        <div className="cardChild1">
                                            <div>{data.location}</div>
                                            <div>{data.numof_equipment}</div>
                                        </div>
                                        <div className="cardChild1">
                                            <div>{data.equipmentCount}</div>
                                            <div>{data.projects}</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </React.Fragment>
                    )
                })}
            </Row>
        )
    }
}

export default SupplierCards
