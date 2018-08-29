import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import UserSectionPage from './userSection/UserSectionPage';
import VideoSectionPage from './videoSection/VideoSectionPage';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        const styles = {
           
        };
        return (
            <div style={styles.page}>
                <UserSectionPage></UserSectionPage>
                <VideoSectionPage></VideoSectionPage>
            </div>
        );
    }
}

export default HomePage;