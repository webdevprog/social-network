import {rerenderTree} from './../redner';

let state = {
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
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Valya', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg'},
            {id: 2, name: 'Lera', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg'},
            {id: 3, name: 'Valera', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg'},
            {id: 4, name: 'Anna', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg'},
        ]
    }
}

export let addPost = (() => {
    let newObj = {
        id: 5,
        message: state.profilePage.textPost,
        countLike: 4,
    }
    state.profilePage.posts.push(newObj);
    state.profilePage.textPost = '';
    rerenderTree(state);
})

export let updateTextPost = ((textPost) => {
    state.profilePage.textPost = textPost;
    rerenderTree(state);
})

export default state;