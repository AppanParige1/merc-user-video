import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export const UserListItem = (props) => {

    debugger;
    const formateUserGroups = (userGroups) => {
        debugger;
        var userGroupList = '';
        userGroups && userGroups.forEach(element => {
            userGroupList += ', ' + element.GroupName;
        });
        return userGroupList.substr(1);
    }

    const styles = {
        cardMargin: {
            margin: '10px',
        }
    };
    return (
        <Card style={styles.cardMargin} >
            <CardText>
                {<div><span>{'Name: '}</span><Link to={'/userDetailsPage/'}>{props.userDetails.UserName} </Link></div>}
            </CardText>
            
            <CardText>
                {<div> <span>{'User Groups: '}</span><span>{formateUserGroups(props.userDetails.UserGroups)}</span></div>}
            </CardText>

        </Card>
    );
}