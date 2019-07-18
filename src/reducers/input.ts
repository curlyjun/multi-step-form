import { Input, Item } from '../types';

export const LOAD_INPUT_FILE = 'LOAD_INPUT_FILE';
export const SUBMIT_FORM = 'SUBMIT_FORM';

interface loadInputFileAction {
  type: typeof LOAD_INPUT_FILE;
  data: Input;
}
interface submitFormAction {
  type: typeof SUBMIT_FORM;
  data: {
    id: number;
    answer: string[];
  };
}

type ActionTypes = loadInputFileAction | submitFormAction;

const initialState: Input = {
  formId: 0,
  title: '',
  items: [
    { itemId: 0, title: '', formType: 1, options: [] },
    { itemId: 0, title: '', formType: 1, options: [] },
    { itemId: 0, title: '', formType: 1, options: [] },
  ],
};

export default (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case LOAD_INPUT_FILE:
      return {
        ...state,
        formId: action.data.formId,
        title: action.data.title,
        items: action.data.items,
      };
    case SUBMIT_FORM:
      const itemIndex = state.items.findIndex(
        item => item.itemId === action.data.id,
      );
      state.items[itemIndex].answer = action.data.answer;
      const items = [...state.items];
      return {
        ...state,
        items: items,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
