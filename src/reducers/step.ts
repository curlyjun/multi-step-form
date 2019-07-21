export const INCREASE_STEP = 'INCREASE_STEP';
export const DECREASE_STEP = 'DECREASE_STEP';

interface IncreaseStepAction {
  type: typeof INCREASE_STEP;
}
interface DecreaseStepAction {
  type: typeof DECREASE_STEP;
}

type ActionTypes = IncreaseStepAction | DecreaseStepAction;

export default (state = 0, action: ActionTypes): number => {
  switch (action.type) {
    case INCREASE_STEP:
      return state + 1;
    case DECREASE_STEP:
      return state - 1;
    default:
      return state;
  }
};
