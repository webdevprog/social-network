let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello, everyone", countLike: 3 },
            { id: 2, message: "Hello, everybody", countLike: 4 },
            { id: 3, message: "This is my code.", countLike: 8 },
        ]
    },
    dialogsPage: {
        diaologs: [
            { name: 'Vitaiy', id: 1 },
            { name: 'Sasha', id: 2 },
            { name: 'Peter', id: 3 },
            { name: 'Katya', id: 4 },
        ],
        messages: [
            { message: "hi, Vasya", id: 1 },
            { message: "How are you?", id: 2 },
            { message: "What's up man.", id: 3 },
            { message: "Are you crazy?", id: 4 },
            { message: "no", id: 5 }
        ],
    }
};

export default state;