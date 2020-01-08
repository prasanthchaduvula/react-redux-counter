import { createStore } from 'redux';
import counter from './reducers/counter.reducer';
const store = createStore(counter);
export default store;
