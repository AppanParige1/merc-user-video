import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Button from '@material-ui/core/Button';
import {
    withRouter
} from 'react-router-dom';

class VideoSectionPage extends Component {


    navigateToVideoList = () => {
        this.props.history.push('/videoList')
    };

    navigateToVideoGroupList = () => {
        this.props.history.push('/videoGroupList')
    };

    render() {

        const styles = {
            cardMargin: {
                margin: '15px',
                height: '200px',
                padding: '20px'
            },
            title: {
                paddingBottom: '10px',
            }
        };

        return (
            <Card style={styles.cardMargin}>
                <div style={styles.title}>Videos</div>
                <Button variant="outlined" color="primary"
                    onClick={this.navigateToVideoList}>
                    Video
                </Button>
                <Button variant="outlined" color="primary"
                    onClick={this.navigateToVideoGroupList}>
                    Group
                </Button>
            </Card>
        );
    }
}

export default withRouter(VideoSectionPage);