import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export const UserGroupListItem = (props) => {

    const formateUsers = (userGroups) => {
        var userList = '';
        userGroups && userGroups.forEach(element => {
            userList += ', ' + element.UserName;
        });
        return userList.substr(1);
    }

    const styles = {
        cardMargin: {
            margin: '10px',
        },
        itemStyle: {
            textDecoration:'none'
        },
        fieldStyle: {
            paddingBottom:'5px'
        },
        fieldTitle: {
            fontSize:'20px',
            color:'darkgray'
        },
        fieldValue: {
            fontSize:'20px',
            color:'gray'
        }
    };
    return (
        <Card style={styles.cardMargin} >
           <Link to={'/userGroupDetailsPage/'} style={styles.itemStyle}> 
            <CardText>
                    {<div style={styles.fieldStyle}>
                        <span style={styles.fieldTitle}>{'Name: '}</span>
                        <span style={styles.fieldValue}>{props.userGroupDetails.GroupName} </span>
                    </div>}
                    {<div style={styles.fieldStyle}> 
                        <span style={styles.fieldTitle}>{'Users: '}</span>
                        <span style={styles.fieldValue}>{formateUsers(props.userGroupDetails.Users )}</span>
                    </div>}
            </CardText>
            </Link>
        </Card>
    );
}