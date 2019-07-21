import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './IntroPage.css';

import { INCREASE_STEP } from '../../../reducers/step';
import NextButton from '../../../components/Buttons/NextButton';

interface Props {
  title: string;
}

const IntroPage: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch({
      type: INCREASE_STEP,
    });
  }, [dispatch]);

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
          <NextButton onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
