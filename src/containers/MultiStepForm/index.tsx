import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MultiStepForm.css';
import { State, Item } from '../../types';

import SelectFormType from '../../components/SelectFormType';
import { DECREASE_STEP, INCREASE_STEP } from '../../reducers/step';
import ProgressBar from '../../components/ProgressBar';
import {
  NextButton,
  PreviousButton,
  SubmitButton,
} from '../../components/Buttons';

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

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // 벨리데이션
      if (resultItems[step - 1].answer.length === 0) {
        return alert('값을 입력해주세요!');
      }
      dispatch({
        type: INCREASE_STEP,
      });
    },
    [dispatch, resultItems, step],
  );

  return (
    <article className="form-container">
      <ProgressBar currentStep={step} length={items.length} />
      <h2>{items[step - 1].title}</h2>
      <form onSubmit={onSubmit}>
        <ul>
          <SelectFormType items={items} />
        </ul>
        <div className="button-container">
          <PreviousButton onClick={onPrevious} />
          {step === items.length ? <SubmitButton /> : <NextButton />}
        </div>
      </form>
    </article>
  );
};

export default MutliStepForm;
