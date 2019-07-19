import React from 'react';
import { CheckboxForm, RadioForm, TextInputForm, SelectboxForm } from './forms';
import { useSelector } from 'react-redux';
import { Item, formType } from '../types';

const { CHECKBOX, RADIO, TEXTINPUT, SELECTBOX } = formType;

interface Props {
  items: Item[];
}
const SelectFormType: React.FC<Props> = ({ items }) => {
  const { step } = useSelector((state: { step: number }) => state);

  if (items.length) {
    switch (items[step - 1].formType) {
      case CHECKBOX:
        return <CheckboxForm item={items[step - 1]} />;
      case RADIO:
        return <RadioForm item={items[step - 1]} />;
      case TEXTINPUT:
        return <TextInputForm item={items[step - 1]} />;
      case SELECTBOX:
        return <SelectboxForm item={items[step - 1]} />;
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
