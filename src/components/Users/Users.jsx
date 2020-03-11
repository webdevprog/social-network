import React from 'react';

const Users = (props) => {

    let onShowMore = () => {
        props.showMore(props.users.length);
    }

    return (
        <div>
            {
                props.users.map(user => (
                    <div key={user.id}>
                        <button onClick={() => {props.followToggle(user.id)}}>{user.followed ? 'unfollow' : 'follow'}</button>
                        <div>{user.fullName}</div>
                    </div>
                ))
            }
            {
                props.showBtnMore ? <button onClick={onShowMore}>Show more</button> : ''
            }
        </div>
    );
}

export default Users;