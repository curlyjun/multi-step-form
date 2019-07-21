import React from 'react';

interface Props {
  onClick?: () => void;
}

const PreviousButton: React.SFC<Props> = ({ onClick }) => {
  return (
    <button type="button" className="button-previous" onClick={onClick}>
      이전
    </button>
  );
};

export default PreviousButton;
