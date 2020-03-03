//POST
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
//DIALOGS
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let store = {
    _state: {
        profilePage: {
            textPost: '',
            posts: [
                { id: 1, message: "Hello, everyone", countLike: 3 },
                { id: 2, message: "Hello, everybody", countLike: 4 },
                { id: 3, message: "This is my code.", countLike: 8 },
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Valya', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
                { id: 2, name: 'Lera', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
                { id: 3, name: 'Valera', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
                { id: 4, name: 'Anna', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
            ]
        }
    },

    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                const newObj = {
                    id: 5,
                    message: this._state.profilePage.textPost,
                    countLike: 4,
                }
                this._state.profilePage.posts.push(newObj);
                this._state.profilePage.textPost = '';
                this._callSubscriber(this._state);
                break;
            }
            case UPDATE_TEXT_POST: {
                this._state.profilePage.textPost = action.newText;
                this._callSubscriber(this._state);
                break;
            }
            case ADD_MESSAGE: {
                const newObj = {
                    id: 5,
                    message: this._state.dialogsPage.textMessage,
                }
                this._state.dialogsPage.messages.push(newObj);
                this._state.dialogsPage.textMessage = '';
                this._callSubscriber(this._state);
                break;
            }
            case UPDATE_TEXT_MESSAGE: {
                this._state.dialogsPage.textMessage = action.newText;
                this._callSubscriber(this._state);
                break;
            }
            default: {
                alert('Action with name: ' + action.type + ' doesn\'t exist')
                break;
            }
        }
    }
}

export let addPostActionCreate = () => ({ type: ADD_POST });
export let updateTextPostActionCreate = (text) => ({ type: UPDATE_TEXT_POST, newText: text });
export let addMessageActionCreate = () => ({ type: ADD_MESSAGE });
export let updateTextMessageActionCreate = (text) => ({ type: UPDATE_TEXT_MESSAGE, newText: text });

export default store;