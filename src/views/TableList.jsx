import React from 'react';
import { sidebarViewAction } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
const TableList = () => {
  const sidebarView = useSelector(state => state.sidebarView);
  const dispatch = useDispatch();
  const dataFromUrl = () => { dispatch(sidebarViewAction(false)) }
  return (
    <React.Fragment>
      {dataFromUrl()}
      <div className={sidebarView ? "mainContent mainContentMini" : "mainContent"}>
        <h1 className="text-white text-center mt-5">TableList</h1>
      </div>
    </React.Fragment>
  )
}
export default TableList;
