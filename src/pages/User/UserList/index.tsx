import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  addNumber,
  getCounter
} from '../../../redux/reducer/counterSlice';
// import { connect } from 'react-redux';
// import { counterSlice } from '../../../redux/reducer/counterSlice';

// class UserList extends React.Component {
//   componentDidMount() {}
//   render() {
//     const { count } = this.props;
//     return (
//       <div>
//         <button
//           aria-label='Increment value'
//           onClick={() => this.props.increment()}>
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label='Decrement value'
//           onClick={() => this.props.decrement()}>
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }
// export default connect(state => state, counterSlice.actions)(UserList);

function UserList() {
  const dispatch = useAppDispatch();
  // const count = useAppSelector(({ counter }: any) => counter.value);
  const { value } = useAppSelector(getCounter);
  const setNumber = () => {
    dispatch(addNumber(10)).then(res => {
      // todo
    });
  };
  return (
    <div>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{value}</span>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        aria-label='incrementByAmount value'
        onClick={() => dispatch(incrementByAmount(10))}>
        incrementByAmount
      </button>
      <button aria-label='addNumber value' onClick={() => setNumber()}>
        addNumber
      </button>
    </div>
  );
}

export default UserList;
