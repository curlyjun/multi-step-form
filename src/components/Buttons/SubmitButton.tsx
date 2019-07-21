import React, { memo } from 'react';

interface Props {
  onClick?: () => void;
}

const SubmitButton: React.SFC<Props> = ({ onClick }) => {
  return (
    <button className="button-submit" onClick={onClick}>
      제출
    </button>
  );
};

export default memo(SubmitButton);
