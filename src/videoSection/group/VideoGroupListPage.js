import React, { Component } from 'react';
import * as videoGroupApiService from '../../api/video/videoGroupApiService';
import { Header } from '../../shared/Header';
import { VideoGroupListItem } from './VideoGroupListItem';

class VideoGroupListPage extends Component {

    state = {
        videoGroupsList: null
    }

    getVideoGroupList = () => {
        return videoGroupApiService.getAllVideoGroups().then(function (videoGroups) {
            this.setState({ videoGroupsList: videoGroups })
        }, () => {
            console.log("problem occured while fetching the videoGroups");
        })
    }

    componentDidMount() {

        //Mock Implementation- one api is ready we can  remove below 2 lines
        const mockVideoGroupList = [
            {
                "GroupId": 57, "GroupName": "Comic", 
                "Videos":  [
                    {
                        "VideoId": 23, "VideoName": "Mickumouse",
                        "VideoGroups": [{ "GroupId": 11, "GroupName": "Comic", "Videos ": null },
                        ]
                    },
                    {
                        "VideoId": 24, "VideoName": "TomAndJerry",
                        "VideoGroups": [{ "GroupId": 14, "GroupName": "Comic", "Videos ": null },
                        ]
                    }
                ]
            },
            {
                "GroupId": 58, "GroupName": "Sports", 
                "Videos":  [
                    {
                        "VideoId": 23, "VideoName": "ICC world cup",
                        "VideoGroups": [{ "GroupId": 11, "GroupName": "Sports", "Videos ": null },
                        ]
                    },
                    {
                        "VideoId": 24, "VideoName": "FIFA",
                        "VideoGroups": [{ "GroupId": 14, "GroupName": "Sports", "Videos ": null },
                        ]
                    }
                ]
            },
        ]

          this.setState({ videoGroupsList: mockVideoGroupList })


        //Actual implementaion
        //this.getVideoGroupList();

    }
    render() {
        return (
            <div >
                <Header title={'Video Group List'} />

                {this.state.videoGroupsList && this.state.videoGroupsList.map(element => {
                    return <VideoGroupListItem videoGroupDetails={element} />
                })}

            </div>
        );
    }
}

export default VideoGroupListPage;