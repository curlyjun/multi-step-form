import React from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.SFC<Props> = ({ value, onChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="여기에 입력해주세요"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
