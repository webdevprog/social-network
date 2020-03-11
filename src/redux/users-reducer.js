const SEARCH_USER = 'SEARCH-USER ';
const SHOW_MORE = 'SHOW-MORE';
const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';

let initialState = {
    users: [
        { id: 1, fullName: 'Vitaiy', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 2, fullName: 'Sasha', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 3, fullName: 'Vikki', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 4, fullName: 'Victor', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 5, fullName: 'Victor', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 6, fullName: 'Victor', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 7, fullName: 'Victor', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 8, fullName: 'Victor', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
        { id: 9, fullName: 'Victor', followed: false, status: 'I am best of the best', img: 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg', location: { country: 'Russian', city: 'Mosscow' } },
    ],
    prevUsers: 4,
    stepUsers: 2
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USER: {
            return {
                ...state
            };
        }
        case SHOW_MORE: {
            return {
                ...state,
                prevUsers: state.users.length > action.usersLength ? action.usersLength + state.stepUsers : state.prevUsers
            };
        }
        case FOLLOW_TOGGLE: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            };
        }
        default: {
            return state;
        }
    }
}

export let searchUsersActionCreate = () => ({ type: SEARCH_USER });
export let showMoreActionCreate = (usersLength) => ({ type: SHOW_MORE, usersLength });
export let followToggleActionCreate = (userId) => ({ type: FOLLOW_TOGGLE, userId });

export default usersReducer;