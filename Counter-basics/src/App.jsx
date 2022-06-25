import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: 'INC'});
  };
  const decrement = () => {
    if (counter === 0) {
      return;
    }
    dispatch({type: 'DEC'});
  };
  const Add = () => {
    dispatch({type: 'ADD', payload: 10});
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={Add}>Add by 10</button>
    </div>
  );
};

export default App;
