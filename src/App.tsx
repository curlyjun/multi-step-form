/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import input from './assets/input.json';
import { State } from './types';
import MultiStepForm from './containers/MultiStepForm';
import IntroPage from './containers/IntroPage';
import CompletedPage from './components/CompletedPage';
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

  if (step === 0) {
    return <IntroPage title={input.title} />;
  } else if (step > input.items.length) {
    return <CompletedPage />;
  } else {
    return <MultiStepForm items={input.items} />;
  }
};

export default App;
