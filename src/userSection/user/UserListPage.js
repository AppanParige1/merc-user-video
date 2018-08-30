import React, { Component } from 'react';
import * as userReadApiService from '../../api/user/userReadApiService';
import { Header } from '../../shared/Header';
import { UserListItem } from './UserListItem';
class UserListPage extends Component {

    state = {
        userList: null
    }

    getUserList = () => {
        return userReadApiService.getAllUsers().then(function (users) {
            this.setState({ userList: users })
        }, () => {
            console.log("problem occured while fetching the users");
        })
    }
    componentDidMount() {

        //Mock Implementation- one api is ready we can  remove below 2 lines
        const mockUserList =  [
            { "UserId": 3, "UserName": "sri", "UserGroups": [{ "GroupId": 1, "GroupName": "chu", "Users": null, "VideoGroups": null }, { "GroupId": 2, "GroupName": "jug", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
            { "UserId": 4, "UserName": "shubhan", "UserGroups": [{ "GroupId": 1, "GroupName": "chu", "Users": null, "VideoGroups": null }, { "GroupId": 2, "GroupName": "jug", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
            { "UserId": 5, "UserName": "divya", "UserGroups": [{ "GroupId": 1, "GroupName": "chu", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
            { "UserId": 6, "UserName": "appan", "UserGroups": [{ "GroupId": 2, "GroupName": "jug", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
            { "UserId": 7, "UserName": "lok", "UserGroups": [{ "GroupId": null, "GroupName": null, "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null }
        ]
        this.setState({ userList: mockUserList });


        //Actual implementaion
        //this.getUserList();
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