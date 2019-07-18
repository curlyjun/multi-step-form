import React, { useState } from 'react';
import { Item } from '../../types';
import Radio from '../../components/Radio';
import { useDispatch } from 'react-redux';
import { SUBMIT_FORM } from '../../reducers/input';
import { INCREASE_STEP } from '../../reducers/step';

interface Props {
  item: Item;
}

const RadioForm: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const [selectedRadio, setSelectedRadio] = useState('');

  const onChangeRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.name;
    setSelectedRadio(selected);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRadio === '') {
      return alert('항목을 선택해주세요.');
    }

    dispatch({
      type: SUBMIT_FORM,
      data: {
        id: item.itemId,
        answer: [selectedRadio],
      },
    });
    dispatch({
      type: INCREASE_STEP,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {item.options.map(option => (
        <Radio
          key={option.text + option.id}
          name={option.text}
          onChange={onChangeRadioButton}
          selected={selectedRadio}
        />
      ))}
      <button type="submit">다음</button>
    </form>
  );
};

export default RadioForm;
