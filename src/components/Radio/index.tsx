import React, { memo } from 'react';
import './Radio.css';

interface Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string;
}

const Radio: React.SFC<Props> = ({ name, onChange, selected }) => {
  return (
    <li>
      <input
        type="radio"
        name={name}
        onChange={onChange}
        checked={selected === name}
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

export default memo(Radio);
