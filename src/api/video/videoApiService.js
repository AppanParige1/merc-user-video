
import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';


const videoApiUrl = config.videoApiUrl;

export const getAllVideos =() => {
    readProxy(videoApiUrl).then((users) => {
       return users;
    }, ()=>{
        console.log("problem occured while fetching the videos");
    })
};

export const getVideoDetails =(videoId) => {
    readProxy(videoApiUrl+videoId).then((userDetails) => {
       return videoDetails;
    }, ()=>{
        console.log("problem occured while fetching the video details");
    })
};