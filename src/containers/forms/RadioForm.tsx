/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Radio from '../../components/Radio';
import { useDispatch } from 'react-redux';
import { SUBMIT_FORM } from '../../reducers/input';
import { INCREASE_STEP } from '../../reducers/step';
import { FormProps } from '../../types';

const RadioForm: React.FC<FormProps> = ({ item }) => {
  const dispatch = useDispatch();

  const [selectedRadio, setSelectedRadio] = useState('');

  useEffect(() => {
    if (item.answer && item.answer.length > 0) {
      setSelectedRadio(item.answer[0]);
    }
  }, []);

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
      <h2>{item.title}</h2>
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
