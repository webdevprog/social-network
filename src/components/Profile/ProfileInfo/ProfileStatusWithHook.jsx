
import React, { useState } from 'react';

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

    const changeStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            {!editMode &&
                <div onDoubleClick={activeEditMode}>
                    <span>
                        {status || "````````"}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} type="text" 
                    onBlur={deactiveEditMode} 
                    value={status} 
                    onChange={changeStatus}
                    />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHook;