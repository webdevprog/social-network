const { addPostActionCreate, default: profileReducer } = require("./profile-reducer");

it('length posts should be increment', () => {
    let action = addPostActionCreate("new post");

    let state = {
        posts: [
            { id: 1, message: "Hello, everyone", countLike: 3 },
            { id: 2, message: "Hello, everybody", countLike: 4 },
            { id: 3, message: "This is my code.", countLike: 8 },
        ]
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4);
});