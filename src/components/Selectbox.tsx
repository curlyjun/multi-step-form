import React from 'react';

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
    <select onChange={onChange} defaultValue={selected}>
      <option value="">선택해주세요.</option>
      {options.map(option => (
        <option key={option.id} value={option.text}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Selectbox;
