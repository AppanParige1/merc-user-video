import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export const VideoGroupListItem = (props) => {

    const formateVideos = (videos) => {
        var videoList = '';
        videos && videos.forEach(element => {
            videoList += ', ' + element.VideoName;
        });
        return videoList.substr(1);
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
           <Link to={'/videoGroupDetailsPage/'} style={styles.itemStyle}> 
            <CardText>
                    {<div style={styles.fieldStyle}>
                        <span style={styles.fieldTitle}>{'Name: '}</span>
                        <span style={styles.fieldValue}>{props.videoGroupDetails.GroupName} </span>
                    </div>}
                    {<div style={styles.fieldStyle}> 
                        <span style={styles.fieldTitle}>{'Videos: '}</span>
                        <span style={styles.fieldValue}>{formateVideos(props.videoGroupDetails.Videos )}</span>
                    </div>}
            </CardText>
            </Link>
        </Card>
    );
}