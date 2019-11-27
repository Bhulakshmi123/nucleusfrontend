import React from 'react';
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { getDateFormat_1 } from '../../commonFunctions/dates';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataObject, sidebarViewAction } from '../../redux/actions';
const BusinessMCard = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataPicker);
    const sidebarView = useSelector(state => state.sidebarView);
    let url = props.match.path.split('/')[props.match.path.split('/').length - 1];
    const dataFromUrl = () => {
        dispatch(dataObject(url));
        dispatch(sidebarViewAction(false));
    }
    return (
        <React.Fragment>
            {dataFromUrl()}
            <div className={sidebarView ? "mainContent mainContentMini" : "mainContent"}>
                <Container fluid className="my-5 pb-5">
                    <Row>
                        <Col md={12}>
                            <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
                            <Nav className="justify-content-around verticalNavLink mb-4">
                                <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/new" >New</NavLink>
                                <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/active" >Active</NavLink>
                                <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/pending" >Pending</NavLink>
                                <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/rejected" >Rejected</NavLink>
                            </Nav>
                        </Col>
                    </Row>
                    {data.map((prop, key) => {
                        return (
                            <Container key={key} >
                                <Row>
                                    <Col md={2} className="card text-center py-2 mb-auto whiteOpaque">{getDateFormat_1(prop[0])}</Col>
                                    <Col md={10}>
                                        {
                                            prop[1].map((prop, key) => {
                                                return (
                                                    <Link to={`/business/${url}/view/${prop.projectId}`} key={key}>
                                                        <Container fluid className="card p-3 mb-4">
                                                            <Row>
                                                                <Col md={5} className="my-auto text-dark">
                                                                    <div className="projectName">{prop.projectName}</div>
                                                                    <div><i className="fas fa-map-marked-alt mr-2 text-primary"></i>{prop.projectLocation}</div>
                                                                </Col>
                                                                <Col md={3} className="my-auto text-dark">
                                                                    <div className="text-capitalize"><i className="fas fa-user-alt mr-2 text-primary"></i>{prop.projectPointOfContact}</div>
                                                                    <div><i className="fas fa-phone-square mr-2 text-primary"></i>{prop.pocNo}</div>
                                                                </Col>
                                                                <Col md={2} className="my-auto">
                                                                    <div className="card text-center bg-dark py-1 mx-4 text-white text-uppercase">{prop.typeOfService}</div>
                                                                </Col>
                                                                <Col md={2} className="my-auto text-dark text-center">
                                                                    <h1 className="mb-0 text-primary">{prop.equipmentCount}</h1>
                                                                    <div className="mtn-5">Equipment</div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Link>
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
export default BusinessMCard;
