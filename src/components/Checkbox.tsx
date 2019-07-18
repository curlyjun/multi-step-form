import React from 'react';

interface Props {
  name: string;
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ name, checked, onChange }) => {
  console.log(name);
  console.log(checked);
  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default Checkbox;
