import React, { Component } from "react";
import axios from "axios";
import EditUser from "./EditUser";
import { Redirect, Link } from "react-router-dom";

class User extends Component {
  state = {
    user: {
      userName: "",
      aboutMe: ""
    },
    showEdit: false,
    showDelete: false,
    redirect: false
  };

  componentDidMount() {
    this.updatePage();
  }

  updatePage = () => {
    const userId = this.props.match.params.userId;
    axios
      .get(`/api/users/${userId}`)
      .then(res => {
        const user = res.data;
        this.setState({ user: user });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteShow = () => {
    this.setState({ 
      showDelete: !this.state.showDelete, 
      showEdit: false
    });

  };

  editShow = () => {
    this.setState({ 
      showEdit: !this.state.showEdit, 
      showDelete: false
    });
  };

  updateUser = event => {
    event.preventDefault();
    const userId = this.props.match.params.userId;
    const payload = {
      userName: this.state.user.userName,
      aboutMe: this.state.user.aboutMe
    };
    axios.patch(`/api/users/${userId}`, payload).then(res => {
      console.log(res.data);
      this.setState({ user: res.data });
    });

    this.updatePage();
  };

  deleteUser = () => {
    const userId = this.props.match.params.userId;
    this.setState({ redirect: true });

    axios
      .delete(`/api/users/${userId}`)
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.props.populatePage();
      });
  };

  handleChange = event => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
    console.log(event.target.value);
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>{this.state.user.userName}</h1>
        <p>
          <strong>About Me: </strong>
          {this.state.user.aboutMe}
        </p>
        <button onClick={this.editShow}>Edit User</button>
        <button onClick={this.deleteShow}>Delete User</button>

        {this.state.showDelete ? (
          <div>
            <p>Are you sure?</p>
            <br />
            <button onClick={this.deleteUser}>Delete Account</button>{" "}
            <button onClick={this.deleteShow}>Do not Delete</button>
          </div>
        ) : null}

        {this.state.showEdit ? (
          <EditUser
            handleSubmit={this.handleSubmit}
            user={this.state.user}
            handleChange={this.handleChange}
            updateUser={this.updateUser}
          />
        ) : null}
        <br />
      </div>
    );
  }
}

export default User;
