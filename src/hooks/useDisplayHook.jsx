import { useState } from 'react';

const useDisplayHook = (reducer, initialState) => {
  const [states, setStates] = useState(initialState);
  const dispatch = (action) => {
    const newStates = reducer(states, action);
    setStates(newStates);
  };
  return [states, dispatch];
};

export default useDisplayHook;
