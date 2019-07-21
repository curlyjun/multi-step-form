/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Selectbox from '../../components/Selectbox';
import { Item, State } from '../../types';
import { ADD_ANSWER } from '../../reducers/result';

const SelectboxForm: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: State) => state.result);
  const { step } = useSelector((state: State) => state);

  const onChangeSelectbox = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === '선택해주세요.') {
        return dispatch({
          type: ADD_ANSWER,
          data: {
            itemId: item.itemId,
            answer: [],
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
    },
    [dispatch],
  );

  return (
    <Selectbox
      options={item.options}
      onChange={onChangeSelectbox}
      selected={items[step - 1].answer[0]}
    />
  );
};

export default SelectboxForm;
