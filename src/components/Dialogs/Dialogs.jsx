
import React from 'react';
import cls from './dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let textElement = React.createRef();

    let addMessage = () => {
        let text = textElement.current.value;
        alert(text)
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                {
                    props.state.diaologs.map(dialog => (
                        <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
                    ))
                }
            </div>
            <div className={cls.messages}>
                {
                    props.state.messages.map(message => (
                        <Message message={message.message} id={message.id} />
                    ))
                }
                <form action="" onSubmit={addMessage}>
                    <textarea ref={textElement} name="" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;