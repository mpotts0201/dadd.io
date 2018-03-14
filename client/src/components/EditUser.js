import React, { Component } from 'react';

class EditUser extends Component {

    // state = {
    //     user: {
    //         userName: '',
    //         aboutMe: ''
    //     }
    // }


    // componentDidMount(){
    //     const user = this.props.user
    //     this.setState({user: user})
    //     console.log(this.state)

    // }

    render() {

        const user = this.props.user
        return (
            <div>
                <form onSubmit={this.props.updateUser}>
                <label htmlFor='userName'>User Name: </label>
                <input name='userName'
                    // value={event.target.user.userName}
                    onChange={this.props.handleChange}
                    value={this.props.user.userName}
                
                />
                <button onClick={this.props.handleSubmit}>Update Profile</button>
                </form>
            </div>
        );
    }
}

export default EditUser;