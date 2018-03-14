import React, { Component } from 'react';

class EditUser extends Component {



    render() {

        const user = this.props.user
        return (
            <div>
                <form onSubmit={this.props.updateUser}>
                <label htmlFor='userName'>User Name: </label>
                <input name='userName'
                    onChange={this.props.handleChange}
                    value={this.props.user.userName}
                />
                <br />
                <label htmlFor='aboutMe'>About Me: </label>
                <input name='aboutMe'
                    onChange={this.props.handleChange}
                    value={this.props.user.aboutMe}
                />
                <button onClick={this.props.handleSubmit}>Update Profile</button>
                </form>
            </div>
        );
    }
}

export default EditUser;