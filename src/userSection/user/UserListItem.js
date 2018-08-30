import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export const UserListItem = (props) => {

    const formateUserGroups = (userGroups) => {
        var userGroupList = '';
        userGroups && userGroups.forEach(element => {
            userGroupList += ', ' + element.GroupName;
        });
        return userGroupList.substr(1);
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
           <Link to={'/userDetails/'+ props.userDetails.UserId} style={styles.itemStyle}> 
            <CardText>
                    {<div style={styles.fieldStyle}>
                        <span style={styles.fieldTitle}>{'Name: '}</span>
                        <span style={styles.fieldValue}>{props.userDetails.UserName} </span>
                    </div>}
                    {<div style={styles.fieldStyle}> 
                        <span style={styles.fieldTitle}>{'User Groups: '}</span>
                        <span style={styles.fieldValue}>{formateUserGroups(props.userDetails.UserGroups)}</span>
                    </div>}
            </CardText>
            </Link>
        </Card>
    );
}