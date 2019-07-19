/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FormProps } from '../../types';
import TextInput from '../../components/TextInput';
import { useDispatch } from 'react-redux';
import { SUBMIT_FORM } from '../../reducers/input';
import { INCREASE_STEP } from '../../reducers/step';
import Selectbox from '../../components/Selectbox';

const SelectboxForm: React.FC<FormProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (item.answer && item.answer.length > 0) {
      setSelected(item.answer[0]);
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelected(e.target.value);
    console.log([e.target.value]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      return alert('선택해주세요');
    }

    dispatch({
      type: SUBMIT_FORM,
      data: {
        id: item.itemId,
        answer: [selected],
      },
    });
    dispatch({
      type: INCREASE_STEP,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{item.title}</h2>
      <Selectbox options={item.options} onChange={onChange} />
      <button type="submit"> 다음</button>
    </form>
  );
};

export default SelectboxForm;
