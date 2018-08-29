import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './userSection/user/UserListPage';
import UserDetailsPage from './userSection/user/UserDetailsPage';
import UserGroupListPage from './userSection/group/UserGroupListPage';
import UserGroupDetailsPage from './userSection/group/UserGroupDetailsPage';
import VideoListPage from './videoSection/video/VideoListPage';
import VideoDetailsPage from './videoSection/video/VideoDetailsPage';
import VideoGroupListPage from './videoSection/group/VideoGroupListPage';
import VideoGroupDetailsPage from './videoSection/group/VideoGroupDetailsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              component={HomePage}
              path="/"
            />
            <Route
              component={HomePage}
              key='home'
              path="/home"
            />
            <Route
              component={UserListPage}
              key='userList'
              path="/userList"
            />
            <Route
              component={UserDetailsPage}
              key="userDetails"
              path="/userDetails"
            />
            <Route
              component={UserGroupListPage}
              key="userGroupList"
              path="/userGroupList"
            />
            <Route
              component={UserGroupDetailsPage}
              key='userGroupdetails'
              path='/userGroupdetails'
            />


            <Route
              component={VideoListPage}
              key='videoList'
              path="/videoList"
            />
            <Route
              component={VideoDetailsPage}
              key="videoDetails"
              path="/videoDetails"
            />
            <Route
              component={VideoGroupListPage}
              key="videoGroupList"
              path="/videoGroupList"
            />
            <Route
              component={VideoGroupDetailsPage}
              key='videoGroupDetails'
              path='/videoGroupDetails'
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
