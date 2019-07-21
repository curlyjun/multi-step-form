import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SelectFormType from './SelectFormType';
import { State, Item } from '../types';
import { DECREASE_STEP, INCREASE_STEP } from '../reducers/step';
import ProgressBar from '../components/ProgressBar';

import './MultiStepForm.css';

interface Props {
  items: Item[];
}

const MutliStepForm: React.FC<Props> = ({ items }) => {
  const dispatch = useDispatch();

  const { step } = useSelector((state: State) => state);
  const { items: resultItems } = useSelector((state: State) => state.result);

  const onPrevious = useCallback(() => {
    dispatch({
      type: DECREASE_STEP,
    });
  }, [dispatch]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 벨리데이션
    if (resultItems[step - 1].answer.length === 0) {
      return alert('값을 입력해주세요!');
    }
    dispatch({
      type: INCREASE_STEP,
    });
  };
  return (
    <article className="form-container">
      <ProgressBar currentStep={step - 1} length={items.length} />
      <h2>{items[step - 1].title}</h2>
      <form onSubmit={onSubmit}>
        <SelectFormType items={items} />
        <div className="button-container">
          <button
            className="button-previous"
            type="button"
            onClick={onPrevious}
          >
            이전
          </button>
          {step === items.length ? (
            <button className="button-submit"> 제출</button>
          ) : (
            <button className="button-next"> 다음 </button>
          )}
        </div>
      </form>
    </article>
  );
};

export default MutliStepForm;
