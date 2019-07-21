import React from 'react';
import { useSelector } from 'react-redux';

import {
  CheckboxItem,
  RadioItem,
  TextInputItem,
  SelectboxItem,
} from '../../containers/FormItems';
import { Item, formType, State } from '../../types';

const { CHECKBOX, RADIO, TEXTINPUT, SELECTBOX } = formType;

const SelectFormType: React.FC<{ items: Item[] }> = ({ items }) => {
  const { step } = useSelector((state: State) => state);

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
      return <div>form type error!</div>;
  }
};

export default SelectFormType;
