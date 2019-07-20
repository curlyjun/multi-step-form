import React from 'react';

interface Props {
  name: string;
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ name, checked, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {name}
    </>
  );
};

export default Checkbox;
