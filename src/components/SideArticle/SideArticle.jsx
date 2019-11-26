import React from 'react'
import { idData } from '../../views/Business/idData';
import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
const SideArticle = () => {
    const history = useHistory();
    console.log('History',history);
    return (
        <React.Fragment>
            <div className="mb-5 pb-5">
                <div className="mt-5 px-4 mb-4">
                    <h6 className="pl-1 text-white opct-5 mb-1">New Lead</h6>
                    <h3 className="text-white pl-1">{idData[0]}</h3>
                    <Button variant="light" size="sm" className="px-3 ml-1 text-primary"><i className="far fa-edit mr-1"></i>Edit</Button>
                </div>
                <div className="px-3 mx-0">
                    <InputGroup className="pl-2 ml-1 searchBarStyle">
                        <InputGroup.Prepend>
                            <InputGroup.Text className="searchBarPrepend"><i className="fas fa-search"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" placeholder="Search" className="formControlSearch" />
                    </InputGroup>
                </div>
                <Container fluid className="mt-3 px-0">
                    {
                        idData[1].map((prop, key) => {
                            return (
                                <Row className="text-white borderedRow px-0 py-2 mx-0" key={key}>
                                    <Col md={9} className="pl-4">
                                        <div className="pl-1">{prop.equipmentName}</div>
                                        <div className="pl-1">{prop.equipmentMake}</div>
                                    </Col>
                                    <Col md={3} className="my-auto">
                                        <div className="text-white equipmentCount p-1 text-center">{prop.equipmentCount}</div>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Container>
            </div>
        </React.Fragment>
    )
}
export default SideArticle;
