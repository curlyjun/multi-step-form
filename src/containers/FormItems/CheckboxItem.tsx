/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import Checkbox from '../../components/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { Item, State } from '../../types';
import { ADD_ANSWER } from '../../reducers/result';

const CheckboxItem: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useDispatch();
  const [checkItems, setCheckItems] = useState(new Map<string, boolean>());
  const { items } = useSelector((state: State) => state.result);
  const { step } = useSelector((state: State) => state);

  useEffect(() => {
    if (items[step - 1] && items[step - 1].answer.length > 0) {
      items[step - 1].answer.forEach(title => {
        setCheckItems(prevCheckITems => {
          prevCheckITems.set(title, true);
          return new Map(prevCheckITems);
        });
      });
    }
  }, []);

  const onCheckboxChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name;
      const checked = e.target.checked;
      await setCheckItems(prevCheckITems => {
        prevCheckITems.set(value, checked);
        return new Map(prevCheckITems);
      });
      const answer: string[] = [];
      checkItems.forEach((isChecked, name) => {
        if (isChecked) {
          answer.push(name);
        }
      });
      dispatch({
        type: ADD_ANSWER,
        data: {
          itemId: item.itemId,
          answer,
        },
      });
    },
    [dispatch, checkItems],
  );

  return (
    <>
      {item.options.map(option => (
        <Checkbox
          key={`option.text${option.id}`}
          name={option.text}
          onChange={onCheckboxChange}
          checked={checkItems.get(option.text) === true ? true : false}
        />
      ))}
    </>
  );
};

export default CheckboxItem;
