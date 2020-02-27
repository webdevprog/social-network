
import React from 'react';
import cls from './profile.module.scss';

const Profile = () => {
    return (
        <main className={cls.content}>
            <div>
                <img className={cls.banner} src="https://cdn.pixabay.com/photo/2020/02/23/11/36/landscape-4873098_960_720.jpg" alt="" />
            </div>
            <div className={cls.user}>
                <img className={cls.avatar} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                <div className={cls.userInfo}>
                    <div className={cls.name}>Vitaliy</div>
                    <div className={cls.datebirth}>Date of Birth: 7 november</div>
                    <div className={cls.city}>City: Sevastopol</div>
                    <div className={cls.education}>Education: SEVGU '18</div>
                    <div className={cls.website}>Web Site: none</div>
                </div>
            </div>
            <form className={cls.formPost} action="">
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