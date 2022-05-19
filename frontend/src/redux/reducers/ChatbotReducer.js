import { SHOW_CHATBOT, SELECT_OPTION } from "../actions/ChatbotAction";

const initialState = {
    status: false,
    option: 'perro'
};

function chatbotReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_CHATBOT:
            return { ...state, status: action.payload };
        case SELECT_OPTION:
            return { ...state, option: action.payload };
        default:
            return state;
    }
}
  
  export default chatbotReducer;