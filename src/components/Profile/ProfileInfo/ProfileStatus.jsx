
import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        }
    }


    activeEditMode = () => {
        this.setState((state) => {
            return { editMode: true }
        });
    }

    deactiveEditMode = () => {
        this.setState((state) => {
            return { editMode: false }
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activeEditMode}>
                        <span>
                            {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} type="text" value={this.props.status} onBlur={this.deactiveEditMode} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;