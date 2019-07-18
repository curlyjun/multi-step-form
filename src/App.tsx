/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import input from './assets/input.json';
import MultiStepForm from './containers/MuitiStepForm';
import { State, Input } from './types';
import { INCREASE_STEP, DECREASE_STEP } from './reducers/step';
import { LOAD_INPUT_FILE } from './reducers/input';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    const _input: Input = {
      ...input,
    };
    _input.items.map(item => (item.answer = []));
    console.log(_input);
    dispatch({
      type: LOAD_INPUT_FILE,
      data: _input,
    });
  }, []);

  const { step } = useSelector((state: State) => state);
  const { items, title } = useSelector((state: State) => state.input);

  const onPrevious = useCallback(() => {
    dispatch({
      type: DECREASE_STEP,
    });
  }, [dispatch]);

  const onNext = useCallback(() => {
    dispatch({
      type: INCREASE_STEP,
    });
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
      <div>
        <h2>{items[step - 1].title}</h2>
        <MultiStepForm items={items} />
      </div>
      <button onClick={onPrevious}> 뒤로</button>
      <button onClick={onNext}> 다음</button>
    </div>
  );
};

export default App;
