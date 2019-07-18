import React from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.SFC<Props> = ({ value, onChange }) => {
  return (
    <>
      <textarea
        style={{ resize: 'none', width: '80%', height: 320 }}
        placeholder="여기에 입력해주세요"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
