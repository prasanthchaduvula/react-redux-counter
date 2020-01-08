import { INCREMENT, DECREMENT, RESET, STEP, MAX } from '../../types';

export function DoIncrement() {
  return { type: INCREMENT };
}

export function DoDecrement() {
  return { type: DECREMENT };
}

export function DoReset() {
  return { type: RESET };
}

export function DoStep(e) {
  return { type: STEP, payload: e };
}

export function DOMax(e) {
  return { type: MAX, payload: e };
}
