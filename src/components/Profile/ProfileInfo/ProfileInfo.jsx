
import React from 'react';
import cls from './profileinfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={cls.profileInfo}>
            <div className={cls.user}>
                <div>
                    <img
                        className={cls.avatar}
                        src={props.profile.photos.large ? props.profile.photos.large : "https://cdn.pixabay.com/photo/2020/02/23/11/36/landscape-4873098_960_720.jpg"}
                        alt={props.profile.fullName}
                    />
                    <ProfileStatus status={props.status} updateStatus={props.updateStatusProfile} />
                </div>
                <div className={cls.userInfo}>
                    <div className={cls.name}>{props.profile.fullName}</div>
                    <div className={cls.datebirth}></div>
                    <div className={cls.city}>City: Kiev</div>
                    <div className={cls.education}>Education: none</div>
                    <div className={cls.website}>Web Site: none</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;