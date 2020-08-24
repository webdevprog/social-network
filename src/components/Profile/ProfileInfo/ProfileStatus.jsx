
import React from 'react';
import { updateStatusProfile } from '../../../redux/profile-reducer';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            status: this.props.status
        }
    }

    activeEditMode = () => {
        this.setState({ editMode: true });
    }

    deactiveEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }

    changeStatus = (e) => {
        this.setState({ status: e.target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className="status-edit" onDoubleClick={this.activeEditMode}>
                        <span>
                            {this.state.status ? this.state.status : "````````"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} type="text" value={this.state.status} onBlur={this.deactiveEditMode} onChange={this.changeStatus} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;