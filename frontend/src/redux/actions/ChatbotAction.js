
export const SHOW_CHATBOT = 'SHOW_CHATBOT';
export const SELECT_OPTION = 'SELECT_OPTION';


export const showChatbot = status => dispatch => {
    dispatch({
      type: SHOW_CHATBOT,
      payload: status
    });
};

export const selectOption = option => dispatch => {
    dispatch({
      type: SELECT_OPTION,
      payload: option
    })
}