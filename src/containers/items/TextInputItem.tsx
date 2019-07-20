/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import TextInput from '../../components/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { Item, State } from '../../types';
import { ADD_ANSWER } from '../../reducers/result';

const TextInputForm: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: State) => state.result);
  const { step } = useSelector((state: State) => state);

  const onChangeTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: ADD_ANSWER,
      data: {
        itemId: item.itemId,
        answer: [e.target.value],
      },
    });
  };

  return (
    <>
      <h2>{item.title}</h2>
      <TextInput
        value={items[step - 1] ? items[step - 1].answer[0] : ''}
        onChange={onChangeTextInput}
      />
    </>
  );
};

export default TextInputForm;
