import React, { memo } from 'react';
import './Checkbox.css';

interface Props {
  name: string;
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ name, checked, onChange }) => {
  return (
    <li className="li-checkbox">
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

export default memo(Checkbox);
