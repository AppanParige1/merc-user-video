import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';

const url = config.userApiUrl;

export const getAllUsers =() => {
    readProxy(url).then((users) => {
       return users;
    }, ()=>{
        console.log("problem occured while fetching the users");
    })
};

export const getUserDetails =(userId) => {
    readProxy(url+userId).then((userDetails) => {
       return videoDetails;
    }, ()=>{
        console.log("problem occured while fetching the user details");
    })
};