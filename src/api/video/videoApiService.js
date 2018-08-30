
import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';


const videoApiUrl = config.videoApiUrl;

export const getAllVideos =() => {
    return readProxy(videoApiUrl);
};

export const getVideoDetails =(videoId) => {
    readProxy(videoApiUrl+videoId).then((videoDetails) => {
       return videoDetails;
    }, ()=>{
        console.log("problem occured while fetching the video details");
    })
};