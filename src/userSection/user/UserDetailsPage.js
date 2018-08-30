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
        this.getUserDetails = this.getUserDetails.bind(this);
        this.getVideoList = this.getVideoList.bind(this);
    } 

    getVideoList = () => {
       
        return videoApiService.getAllVideos().then( (videos) => {
           
            this.setState({ allVideos: videos })
        }, () => {
            console.log("problem occured while fetching the videos");
        })
    }    

    getUserDetails (userId) {
       
        return userReadApiService.getUserDetails(userId).then( (userdata) =>{
           
            this.setState({ userDetails: userdata });
            this.setState({selectedVideoIds:[]});
        }, () => {
            console.log("problem occured while fetching the user details");
        })
    }

    componentDidMount() {       

        
        
        const userId = this.props.match.params.id;
        this.getUserDetails(userId);        

       
        
        this.getVideoList();
    }

    updateVideos(){
       
        userUpdateApiService.updateUser(this.state.userDetails.UserId, this.state.selectedVideoIds).then((isUpdated)=>{
            if(isUpdated){
                
                this.setState({selectedVideoIds:[]});
               return this.getUserDetails(this.state.userDetails.UserId)
            }
        });
    }
    
    updateSelectedVideos=(event, value)=> {
       
        let selectedVideoId = event.target.attributes.value.value;
        var selectVidoes = this.state.selectedVideoIds;
        if(value){
            selectVidoes.push(selectedVideoId);
        }
        else{
            var index = selectVidoes.indexOf(selectedVideoId);
            if(index !== -1){
                selectVidoes.splice(index,1);
            }
           
        }
       

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