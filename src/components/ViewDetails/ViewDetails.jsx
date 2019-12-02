import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarViewAction } from '../../redux/actions';
import SideArticle from '../../components/SideArticle/SideArticle';
import AddViewOne from '../AddViewOne/AddViewOne';
import AddViewTwo from '../AddViewTwo/AddViewTwo';
import { Route } from 'react-router-dom';
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
                        <Col md={3} className="backgroundColor1 viewHeight px-0">
                            <SideArticle></SideArticle>
                        </Col>
                        <Col md={9} clasName="viewHeight px-0">
                            <Route path="/business/new/view/:id" component={AddViewOne} />
                            <Route path="/business/active/view/:id" component={AddViewTwo} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default ViewDetails;
