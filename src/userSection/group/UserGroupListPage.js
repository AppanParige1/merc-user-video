import React, { Component } from 'react';
import * as userGroupReadApiService from '../../api/user/userGroupReadApiService';
import { Header } from '../../shared/Header';
import { UserGroupListItem } from './UserGroupListItem';

class UserGroupListPage extends Component {

    state = {
        userGroupsList: null
    }

    getUserGroupList = () => {
        return userGroupReadApiService.getAllUserGroups().then(function (userGroups) {
            this.setState({ userGroupsList: userGroups })
        }, () => {
            console.log("problem occured while fetching the usergroups");
        })
    }

    componentDidMount() {

        //Mock Implementation- one api is ready we can  remove below 2 lines
        const mockUserGroupList = [
            {
                "GroupId": 17, "GroupName": "guest", "Users": [{ "UserId": 6, "UserName": "John", "UserGroups": [{ "GroupId": 2, "GroupName": "jug", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
                { "UserId": 7, "UserName": "Jetty", "UserGroups": [{ "GroupId": null, "GroupName": null, "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null }],
                "VideoGroups": null
            },
            {
                "GroupId": 18, "GroupName": "Admin", "Users": [{ "UserId": 6, "UserName": "appan", "UserGroups": [{ "GroupId": 2, "GroupName": "jug", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
                { "UserId": 7, "UserName": "lok", "UserGroups": [{ "GroupId": null, "GroupName": null, "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null }],
                "VideoGroups": null
            },
            {
                "GroupId": 19, "GroupName": "Premium", "Users": [{ "UserId": 6, "UserName": "Jamson", "UserGroups": [{ "GroupId": 2, "GroupName": "jug", "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null },
                { "UserId": 7, "UserName": "July", "UserGroups": [{ "GroupId": null, "GroupName": null, "Users": null, "VideoGroups": null }], "VideoGroups": null, "Videos": null }],
                "VideoGroups": null
            }

        ]

          this.setState({ userGroupsList: mockUserGroupList })


        //Actual implementaion
        //this.getUserGroupList();

    }
    render() {
        return (
            <div >
                <Header title={'User Group List'} />

                {this.state.userGroupsList && this.state.userGroupsList.map(element => {
                    return <UserGroupListItem userGroupDetails={element} />
                })}

            </div>
        );
    }
}

export default UserGroupListPage;