export const TEST_REDUCER = 'TEST_REDUCER';

const initialState = {
  number: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TEST_REDUCER: {
      return {
        number: state.number + 1,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
