
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Projects extends Component {
  notify = () => {
    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'customAlert'
    });
  };
  render () {
    return (
      <React.Fragment>
        <div className="mainContent">
          <h1 className="text-white text-center mt-5">Under Maintenance</h1>
          <div className="w-100 text-center">
            <Button variant="outline-warning" size="sm" onClick={this.notify}>Demo Alert Box</Button>
            <ToastContainer />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Projects;
