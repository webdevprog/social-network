let initialState = {
    friends: [
        { id: 1, name: 'Valya', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
        { id: 2, name: 'Lera', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
        { id: 3, name: 'Valera', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
        { id: 4, name: 'Anna', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg' },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default sidebarReducer;

