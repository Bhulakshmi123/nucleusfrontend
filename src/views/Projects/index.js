// import React, { Component } from "react";


// class Projects extends Component {
//   counter = useSelector(state => state.counter);
//   render() {
//     return (
//       <div>
//         Projects
//         <h1>Counter {counter()}</h1>
//       </div>
//     );
//   }
// }

// export default Projects;
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../../actions/index';
const Projects = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>React Sucks</h3> : ''}
    </div>
  )
}

export default Projects;
