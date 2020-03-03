const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newObj = {
                id: 5,
                message: state.textMessage,
            }
            state.messages.push(newObj);
            state.textMessage = 'test';
            return state;
        }
        case UPDATE_TEXT_MESSAGE: {
            state.textMessage = action.body;
            return state;
        }
        default: {
            return state;
        }
    }
}

export let sendMessageActionCreate = () => ({ type: SEND_MESSAGE });
export let updateTextMessageActionCreate = (text) => ({ type: UPDATE_TEXT_MESSAGE, body: text });

export default dialogsReducer;