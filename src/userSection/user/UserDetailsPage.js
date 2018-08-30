import React, { Component } from 'react';
import * as userReadApiService from '../../api/user/userReadApiService';
import * as userUpdateApiService from '../../api/user/userUpdateApiService';
import { Header } from '../../shared/Header';
import * as videoApiService from '../../api/video/videoApiService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader';

class UserDetailsPage extends Component {
    state = {
        userDetails: null,
        allVideos: null,
        selectedVideoIds:[]
    }

    constructor() {
        super();

        this.state = {
            userDetails: null,
            allVideos: null,
            selectedVideoIds:[]
        }

        this.updateSelectedVideos = this.updateSelectedVideos.bind(this);
        this.updateVideos = this.updateVideos.bind(this);

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


         //Mock Implementation- one api is ready we can  remove below 2 lines
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
            },
            {
                "VideoId": 24, "VideoName": "Bigboss",
                "VideoGroups": [{ "GroupId": 14, "GroupName": "Realtyshow", "Videos ": null },
                { "GroupId": 15, "GroupName": "Serial", "Videos": null }]
            }
        ]
        this.setState({ allVideos: mockvideoList })

        //Actual implementaion
        //this.getVideoList();
    }

    updateVideos =()=>{
        userUpdateApiService.updateUser(this.state.userDetails.UserId, this.state.selectedVideoIds).then((isUpdated)=>{
            if(isUpdated){
               return this.getUserDetails(this.state.userDetails.UserId)
            }
        });
    }
    
    updateSelectedVideos=(event, value)=> {
        let selectedVideoId = event.target.attributes.value.value;
        var selectVidoes = this.state.selectedVideoIds;
        selectVidoes.push(selectedVideoId);

        this.setState({selectedVideoIds:selectVidoes});
    };

    render() {
               const styles ={
                   listStyle:{
                    width: '30%',
                    float: 'left',
                    border:'1px solid gray',
                    height:'500px'
                   }
               }
        return (
            <div >
                  <Header title={this.state.userDetails && this.state.userDetails.UserName} />
                    <div style={styles.listStyle}>
                        <List subheader={<ListSubheader>Available Videos</ListSubheader>}>
                            {this.state.allVideos && this.state.allVideos.map(element => (
                                <ListItem
                                    key={element.VideoName}
                                    dense
                                    button
                                >
                                    <Checkbox
                                        tabIndex={-1}
                                        value ={element.VideoId}
                                        onChange={this.updateSelectedVideos}
                                    />
                                    <ListItemText primary={element.VideoName} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div style={{ float: 'left', paddingTop: '240px' }}>
                        <Button color="primary" onClick={this.updateVideos} >
                            Assign
                        </Button>
                    </div>
                    <div style={styles.listStyle}>
                        <List  subheader={<ListSubheader>Assigned Videos</ListSubheader>}>
                            {this.state.userDetails && this.state.userDetails.Videos.map(element => (
                                <ListItem
                                    key={element.VideoName}
                                    dense
                                    button
                                >
                                    <ListItemText primary={element.VideoName} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    </div>
        );
    }
}

export default UserDetailsPage;