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
}

export interface ResultItem {
  id: number;
  answer: string[];
}

export interface ResultState {
  id: number;
  items: ResultItem[];
}

export interface State {
  step: number;
  result: ResultState;
}
