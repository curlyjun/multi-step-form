import React from 'react';

interface Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string;
}

const Radio: React.SFC<Props> = ({ name, onChange, selected }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        onChange={onChange}
        checked={selected === name}
      />
      <label>{name}</label>
    </>
  );
};

export default Radio;
