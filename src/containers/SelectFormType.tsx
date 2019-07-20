import React from 'react';
import { CheckboxItem, RadioItem, TextInputItem, SelectboxItem } from './items';
import { useSelector } from 'react-redux';
import { Item, formType, State } from '../types';

const { CHECKBOX, RADIO, TEXTINPUT, SELECTBOX } = formType;

const SelectFormType: React.FC<{ items: any }> = ({ items }) => {
  const { step } = useSelector((state: State) => state);
  if (items.length) {
    switch (items[step - 1].formType) {
      case CHECKBOX:
        return <CheckboxItem item={items[step - 1]} />;
      case RADIO:
        return <RadioItem item={items[step - 1]} />;
      case TEXTINPUT:
        return <TextInputItem item={items[step - 1]} />;
      case SELECTBOX:
        return <SelectboxItem item={items[step - 1]} />;
      default:
        return (
          <>
            <div>폼 아이템이 없습니다!</div>
          </>
        );
    }
  } else {
    return <></>;
  }
};

export default SelectFormType;
