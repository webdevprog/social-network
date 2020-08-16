
import React, { useState } from 'react';
import { updateStatusProfile } from '../../../redux/profile-reducer';

const ProfileStatusWithHook = (props) => {

    let [editMode, setMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activeEditMode = () => {
        setMode(true);
    }

    const deactiveEditMode = () => {
        setMode(false);
        props.updateStatus(status);
    }

    return (
        <div>
            {editMode &&
                <div onDoubleClick={activeEditMode}>
                    <span>
                        {status|| "````````"}
                    </span>
                </div>
            }
            {!editMode &&
                <div>
                    <input autoFocus={true} type="text" onBlur={deactiveEditMode} value={status} />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHook;