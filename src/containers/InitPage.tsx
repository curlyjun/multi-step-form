import React from 'react';
import { useDispatch } from 'react-redux';
import { INCREASE_STEP } from '../reducers/step';

interface Props {
  title: string;
}

const InitPage: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({
      type: INCREASE_STEP,
    });
  };
  return (
    <div className="grid-container">
      <div className="col1" />
      <div className="col2">
        <h1>{title}</h1>
        <article>
          <span className="intro-subtitle">고수를 소개받기 위해 </span>
          <br />
          <span className="intro-subtitle">몇가지 질문에 대답해주세요!</span>
        </article>
        <div className="intro-button-container">
          <button onClick={onClick} className="button-next">
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitPage;
