
import React from 'react';
import cls from './dialogs.module.scss';

const Dialogs = (handelClick) => {
    handelClick = (e) => {
        let target = e.target;
    
        alert(target.textContent);
        return target.textContent;
    }
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                <div className={cls.dialog}>
                    Vitaliy
                </div>
                <div className={cls.dialog}>
                    Sasha
                </div>
                <div className={cls.dialog}>
                    Viktoria
                </div>
            </div>
            <div className={cls.messages}>
                <div className={cls.message}>
                    hi, Vasya
                </div>
                <div className={cls.message}>
                    How are you?
                </div>
                <div className={cls.message}>
                    What's up man.
                </div>
            </div>
        </div>
    );
}

export default Dialogs;