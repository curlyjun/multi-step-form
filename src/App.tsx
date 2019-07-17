import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TEST_REDUCER } from './reducers/test';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { number } = useSelector(
    (state: { test: { number: number } }) => state.test,
  );
  const onClickButton = () => {
    dispatch({
      type: TEST_REDUCER,
    });
  };

  return (
    <div className="App">
      <p>{number}</p>
      <button onClick={onClickButton}>test</button>
      <header className="App-header">Hello, World</header>
    </div>
  );
};

export default App;
