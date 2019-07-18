/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Checkbox from '../../components/Checkbox';
import { useDispatch } from 'react-redux';
import { INCREASE_STEP } from '../../reducers/step';
import { Item } from '../../types';
import { SUBMIT_FORM } from '../../reducers/input';

interface Props {
  item: Item;
}

const CheckboxForm: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [checkItems, setCheckItems] = useState(new Map());

  useEffect(() => {
    if (item.answer && item.answer.length > 0) {
      item.answer.forEach(title => {
        setCheckItems(prevCheckITems => {
          prevCheckITems.set(title, true);
          return new Map(prevCheckITems);
        });
      });
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const answer: string[] = [];
    checkItems.forEach((isChecked, name) => {
      if (isChecked) {
        answer.push(name);
      }
    });
    if (!answer.length) {
      return alert('하나 이상 선택해주세요!!');
    }
    dispatch({
      type: SUBMIT_FORM,
      data: {
        id: item.itemId,
        answer,
      },
    });
    dispatch({
      type: INCREASE_STEP,
    });
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    const checked = e.target.checked;
    setCheckItems(prevCheckITems => {
      prevCheckITems.set(value, checked);
      return new Map(prevCheckITems);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {item.options.map(option => (
        <>
          <Checkbox
            key={option.text + option.id}
            name={option.text}
            onChange={onCheckboxChange}
            checked={checkItems.get(option.text)}
          />
          <label>{option.text}</label>
        </>
      ))}
      <button type="submit">다음</button>
    </form>
  );
};

export default CheckboxForm;
