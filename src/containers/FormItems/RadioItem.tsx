/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import Radio from '../../components/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { Item, State } from '../../types';
import { ADD_ANSWER } from '../../reducers/result';

const RadioItem: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useDispatch();

  const { step } = useSelector((state: State) => state);
  const { items } = useSelector((state: State) => state.result);

  const onChangeRadioButton = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.name;

      dispatch({
        type: ADD_ANSWER,
        data: {
          itemId: item.itemId,
          answer: [selected],
        },
      });
    },
    [dispatch],
  );

  return (
    <>
      {item.options.map(option => (
        <Radio
          key={option.text + option.id}
          name={option.text}
          onChange={onChangeRadioButton}
          selected={
            items[step - 1] && items[step - 1].answer.length > 0
              ? items[step - 1].answer[0]
              : ''
          }
        />
      ))}
    </>
  );
};

export default RadioItem;
