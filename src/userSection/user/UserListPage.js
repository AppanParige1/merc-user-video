import React, { Component } from 'react';
import * as userReadApiService from '../../api/user/userReadApiService';
import { Header } from '../../shared/Header';
import { UserListItem } from './UserListItem';
class UserListPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            userList: null
        }
        this.getUserList = this.getUserList.bind(this);
    }

    

    getUserList ()  {
        return userReadApiService.getAllUsers().then( (users) => {
          
            this.setState({ userList: users });
        }, () => {
            console.log("problem occured while fetching the users");
        })
    };

    componentDidMount() {        
        this.getUserList();
    }
    render() {
        return (
            <div >
                <Header title={'User List'} />

                {this.state.userList && this.state.userList.map(element => {
                    return <UserListItem userDetails={element} />
                })}

            </div>
        );
    }
}

export default UserListPage;