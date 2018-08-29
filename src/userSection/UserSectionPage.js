import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import ToggleButton, { ToggleButtonGroup } from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import {
    withRouter
} from 'react-router-dom';

class UserSectionPage extends Component {

    navigateToUserList = () =>{
            this.props.history.push('/userList')
    };
   
    navigateToUserGroupList = () =>{
        this.props.history.push('/userGroupList')
    };

    render() {
        const styles = {
            cardMargin: {
                margin: '15px',
                height: '200px',
                padding:'20px'
            },
            title:{
                paddingBottom:'10px',
            }
        };

        return (
            <Card style={styles.cardMargin}>
            <div style={styles.title}>Users</div>
                <Button variant="outlined" color="primary"
                onClick={this.navigateToUserList} >
                    User
                </Button>
                <Button variant="outlined" color="primary" 
                onClick={this.navigateToUserGroupList}>
                    Group
                </Button>

            </Card>
        );
    }
}

export default withRouter(UserSectionPage);