
import React from 'react';
import cls from './profileinfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import { useState } from 'react';
import { createField } from '../../common/FormControls/FormControls';
import { reduxForm } from 'redux-form';

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(0);
    const { profile } = props;
    if (!props.profile) {
        return <Preloader />
    }

    const onChangePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSetEditMode = () => {
        setEditMode(1);
    }

    const saveProfile = (values) => {
        setEditMode(0);
        console.log(values)
    }

    return (
        <div className={cls.profileInfo}>
            <div className={cls.user}>
                <div>
                    <img
                        className={cls.avatar}
                        src={profile.photos.large ? profile.photos.large : "https://cdn.pixabay.com/photo/2020/02/23/11/36/landscape-4873098_960_720.jpg"}
                        alt={profile.fullName}
                    />
                    {!props.owner && <input type="file" onChange={onChangePhoto} />}
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatusProfile} />
                </div>
                <div className={cls.userInfo}>
                    {editMode
                        ?
                        <div>
                            <ProfileEditData profile={profile} onSubmit={saveProfile} />
                        </div>
                        :
                        <div>
                            {editMode}<button onClick={onSetEditMode}>Edit</button>
                            <ProfileData profile={profile} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

const Contacts = (props) => {
    const { link, name } = props;
    return (
        <div className={cls.contactItem}><b>{name}</b>: {link}</div>
    );
}

const ProfileData = ({ profile }) => {
    return (
        <div>
            <div>
                <b>Full Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob
                &&
                <div>
                    <b>Skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <div><b>Contacts:</b></div>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts name={key} key={key} link={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

let ProfileEditData = ({ profile, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {createField("", "fullName", "input", [], {})}
            {createField("", "lookingForAJob", "input", [], {type: 'checkbox'})}
            {createField("", "lookingForAJobDescription", "textarea", [])}
            {Object.keys(profile.contacts).map(key => {
                return createField(key, `contacts.${key}`, "input", [])
            })}
        </form>
    )
}

ProfileEditData = reduxForm({
    form: 'profileData'
})(ProfileEditData);

export default ProfileInfo;