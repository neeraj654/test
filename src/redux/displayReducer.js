import { DISPLAY } from './displayTypes';
const initialState = {
  displayData: false,
};
const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return {
        ...state,
        displayData: !state.displayData,
      };

    default:
      return state;
  }
};
export default displayReducer;
