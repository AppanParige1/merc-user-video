import React, { Component } from 'react';
import * as userReadApiService from '../../api/user/userReadApiService';
import { Header } from '../../shared/Header';
import * as videoApiService from '../../api/video/videoApiService';

class UserDetailsPage extends Component {
    state = {
        userDetails: null,
        allVideos: null
    }

    getVideoList = () => {
        return videoApiService.getAllVideos().then(function (videos) {
            this.setState({ videoList: videos })
        }, () => {
            console.log("problem occured while fetching the videos");
        })
    }

    getUserDetails = (userId) => {
        return userReadApiService.getUserDetails(userId).then(function (user) {
            this.setState({ userDetails: user })
        }, () => {
            console.log("problem occured while fetching the user details");
        })
    }

    componentDidMount() {
        //Mock Implementation- one api is ready we can  remove below 2 lines
        const mockUser = {
            "UserId": 3, "UserName": "GuruVayur",
            "UserGroups": [{ "GroupId": 1, "GroupName": "Admin", "Users": null, "VideoGroups": null },
            { "GroupId": 2, "GroupName": "Premium", "Users": null, "VideoGroups": null }],

            "VideoGroups": null,
            "Videos": [
                {
                    "VideoId": 23, "VideoName": "ICC World cup"
                }
            ]
        };
        this.setState({ userDetails: mockUser });

        
        //Actual implementaion
        //const userId = this.props.match.params.id;
        //this.getUserDetails(userId);


        const mockvideoList =  [
            {
                "VideoId": 23, "VideoName": "FIFA World cup",
                "VideoGroups": [{ "GroupId": 11, "GroupName": "Sports", "Videos ": null },
                { "GroupId": 12, "GroupName": "News", "Videos": null }]
            },
            {
                "VideoId": 24, "VideoName": "Mickymouse",
                "VideoGroups": [{ "GroupId": 14, "GroupName": "Comic", "Videos ": null },
                { "GroupId": 15, "GroupName": "Movies", "Videos": null }]
            }
        ]
        this.setState({ allVideos: mockvideoList })

        //Actual implementaion
        //this.getVideoList();
    }

    render() {
        const styles = {
           
        };
        return (
            <div >
                  <Header title={this.state.userDetails && this.state.userDetails.UserName} />
                  <div>
                     {this.state.allVideos && this.state.allVideos.map(element => {
                        return <span key={element.VideoName}>{element.VideoName}</span>
                    })}
                     </div>
                  <div>
                   {this.state.userDetails && this.state.userDetails.Videos.map(element => {
                        return <span key={element.VideoName}>{element.VideoName}</span>
                    })}
                    </div>
                  
            </div>
        );
    }
}

export default UserDetailsPage;