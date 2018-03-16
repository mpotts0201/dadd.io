import React, { Component } from 'react';
import styled from 'styled-components'

const Text = styled.label`
font-family: 'Raleway', sans-serif;
color: #333333;
text-decoration: none;
margin: 20px 0;
font-size: 20px;

`

const H1 = styled.h1`
font-family: 'Lobster', cursive;
font-size: 35px;
color: #0d0d0d;
`

class EditUser extends Component {



    render() {

        const user = this.props.user
        return (
            <div>
                <form onSubmit={this.props.updateUser}>
                <Text htmlFor='userName'>User Name </Text>
                <br/>
                <input name='userName'
                    onChange={this.props.handleChange}
                    value={this.props.user.userName}
                />
                <br/>
                <br/>
                <br/>
                <br />
                <Text htmlFor='aboutMe'>About Me </Text><br/>
                <textarea 
                    rows='10'
                    cols='50'
                    name='aboutMe'
                    onChange={this.props.handleChange}
                    value={this.props.user.aboutMe}
                />
                <br/>
                <button onClick={this.props.handleSubmit}>Update Profile</button>
                </form>
            </div>
        );
    }
}

export default EditUser;