import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarViewAction } from '../../redux/actions';
import SideArticle from '../../components/SideArticle/SideArticle';
const ViewDetails = () => {
    const sidebarView = useSelector(state => state.sidebarView);
    const dispatch = useDispatch();
    const dataFromUrl = () => { dispatch(sidebarViewAction(true)) }
    return (
        <React.Fragment>
            {dataFromUrl()}
            <div className={sidebarView ? "mainContent mainContentMini bg-white" : "mainContent bg-white"}>
                <Container fluid className="p-0">
                    <Row>
                        <Col md={4}>
                            <SideArticle></SideArticle>
                        </Col>
                        <Col md={8}></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default ViewDetails;
