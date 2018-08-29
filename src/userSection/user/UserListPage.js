import React, { Component } from 'react';
import * as userReadApiService from '../../api/user/userReadApiService';

class UserListPage extends Component {

    constructor(){
        super();
        
    }
    componentDidMount(){
        debugger;
        var userList;
        return userReadApiService.getAllUsers().then(function(users){
            debugger;
            userList = users;
        }, ()=>{
            console.log("problem occured while fetching the users");
        })

    }
    render() {
        const styles = {
           
        };
        return (
            <div >
                UserListPage
            </div>
        );
    }
}

export default UserListPage;