export enum formType {
  CHECKBOX = 1,
  RADIO,
  TEXTINPUT,
  SELECTBOX,
}

export interface Item {
  itemId: number;
  title: string;
  formType: formType;
  options: {
    id: number;
    text: string;
  }[];
  answer?: string[];
}

export interface FormProps {
  item: Item;
}

export interface Input {
  formId: number;
  title: string;
  items: Item[];
}

export interface State {
  step: number;
  input: Input;
}
