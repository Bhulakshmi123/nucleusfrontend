import React from 'react';
import { sidebarViewAction } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
const Dashboard = () => {
  const sidebarView = useSelector(state => state.sidebarView);
  const dispatch = useDispatch();
  const dataFromUrl = () => { dispatch(sidebarViewAction(false)) }
  return (
    <React.Fragment>
      {dataFromUrl()}
      <div className="mainContent">
        <div className="text-center mt-25">
          <i className="fas fa-car-crash text-center text-white font-size-50"></i>
          <h1 className="text-white text-center">Under Maintenance</h1>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Dashboard;
