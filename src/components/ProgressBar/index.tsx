import React, { memo } from 'react';
import './ProgressBar.css';

interface Props {
  currentStep: number;
  length: number;
}

const ProgressBar: React.SFC<Props> = ({ currentStep, length }) => {
  const persentage = currentStep ? (currentStep / length) * 100 : 1;

  return (
    <>
      <div>{`${currentStep} / ${length}`}</div>
      <div className="progress-bar">
        <div
          style={{
            width: `${persentage}%`,
          }}
        />
      </div>
    </>
  );
};

export default memo(ProgressBar);
