import React, { useReducer } from 'react';
import { initialState, reducer } from './globalState';

const MyComponent1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Access and update state using dispatch function

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default MyComponent1;
