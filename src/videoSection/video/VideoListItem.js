import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export const VideoListItem = (props) => {

    const formatevideoGroups = (videoGroups) => {
        var videoGroupList = '';
        videoGroups && videoGroups.forEach(element => {
            videoGroupList += ', ' + element.GroupName;
        });
        return videoGroupList.substr(1);
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
           <Link to={'/videoDetailsPage/'} style={styles.itemStyle}> 
            <CardText>
                    {<div style={styles.fieldStyle}>
                        <span style={styles.fieldTitle}>{'Name: '}</span>
                        <span style={styles.fieldValue}>{props.videoDetails.VideoName} </span>
                    </div>}
                    {<div style={styles.fieldStyle}> 
                        <span style={styles.fieldTitle}>{'Video Groups: '}</span>
                        <span style={styles.fieldValue}>{formatevideoGroups(props.videoDetails.VideoGroups)}</span>
                    </div>}
            </CardText>
            </Link>
        </Card>
    );
}