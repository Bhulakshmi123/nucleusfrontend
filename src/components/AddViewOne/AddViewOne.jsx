import React, { Component } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import AddFieldsPro from '../FormFields/AddFieldsPro';
import { toast } from 'react-toastify';
// import SelectInputSearch from './SelectInputSearch';
import { toastNotification } from '../../commonFunctions/toastAlert';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        console.log('Add View One', this.props);
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token,
            isSweetAlertShowing: false,
            btnTitle: '',
            propsCommandText: '',
            disableData: 0
        }
    }

    
    componentDidMount() {
        this.dataDisabilityStatusChecker();
    }

    dataDisabilityStatusChecker = () => {
        if (this.props.disableData === 'true') {
            this.setState({
                disableData: true
            });
        }
        else {
            this.setState({
                disableData: false
            });
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    openSweetAlert = (btnTitleValue, propsCommandTextValue) => {
        this.setState({
            isSweetAlertShowing: true,
            btnTitle: btnTitleValue,
            propsCommandText: propsCommandTextValue
        });
    }

    closeSweetAlert = () => {
        this.setState({
            isSweetAlertShowing: false
        });
    }

    inputChangeHandlerForSelect = (e) => {
        let leadForm = this.state.leadForm;
        let placeHolder = e.name + '_name';
        leadForm = {
            ...leadForm,
            [e.name]: e.value,
            [placeHolder]: e.label
        }
        this.setState({
            leadForm: leadForm,
            isOpenFormDropDown: false
        }, () => { console.log(this.state.leadForm) });
    };

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="my-4">
                        <Col md={8} className="my-auto">
                            <h3 className="mb-0 my-auto text-capitalize">{this.props.formData.equipmentName}</h3>
                        </Col>
                        <Col md={2} className={`my-auto ${this.props.buttonStatus}`}>
                            <Button variant="danger" size="sm" block onClick={() => this.openSweetAlert('Remove', 'DELETED')}>Remove</Button>
                        </Col>
                        <Col md={2} className={`my-auto ${this.props.buttonStatus}`}>
                            <Button variant="success" size="sm" block onClick={() => this.openSweetAlert('Activate', 'ACTIVATED')}>Activate Lead</Button>
                        </Col>
                        <Col md={4} className={`my-auto ${this.props.labelStatus}`}>
                            <div className="text-white bg-brickRed text-center p-1 bor-rad-30 text-uppercase">This Lead Was Deleted</div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={12}>
                            <React.Fragment>
                                <AddFieldsPro
                                    leadUuid={this.props.formData.lead_uuid}
                                    leadDetUuid={this.props.formData.leadDet_uuid}>
                                </AddFieldsPro>

                            </React.Fragment>
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.isSweetAlertShowing ?
                        <SweetAlert
                            info
                            title={<span className="text-dark fontGilroyMedium">Are You Sure ?</span>}
                            onConfirm={this.closeSweetAlert}
                            onCancel={this.closeSweetAlert}
                            timeout={5000}
                            customButtons={
                                <React.Fragment>
                                    <Button variant="danger" className="w-30 m-2" onClick={this.closeSweetAlert}>Close</Button>
                                    <Button variant="primary" className="w-30 m-2" onClick={() => { this.props.statusChanger(this.props.formData.leadDet_id, this.state.propsCommandText, 'NEW', this.props.formData.equipmentName); this.closeSweetAlert() }}>{this.state.btnTitle}</Button>
                                </React.Fragment>
                            }>
                            <span className="fontGilroyMedium font-size-09">Please Click {this.state.btnTitle} to {this.state.btnTitle} the Lead</span>
                        </SweetAlert>
                        : null
                }
            </React.Fragment>
        )
    }
}
export default AddViewOne;
