
import React from 'react';
import cls from './dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                {
                    props.dialogs.map(dialog => (
                        <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
                    ))
                }
            </div>
            <div className={cls.messages}>
                {
                    props.messages.map(message => (
                        <Message message={message.message} id={message.id} />
                    ))
                }
                <ReduxDialogForm onSubmit={props.sendMessage} />
            </div>
        </div>
    );
}

let DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Enter message" name="textMessage" component={Textarea} validate={[required, maxLength50]} />
            <button type="submit">Send</button>
        </form>
    );
}

const ReduxDialogForm = reduxForm({ form: 'diaolog' })(DialogForm);

export default Dialogs;