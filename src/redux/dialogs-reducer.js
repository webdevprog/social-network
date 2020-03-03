const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
    diaologs: [
        { name: 'Vitaiy', id: 1, img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
        { name: 'Sasha', id: 2, img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
        { name: 'Peter', id: 3, img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
        { name: 'Katya', id: 4, img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
    ],
    messages: [
        { message: "hi, Vasya", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "What's up man.", id: 3 },
        { message: "Are you crazy?", id: 4 },
        { message: "no", id: 5 }
    ],
    textMessage: '',
}

const dialogsReducer = (state = initialState, action) => {
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