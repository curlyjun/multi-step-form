/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import input from './assets/input.json';
import { State } from './types';
// import { LOAD_INPUT_FILE } from './reducers/input';
import MultiStepForm from './containers/MutiStepForm';
import { INITIAL_ITEMS } from './reducers/result';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state: State) => state);
  useEffect(() => {
    dispatch({
      type: INITIAL_ITEMS,
      data: {
        formId: input.formId,
        itemsLength: input.items.length,
      },
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>{input.title}</h1>
      </header>
      <div>
        {step > input.items.length ? (
          <div>수고</div>
        ) : (
          <MultiStepForm items={input.items} />
        )}
      </div>
    </div>
  );
};

export default App;
