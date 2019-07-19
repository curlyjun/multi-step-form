import React from 'react';

interface Props {
  options: {
    id: number;
    text: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selectbox: React.SFC<Props> = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map(option => (
        <option value={option.text}>{option.text}</option>
      ))}
    </select>
  );
};

export default Selectbox;
