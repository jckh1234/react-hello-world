import constants from './constants';

const initialState = {
  count: 0
}

const counterReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case constants.INIT:
      return {count: initialState.count};
    case constants.INCREASE:
      return {count: state.count + 1};
    case constants.DECREASE:
      return {count: state.count - 1};
    default:
      return state;

  }

}
export default counterReducer;
