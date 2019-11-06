import React, { Component } from 'react'
import { Grid, Col, Row, Button } from 'react-bootstrap';
import './SupplierCards.css';
import { supplierData } from '../../views/Business/SupplierData';
class SupplierCards extends Component {
    cardFunction = ()=> {
        let html =[];
        supplierData.map((data)=>{
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
                <Col md={1}>
                    <input type="checkbox"></input>
                </Col>
                <Col md={11}>
                    <div className="card cardParent">
                        <div className="cardChild1">
                            <div>Alan Santagio</div>
                            <div>857-641-7309</div>
                        </div>
                        <div className="cardChild1">
                            <div>Alan Santagio</div>
                            <div>857-641-7309</div>
                        </div>
                        <div className="cardChild1">
                            <div>Alan Santagio</div>
                            <div>857-641-7309</div>
                        </div>
                        <div className="cardChild1">
                            <div>Alan Santagio</div>
                            <div>857-641-7309</div>
                        </div>
                    </div>
                </Col>
                {/* {supplierData.map((data)=>{
                   return (
                    <h1>{data.name}</h1>
                   )
                })} */}
            </Row>
        )
    }
}

export default SupplierCards
