import React, { Component } from 'react';
import User from './User'
import axios from 'axios'

class UserList extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        axios.get('/api/users')
        .then((res) => {
            const users = res.data
            console.log(users)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    render() {



        return (
            <div>
                <User />
            </div>
        );
    }
}

export default UserList;