import React, { memo } from 'react';
import './Selectbox.css';

interface Props {
  options: {
    id: number;
    text: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
}

const Selectbox: React.SFC<Props> = ({ options, onChange, selected }) => {
  return (
    <select className="select-box" onChange={onChange} defaultValue={selected}>
      <option value="선택해주세요.">선택해주세요.</option>
      {options.map(option => (
        <option key={option.id} value={option.text}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default memo(Selectbox);
