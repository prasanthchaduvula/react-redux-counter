import { INCREMENT, DECREMENT, RESET, STEP, MAX } from '../../types';

let intialState = {
  count: 0,
  step: 1,
  max: 40
};

function counter(state = intialState, action) {
  switch (action.type) {
    case INCREMENT:
      if (state.count < state.max) {
        return { ...state, count: state.count + state.step };
      } else {
        alert(`you can't exceed more than ${state.max}`);
        return state;
      }
    case DECREMENT:
      if (state.count > 0) {
        return { ...state, count: state.count - state.step };
      } else {
        alert("you can't go below 0");
        return state;
      }
    case RESET:
      return { ...state, count: 0 };
    case STEP:
      return { ...state, step: action.payload };
    case MAX:
      return { ...state, max: action.payload };
    default:
      return state;
  }
}

export default counter;
