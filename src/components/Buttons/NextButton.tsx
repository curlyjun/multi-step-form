import React, { memo } from 'react';
import './ButtonStyles.css';

interface Props {
  onClick?: () => void;
}

const NextButton: React.SFC<Props> = ({ onClick }) => {
  return (
    <button className="button-next" onClick={onClick}>
      다음
    </button>
  );
};

export default memo(NextButton);
