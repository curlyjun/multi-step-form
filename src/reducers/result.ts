import { ResultState, ResultItem } from '../types';

export const INITIAL_ITEMS = 'INITIAL_ITEMS';
export const ADD_ANSWER = 'ADD_ANSWER';

interface initialItemsActions {
  type: typeof INITIAL_ITEMS;
  data: {
    formId: number;
    itemsLength: number;
  };
}
interface addAnswerActions {
  type: typeof ADD_ANSWER;
  data: {
    itemId: number;
    answer: string[];
  };
}

const initialState: ResultState = {
  id: 0,
  items: [],
};

type ActionTypes = initialItemsActions | addAnswerActions;

export default (state = initialState, action: ActionTypes): ResultState => {
  switch (action.type) {
    case INITIAL_ITEMS: {
      const newItems: ResultItem[] = [];
      for (let i = 0; i < action.data.itemsLength; i++) {
        newItems.push({ id: i + 1, answer: [] });
      }
      return {
        id: action.data.formId,
        items: newItems,
      };
    }
    case ADD_ANSWER: {
      const itemIndex = state.items.findIndex(
        item => item.id === action.data.itemId,
      );
      const item = state.items[itemIndex];
      const items = [...state.items];
      items[itemIndex] = { ...item, answer: action.data.answer };
      return {
        ...state,
        items,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
