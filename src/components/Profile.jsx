
import React from 'react';

const Profile = () => {
    return (
        <main className="main-content">
            <div>
                <img className="banner" src="https://cdn.pixabay.com/photo/2020/02/23/11/36/landscape-4873098_960_720.jpg" alt="" />
            </div>
            <div className="user">
                <img className="user__avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                <div className="user-info">
                    <div className="user-info__name">Vitaliy</div>
                    <div className="user-info__datebirth">Date of Birth: 7 november</div>
                    <div className="user-info__city">City: Sevastopol</div>
                    <div className="user-info__education">Education: SEVGU '18</div>
                    <div className="user-info__website">Web Site: none</div>
                </div>
            </div>
            <form className="form-post" action="">
                <legend>
                    <h2>My posts</h2>
                </legend>
                <textarea placeholder="your news" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send" />
            </form>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        Hello, everyone!
            </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;