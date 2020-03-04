
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: false
    }
  }
  deleteThisGoal = () => {
    this.setState({ alert: true });
    console.log('This is Being Called', this.state.alert);
  }
  hideAlert = () => {
    this.setState({ alert: false });
  }
  render () {
    return (
      <React.Fragment>
        {this.state.alert ? <SweetAlert title="Here's a message!" onConfirm={this.hideAlert} /> : null}
        {/* <SweetAlert
          input
          inputType="password"
          showCancel
          cancelBtnBsStyle="default"
          title="Upload Documents"
          placeHolder="Upload A Document"
          onConfirm={(response) => this.onReceiveInput(response)}
          onCancel={this.onCancel}>Write something interesting:
          </SweetAlert> */}

        <div className="mainContent">
          <h1 className="text-white text-center mt-5">Under Maintenance</h1>
          <div className="w-100 text-center">
            <Button variant="outline-warning" size="sm" onCslick={this.deleteThisGoal}>Demo Alert Box</Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Projects;
