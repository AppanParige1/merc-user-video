import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';

const url = config.api.userApiUrl;

export const getAllUsers =() => {
    debugger;
    return readProxy(url);
};

export const getUserDetails =(userId) => {
    readProxy(url+userId).then((userDetails) => {
       return userDetails;
    }, ()=>{
        console.log("problem occured while fetching the user details");
    })
};