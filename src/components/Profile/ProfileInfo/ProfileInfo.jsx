
import React from 'react';
import cls from './profileinfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={cls.profileInfo}>
            <div>
                <img className={cls.banner} src={props.profile.photos.large ? props.profile.photos.large : "https://cdn.pixabay.com/photo/2020/02/23/11/36/landscape-4873098_960_720.jpg"} alt="" />
            </div>
            <div className={cls.user}>
                <img className={cls.avatar} src={props.profile.photos.large}  alt="" />
                <div className={cls.userInfo}>
                    <div className={cls.name}>{props.profile.fullName}</div>
                    <div className={cls.datebirth}></div>
                    <div className={cls.city}>City: Sevastopol</div>
                    <div className={cls.education}>Education: SEVGU '18</div>
                    <div className={cls.website}>Web Site: none</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;