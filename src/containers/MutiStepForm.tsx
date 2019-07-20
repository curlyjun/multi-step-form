import React, { useCallback } from 'react';
import SelectFormType from './SelectFormType';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../types';
import { DECREASE_STEP, INCREASE_STEP } from '../reducers/step';

interface Props {
  items: any;
}

const MutiStepForm: React.FC<Props> = ({ items }) => {
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
    // 유효성 검사 해야함.
    if (resultItems[step - 1].answer.length === 0) {
      return alert('입력해주세요.');
    }
    dispatch({
      type: INCREASE_STEP,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <SelectFormType items={items} />
      <div>{`${step} / ${items.length}`}</div>
      <div>
        <button type="button" onClick={onPrevious}>
          뒤로
        </button>
        {step === items.length ? (
          <button> 제출</button>
        ) : (
          <button> 다음</button>
        )}
      </div>
    </form>
  );
};

export default MutiStepForm;
