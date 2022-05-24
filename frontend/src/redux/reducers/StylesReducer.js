import { CHANGE_THEME } from "../actions/StylesAction";

const initialState = {
    principal: false
};

function stylesReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, principal: action.payload };
        default:
            return state;
    }
}
  
  export default stylesReducer;