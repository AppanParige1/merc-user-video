import React, { Component } from 'react';
import * as videoApiService from '../../api/video/videoApiService';
import { Header } from '../../shared/Header';
import { VideoListItem } from './VideoListItem';
class VideoListPage extends Component {

    state = {
        videoList: null
    }

    getVideoList = () => {
        return videoApiService.getAllVideos().then(function (videos) {
            this.setState({ videoList: videos })
        }, () => {
            console.log("problem occured while fetching the videos");
        })
    }

    componentDidMount() {
        //Mock Implementation- one api is ready we can  remove below 2 lines
        const mockvideoList =  [
            {
                "VideoId": 23, "VideoName": "cricket world cup",
                "VideoGroups": [{ "GroupId": 11, "GroupName": "Sports", "Videos ": null },
                { "GroupId": 12, "GroupName": "News", "Videos": null }]
            },
            {
                "VideoId": 24, "VideoName": "mickymouse",
                "VideoGroups": [{ "GroupId": 14, "GroupName": "Comic", "Videos ": null },
                { "GroupId": 15, "GroupName": "Movies", "Videos": null }]
            }
        ]
        this.setState({ videoList: mockvideoList })

        //Actual implementaion
        //this.getVideoList();
    }
    render() {
        return (
            <div >
                <Header title={'Video List'} />

                {this.state.videoList && this.state.videoList.map(element => {
                    return <VideoListItem videoDetails={element} />
                })}

            </div>
        );
    }
}

export default VideoListPage;