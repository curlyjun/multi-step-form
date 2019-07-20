/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Selectbox from '../../components/Selectbox';
import { Item, State } from '../../types';
import { ADD_ANSWER } from '../../reducers/result';

const SelectboxForm: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: State) => state.result);
  const { step } = useSelector((state: State) => state);

  const onChangeSelectbox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '선택해주세요.') {
      dispatch({
        type: ADD_ANSWER,
        data: {
          itemId: item.itemId,
          answer: [''],
        },
      });
    }
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
      <Selectbox
        options={item.options}
        onChange={onChangeSelectbox}
        selected={items[step - 1].answer[0]}
      />
    </>
  );
};

export default SelectboxForm;
