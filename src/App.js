import React, { Component } from 'react';

import './App.css';

class App extends Component {

    state = {
        usersList: [],
    };

    componentDidMount () {
        fetch('https://randomuser.me/api/?results=10')
            .then (response => response.json())
            .then (response => this.setState({
                usersList: response.results
            }))
            .catch (error => console.error('error'))
    }

    render() {
    return (

        <div>{this.state.usersList.map(user => (
            <div key={user.name.last+user.name.first}>
            <div>{user.email}</div>
            <img alt='userphoto' src={user.picture.medium}/>
            </div>
        ))}</div>
    );
  }
}

export default App;
