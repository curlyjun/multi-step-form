/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FormProps } from '../../types';
import TextInput from '../../components/TextInput';
import { useDispatch } from 'react-redux';
import { SUBMIT_FORM } from '../../reducers/input';
import { INCREASE_STEP } from '../../reducers/step';

const TextInputForm: React.FC<FormProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    if (item.answer && item.answer.length > 0) {
      setText(item.answer[0]);
    }
  }, []);

  const onChangeTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
    console.log([e.target.value]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text && !text.trim()) {
      return alert('입력해주세요');
    }

    dispatch({
      type: SUBMIT_FORM,
      data: {
        id: item.itemId,
        answer: [text],
      },
    });
    dispatch({
      type: INCREASE_STEP,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{item.title}</h2>
      <TextInput value={text} onChange={onChangeTextInput} />
      <button type="submit"> 다음</button>
    </form>
  );
};

export default TextInputForm;
