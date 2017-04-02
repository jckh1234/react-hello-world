import {createStore} from 'redux'
import reducer from './reducer';

const counterStore = createStore(reducer);
window.counterStore = counterStore;
export default counterStore;
